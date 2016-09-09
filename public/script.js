class Widget {
  constructor() {
    this.scope = {};
    this.templateUrl = '/templates/widget.html';
    this.controller = WidgetController;
    this.controllerAs = 'w';
  }
}

class WidgetController {

  constructor() {
    this.image = 'fa fa-user'
    this.label = 'Label';
    this.klass = 'darkred';
  }
}

class AvatarWidget extends Widget {
  constructor() {
    super();
  }
} 

class AvatarWidgetController extends WidgetController {
  constructor() {
    super();
    this.klass = 'darkred';
  }
} 

angular.module('pesonalCardApp', [])
  .directive('widget', Widget)
  .directive('avatarWidget', AvatarWidget);