// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"
import Notification from "@stimulus-components/notification";

import HelloController from "./hello_controller"
application.register("hello", HelloController)
application.register("notification", Notification);

// import ToastController from "./toast_controller"
// application.register("toast", ToastController)
