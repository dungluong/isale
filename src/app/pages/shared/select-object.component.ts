import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { AnalyticsService } from 'src/app/providers/analytics.service';
import { snakeToKebabCase } from 'src/app/providers/helper';
import { RouteHelperService } from 'src/app/providers/route-helper.service';
import { BarcodeInputComponent } from './barcode-input.component';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DataService } from 'src/app/providers/data.service';

@Component({
    selector: 'money-input',
    templateUrl: 'money-input.component.html'
})
export class MoneyInputComponent {
    @ViewChild('template', { static: true }) template;
    @Input() table: any;
    @Input() displayField: any;
    @Input() selected: any;
    @Input() canScan = false;
    @Input() scanField = false;
    tableKebab;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private navCtrl: RouteHelperService,
        private modalCtrl: ModalController,
        private dataService: DataService,
        private barcodeScanner: BarcodeScanner,
        private analyticsService: AnalyticsService,
    ) {}

    async ngOnInit() {
        this.tableKebab = snakeToKebabCase(this.table);
        this.viewContainerRef.createEmbeddedView(this.template);
    }

    showSearch() {
        this.analyticsService.logEvent('select-object-search');
        const callback = (data) => {
            if (data) {
                this.selected = data;
            }
        };
        this.navCtrl.push('/' + this.tableKebab, { callback, searchMode: true });
    }

    removeSelected() {
        this.selected = null;
    }

    async scan() {
        this.analyticsService.logEvent('select-object-scan');
        if (this.navCtrl.isNotCordova()) {
            const modal = await this.modalCtrl.create({ component: BarcodeInputComponent });
            await modal.present();
            const { data } = await modal.onDidDismiss();
            if (data && data.barcode) {
                this.findObjectByCode(data.barcode);
            }
            return;
        }
        this.barcodeScanner.scan().then((barcodeData) => {
            // Success! Barcode data is here
            if (!barcodeData || !barcodeData.text) {
                return;
            }
            this.findObjectByCode(barcodeData.text);
        });
    }

    findObjectByCode(barcode) {
        this.dataService.getObjectsByField(this.scanField, barcode, this.table).then(async (result) => {
            if (!result || !result.length) {
                return;
            }
            const data = result[0];
            this.analyticsService.logEvent('select-object-scan-ok');
            this.selected = data;
        });
    }
}
