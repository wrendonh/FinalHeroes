"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(_route, _router, _heroService) {
        this._route = _route;
        this._router = _router;
        this._heroService = _heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var param = this._route.snapshot.paramMap.get('nickName');
        if (param) {
            var nickName = param;
            this.getHero(nickName);
        }
    };
    HeroDetailComponent.prototype.getHero = function (nickName) {
        var _this = this;
        this._heroService.getHero(nickName).subscribe(function (hero) { return _this.hero = hero; }, function (error) { return _this.errorMessage = error; });
    };
    HeroDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/heroes']);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './hero-detail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            hero_service_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map