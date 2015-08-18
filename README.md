Kendo UI Core Mobile App<br/>(formerly the Kendo UI Mobile app template)
====================
<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2Fsample-kendo-ui-core-widgets" target="_blank"><img src="http://docs.telerik.com/platform/appbuilder/sample-apps/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a>

This sample (formerly the Kendo UI Mobile app template) shows how to use Telerik AppBuilder and the mobile widgets from Kendo UI Core to develop a hybrid mobile app. The app provides a welcome screen, a dummy login form, geolocation implementation and data binding.

## Telerik AppBuilder and Kendo UI Core

> **IMPORTANT:** Telerik AppBuilder provides a customized Kendo UI Core package. The customized package contains widgets and framework features for mobile development.

AppBuilder™ is an Integrated Cloud Environment (ICE) that eliminates the complexity associated with cross-platform mobile development. By combining the convenience of a local development environment with the power and flexibility of the cloud, AppBuilder lets you build hybrid mobile apps for multiple mobile platforms. For more information, see the [Telerik AppBuilder web page].

Kendo UI is a UI framework that provides everything you need to build sites and apps with pure JavaScript and HTML5. Kendo UI Core is the open source version of Kendo UI and provides 40+ widgets and framework features for mobile and web development. For more information, see the [Kendo UI web page].

## Sample Overview

This sample shows you how to implement a native-looking user interface along with the unique Flat UI. The app provides a welcome screen, a dummy login form, geolocation implementation and data binding. This sample was formerly available as the **Kendo UI Mobile** and **Kendo UI mobile app** project templates.

This sample shows how to use the following widgets and features of Kendo UI Core:

* **[Kendo MVVM]:** Model View ViewModel (MVVM) is a design pattern which helps developers separate the Model (the data) from the View (the UI). The View-Model part of MVVM is responsible for exposing the data objects from the Model in such a way that those objects are easily consumed in the View.
* **[Application]:** The widget provides the necessary tools for building native-looking web based mobile applications.
* **[View]:** The widget represents a screen in the Kendo mobile Application.
* **[Tabstrip]:** The widget displays an application-wide group of navigation buttons. The look of the mobile TabStrip changes depending on the user mobile device and operating system.
* **[NavBar]:** The widget displays an application navigation bar. The mobile NavBar may display the current view title in the center, and optionally some additional left and right aligned widgets (a back button, settings button, etc.).
* **[Button]:** The widget navigates to a mobile View or executes a custom callback when tapped.
* **[ListView]:** The widget displays flat or grouped list of items.
* **[ObservableObject]:** The kendo.data.ObservableObject is the building block of Kendo MVVM.
* **[DataSource]:** The DataSource component is an abstraction for using local data (array of JavaScript objects) or remote data (web service returning JSON, JSONP, OData or XML). 

This sample shows how to use the following Apache Cordova core plugins:

* **[Geolocation]:** The plugin provides information about the location of the device.
* **[Dialogs (Notification)]:** The plugin provides access to the native prompt, alert and confirmation dialogs, and to the beep alerts.

For more information about the Kendo UI widget APIs, see the [Kendo UI API Reference]. 

## Cloning the Sample

You can clone this sample in Telerik AppBuilder, explore and modify the code, and build and run it on Android, iOS and Windows Phone 8 devices.

### Clone the sample app in the AppBuilder in-browser client

1. In your browser, verify that you are logged in the Telerik Platform and you have switched to the account in which you want to develop your application.
1. In the account dashboard, click the workspace in which you want to develop your application.
1. Click **Create project**.
1. Select **AppBuilder Hybrid project**.
1. Select **Start from sample project**.
1. Select **Demo Applications**.
1. Select **Kendo ui core widgets**.
1. (Optional) Rename the project.
1. (Optional) Update the description.
1. Click **Create Project**.

### Clone a sample app in the AppBuilder Windows client

1. Verify that the AppBuilder Windows client is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. In the dashboard, click **Samples** and select **Hybrid**.
1. From the **Workspace** drop-down menu, select the workspace in which you want to develop your application.
1. Select **Demos**.
1. Select **Kendo Ui Core Widgets**.
1. (Optional) Rename the project.
1. Click **Clone**.

### Clone a sample app in the AppBuilder extension for Visual Studio

1. Select **AppBuilder** &#8594; **Get Sample**.
1. Select **Hybrid**.
1. Select **Demos**.
1. Select **Kendo Ui Core Widgets**.
1. (Optional) Rename the project.
1. Click **Get**.

The extension for Visual Studio copies the sample files locally. The extension creates a new solution and project and loads them.

### Clone a sample app in the AppBuilder command-line interface

1. To list the available samples, run the following command.

	```bash
	appbuilder sample
	```
1. Run the clone command for the sample as listed by `appbuilder sample`.
	
	```bash
	appbuilder sample clone kendo-ui-core-widgets
	```

The AppBuilder command-line interface shows the following message: `Successfully initialized project in the folder!`

## Running the Sample

With Telerik AppBuilder, you can deploy apps in the device simulator and on device wirelessly or via cable connection. For more information about running apps, see [Running Your App].

## License

This sample is licensed under the Apache License, Version 2.0. For more information, see [License].

[Telerik AppBuilder web page]: http://www.telerik.com/appbuilder
[License]: License.md
[Kendo UI web page]: http://www.telerik.com/kendo-ui
[Kendo UI API Reference]: http://docs.telerik.com/kendo-ui/api/introduction
[Running Your App]: http://docs.telerik.com/platform/appbuilder/testing-your-app/run-your-app
[Kendo MVVM]: http://docs.telerik.com/kendo-ui/framework/mvvm/overview
[Application]: http://docs.telerik.com/kendo-ui/mobile/application
[View]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/view
[Tabstrip]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/tabstrip
[NavBar]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/navbar
[Button]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/button
[ListView]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/listview
[ObservableObject]: http://docs.telerik.com/kendo-ui/api/javascript/data/observableobject
[DataSource]: http://docs.telerik.com/kendo-ui/framework/datasource/overview
[Geolocation]: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
[Dialogs (Notification)]: https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md
