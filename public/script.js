class Card {
  constructor() {
    this.bindings = {};
    this.templateUrl = '/templates/card.html';
    this.controller = CardController;
    this.controllerAs = 'cc';
  }
}

class CardController {

  constructor($http, $log) {
    this.$log = $log;
    this.$http = $http;
    this.users = [];
  }

  $onInit() {
    this.$http.get('/users')
      .then((res) => this.users = res.data);
  }
}

class Widget {
  constructor() {
    this.scope = {};
    this.templateUrl = '/templates/widget.html';
    this.controller = WidgetController;
    this.controllerAs = 'w';
  }
}

class WidgetController {

  constructor(
    image = 'fa fa-user',
    label = 'Label',
    klass = 'darkred') {
    this.image = image;
    this.label = label;
    this.klass = klass;
  }
}

class AvatarWidget extends Widget {
  constructor() {
    super();
    this.scope = {
      index: '='
    };
    this.controller = AvatarWidgetController;
  }
}

class AvatarWidgetController extends WidgetController {
  constructor($scope) {
    super('fa fa-user', 'Who am I', 'darkred');
    this.$scope = $scope;
  }

  $onInit() {
    this.index = this.$scope.index;
  }
}

class PhoneWidget extends Widget {
  constructor() {
    super();
    this.controller = PhoneWidgetController;
  }
}

class PhoneWidgetController extends WidgetController {
  constructor() {
    super('fa fa-phone', 'Get in touch', 'lightgreen');
  }
}

class LocationWidget extends Widget {
  constructor() {
    super();
    this.controller = LocationWidgetController;
  }
}

class LocationWidgetController extends WidgetController {
  constructor() {
    super('fa fa-map-marker', 'Find me');
  }
}

class SiteWidget extends Widget {
  constructor() {
    super();
    this.controller = SiteWidgetController;
  }
}

class SiteWidgetController extends WidgetController {
  constructor() {
    super('fa fa-map-marker', 'Visit me');
  }
}

class EmailWidget extends Widget {
  constructor() {
    super();
    this.controller = EmailWidgetController;
  }
}

class EmailWidgetController extends WidgetController {
  constructor() {
    super('fa fa-envelope-o', 'Write me');
  }
}

class NetworkWidget extends Widget {
  constructor() {
    super();
    this.controller = NetworkWidgetController;
  }
}

class NetworkWidgetController extends WidgetController {
  constructor() {
    super('fa fa-comment-o', 'Follow me');
  }
}

angular.module('directoryApp', [])
  .run(function ($http) {
    $http.defaults.headers.common.NgApp = 'directoryApp';
  })
  .directive('card', Card)
  .directive('widget', Widget)
  .directive('avatarWidget', AvatarWidget)
  .directive('phoneWidget', PhoneWidget)
  .directive('locationWidget', LocationWidget)
  .directive('siteWidget', SiteWidget)
  .directive('emailWidget', EmailWidget)
  .directive('networkWidget', NetworkWidget);
