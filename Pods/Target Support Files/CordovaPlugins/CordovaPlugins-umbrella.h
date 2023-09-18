#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "BinaryRequestSerializer.h"
#import "BinaryResponseSerializer.h"
#import "CordovaHttpPlugin.h"
#import "SDNetworkActivityIndicator.h"
#import "SM_AFHTTPSessionManager.h"
#import "SM_AFNetworking.h"
#import "SM_AFNetworkReachabilityManager.h"
#import "SM_AFSecurityPolicy.h"
#import "SM_AFURLRequestSerialization.h"
#import "SM_AFURLResponseSerialization.h"
#import "SM_AFURLSessionManager.h"
#import "TextRequestSerializer.h"
#import "TextResponseSerializer.h"
#import "CDVAppRate.h"
#import "CDVCamera.h"
#import "CDVExif.h"
#import "CDVJpegHeaderWriter.h"
#import "UIImage+CropScaleOrientation.h"
#import "CDVDevice.h"
#import "CDVNotification.h"
#import "CDVAssetLibraryFilesystem.h"
#import "CDVFile.h"
#import "CDVLocalFilesystem.h"
#import "CDVFileTransfer.h"
#import "CDVInAppBrowserNavigationController.h"
#import "CDVInAppBrowserOptions.h"
#import "CDVWKInAppBrowser.h"
#import "CDVWKInAppBrowserUIDelegate.h"
#import "NativeStorage.h"
#import "APPPrinter.h"
#import "APPPrinterFont.h"
#import "APPPrinterInfo.h"
#import "APPPrinterItem.h"
#import "APPPrinterLayout.h"
#import "APPPrinterPaper.h"
#import "APPPrinterRenderer.h"
#import "APPPrinterUnit.h"
#import "UIPrintInteractionController+APPPrinter.h"
#import "NSString+SSURLEncoding.h"
#import "SocialSharing.h"
#import "aes.h"
#import "aesopt.h"
#import "aestab.h"
#import "aes_via_ace.h"
#import "brg_endian.h"
#import "brg_types.h"
#import "Common.h"
#import "crypt.h"
#import "entropy.h"
#import "fileenc.h"
#import "hmac.h"
#import "ioapi.h"
#import "mztools.h"
#import "prng.h"
#import "pwd2key.h"
#import "sha1.h"
#import "SSZipArchive.h"
#import "unzip.h"
#import "zip.h"
#import "ZipPlugin.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];

