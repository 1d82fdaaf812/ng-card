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
    const user = {
      name: 'VP',
      character: 'Coding Club',
      date: new Date().getTime()
    };
    this.$http.post('/users', user)
    .then(() => this.$http.get('/users'))
      .then((res) => this.users = res.data);
  }

  parseName(name) {
    return `The name is ${name}`;
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
      name: '&'
    };
    this.controller = AvatarWidgetController;
  }
}

class AvatarWidgetController extends WidgetController {
  constructor($scope, $log) {
    super('fa fa-user', 'Who am I', 'darkred');
    this.$log = $log;
    this.$scope = $scope;
  }

  $onInit() {
    this.label = this.$scope.name;
    this.index = this.$scope.index;
    this.$log.log(this.name);
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
    super();
    this.klass = 'black';
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
    super();
    this.klass = 'gold';
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
    super();
    this.klass = 'blue';
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
    super();
    this.klass = 'magenta';
  }
}

angular.module('pesonalCardApp', [])
  .run(function ($http) {
    $http.defaults.headers.common.ByVal = 'pesonalCardApp';
  })
  .directive('card', Card)
  .directive('widget', Widget)
  .directive('avatarWidget', AvatarWidget)
  .directive('phoneWidget', PhoneWidget)
  .directive('locationWidget', LocationWidget)
  .directive('siteWidget', SiteWidget)
  .directive('emailWidget', EmailWidget)
  .directive('networkWidget', NetworkWidget);
