import { IProduct } from './product.interface';
import { IContact } from './contact.interface';
import { IStaff } from './staff.interface';
import { IOrder } from './order.interface';
import { IMoneyAccount } from './money-account.interface';
import { IDebt } from './debt.interface';
import { IReceivedNote } from './received-note.interface';
export interface ITrade {
    id: number;
    staffId: number;
    contactId: number;
    productId: number;
    orderId: number;
    debtId: number;
    moneyAccountId: number;
    isReceived: boolean;
    value: number;
    note: string;
    createdAt: string;
    modifiedAt: string;
    staff: IStaff;
    contact: IContact;
    product: IProduct;
    order: IOrder;
    debt: IDebt;
    moneyAccount: IMoneyAccount;
    isPurchase: boolean;
    productCount: number;
    imageUrlsJson: string;
    avatarUrl: string;
    fee: number;
    onlineId: number;
    receivedNoteId: number;
    receivedNote: IReceivedNote;
    transferNoteId: number;
    transferNote: any;
    saveAccount: boolean;
}