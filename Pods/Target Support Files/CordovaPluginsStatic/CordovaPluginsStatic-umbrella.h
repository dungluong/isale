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

#import "AppDelegate+FirebasePlugin.h"
#import "FirebasePlugin.h"
#import "FirebasePluginMessageReceiver.h"
#import "FirebasePluginMessageReceiverManager.h"

FOUNDATION_EXPORT double CordovaPluginsStaticVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsStaticVersionString[];

