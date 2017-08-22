webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Início</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n  <button ion-button color="secondary" menuToggle>Secondary</button>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__HttpClient__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PessoaService = (function () {
    function PessoaService(httpClient) {
        this.httpClient = httpClient;
        this.urlPessoa = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + "pessoa/";
        this.urlFoto = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].API_ENDPOINT + "foto/";
    }
    PessoaService.prototype.createPessoa = function (pessoa) {
        return this.httpClient.post(this.urlPessoa, pessoa)
            .map(function (response) { return response.json(); });
    };
    PessoaService.prototype.updatePessoa = function (pessoa, id) {
        return this.httpClient.put(this.urlPessoa, id, pessoa)
            .map(function (response) { return response.json(); });
    };
    PessoaService.prototype.getPessoas = function () {
        return this.httpClient.get(this.urlPessoa)
            .map(function (response) { return response.json(); });
    };
    return PessoaService;
}());
PessoaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__HttpClient__["a" /* HttpClient */]])
], PessoaService);

//# sourceMappingURL=pessoa.service.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'http://educa-educamais.a3c1.starter-us-west-1.openshiftapps.com/api/v1/';
AppSettings.API_OAUTH = 'http://educa-educamais.a3c1.starter-us-west-1.openshiftapps.com/oauth/token';
//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		574,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aluno_form_aluno_form__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pessoa_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_settings__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlunoPage = (function () {
    function AlunoPage(navCtrl, navParams, pessoaService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pessoaService = pessoaService;
        this.loadingCtrl = loadingCtrl;
        this.carregarAlunos = function () {
            _this.loader = _this.loadingCtrl.create({
                content: "Aguarde..."
            });
            _this.loader.present();
            _this.pessoaService.getPessoas().subscribe(function (suc) {
                _this.listPessoas = suc;
                _this.loader.dismiss();
            }, function (err) {
                _this.loader.dismiss();
                alert("Ocorreu um erro ao carregar os alunos");
            });
        };
    }
    AlunoPage.prototype.ionViewCanEnter = function () {
        this.carregarAlunos();
        return true;
    };
    AlunoPage.prototype.newAluno = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aluno_form_aluno_form__["a" /* AlunoFormPage */]);
    };
    AlunoPage.prototype.editAluno = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aluno_form_aluno_form__["a" /* AlunoFormPage */], { item: item });
    };
    AlunoPage.prototype.urlFoto = function (foto) {
        return __WEBPACK_IMPORTED_MODULE_4__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'foto/' + foto;
    };
    return AlunoPage;
}());
AlunoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aluno',template:/*ion-inline-start:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\aluno\aluno.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Alunos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-fab bottom right>\n\n        <button ion-fab (click)="newAluno()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab>\n\n    <ion-list>\n\n        <button *ngFor="let item of listPessoas" ion-item (click)="editAluno(item)">\n\n        <ion-thumbnail item-start>\n\n            <img src="{{urlFoto(item.foto)}}" onerror="this.src=\'assets/img/educa_logo.svg\'">\n\n        </ion-thumbnail>\n\n        <ion-icon item-left></ion-icon>\n\n            {{item.nome}} <br/>\n\n            {{item.email}}\n\n        <div class="item-note" item-right>\n\n            {{item.instituicao}} <br>\n\n            {{item.nascimento | date:\'d/M/y\'}} <br>\n\n        </div>\n\n        <div>{{item.observacao}}</div>\n\n        </button>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\aluno\aluno.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_pessoa_service__["a" /* PessoaService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], AlunoPage);

//# sourceMappingURL=aluno.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pessoa_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlunoFormPage = (function () {
    function AlunoFormPage(navCtrl, navParams, fb, camera, pessoaService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.pessoaService = pessoaService;
        this.loadingCtrl = loadingCtrl;
        this.isEdit = false;
        var item = navParams.get("item");
        this.form = fb.group({
            'nome': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)])],
            'email': [''],
            'nascimento': [''],
            'observacao': [''],
            'instituicao': [''],
            'foto': [''],
        });
        setTimeout(function () {
            if (item) {
                _this.form.setValue({
                    nome: item.nome,
                    email: item.email,
                    nascimento: item.nascimento,
                    observacao: item.observacao,
                    instituicao: item.instituicao,
                    foto: ''
                });
                _this.isEdit = true;
                _this.idUpdate = item._id;
                _this.fotoPreview = __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* AppSettings */].API_ENDPOINT + 'foto/' + item.foto;
            }
        }, 1);
        this.loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
    }
    AlunoFormPage.prototype.salvar = function () {
        var request = this.form.value;
        this.loader.present();
        if (this.isEdit) {
            if (this.fotoPreview.startsWith("data:")) {
                request.foto = this.fotoPreview.replace("data:image/jpeg;base64,", "");
            }
            else {
                delete request.foto;
            }
            this.updatePessoa(request);
        }
        else {
            if (this.fotoPreview) {
                request.foto = this.fotoPreview.replace("data:image/jpeg;base64,", "");
            }
            else {
                delete request.foto;
            }
            this.createPessoa(request);
        }
    };
    AlunoFormPage.prototype.createPessoa = function (request) {
        var _this = this;
        this.pessoaService.createPessoa(request).subscribe(function (suc) {
            _this.navCtrl.pop();
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    AlunoFormPage.prototype.updatePessoa = function (request) {
        var _this = this;
        this.pessoaService.updatePessoa(request, this.idUpdate).subscribe(function (suc) {
            _this.navCtrl.pop();
            _this.loader.dismiss();
        }, function (error) {
            _this.loader.dismiss();
        });
    };
    AlunoFormPage.prototype.tirarFoto = function (fileInput) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.fotoPreview = "data:image/jpeg;base64," + imageData;
        }, function (err) {
            fileInput.click();
        });
    };
    AlunoFormPage.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    AlunoFormPage.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.fotoPreview = "data:image/jpeg;base64," + btoa(binaryString);
    };
    return AlunoFormPage;
}());
AlunoFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aluno-form',template:/*ion-inline-start:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\aluno\aluno-form\aluno-form.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Informações Aluno</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div padding text-center>\n\n        <img class="fotoPessoa" *ngIf="fotoPreview" src="{{fotoPreview}}" (click)="tirarFoto(fileInput)" onerror="this.src=\'assets/img/educa_logo.svg\'">\n\n        <span class="editarFoto" *ngIf="fotoPreview" (click)="tirarFoto(fileInput)">Alterar Foto</span>\n\n        <input #fileInput type="file" style="display:none" accept="image/*" (change)="handleFileSelect($event)">\n\n        <button ion-button icon-left color="primary" *ngIf="!fotoPreview" (click)="tirarFoto(fileInput)"><ion-icon name="camera"></ion-icon> Foto </button>\n\n    </div>\n\n    <form [formGroup]="form">\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label floating>Nome</ion-label>\n\n                <ion-input formControlName="nome" type="text" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Nascimento</ion-label>\n\n                <ion-datetime formControlName="nascimento" displayFormat="DD/MM/YYYY"></ion-datetime>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>E-mail</ion-label>\n\n                <ion-input formControlName="email" type="email" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Observacao</ion-label>\n\n                <ion-input formControlName="observacao" type="text" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>Instituicao</ion-label>\n\n                <ion-input formControlName="instituicao" type="text" value=""></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n    </form>\n\n    <div padding text-center>\n\n      <button ion-button icon-left color="primary" [disabled]="!form.valid" (click)="salvar()"><ion-icon name="cloud-done"></ion-icon> Salvar </button>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\aluno\aluno-form\aluno-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__services_pessoa_service__["a" /* PessoaService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], AlunoFormPage);

//# sourceMappingURL=aluno-form.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpClient = (function () {
    function HttpClient(http, _alertCtrl) {
        this.http = http;
        this._alertCtrl = _alertCtrl;
    }
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
    };
    HttpClient.prototype.get = function (url, trait) {
        var _this = this;
        if (trait === void 0) { trait = true; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).catch(function (error) { return _this.traitError(error, trait); });
    };
    HttpClient.prototype.post = function (url, data, trait) {
        var _this = this;
        if (trait === void 0) { trait = true; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
            headers: headers
        }).catch(function (error) { return _this.traitError(error, trait); });
    };
    HttpClient.prototype.put = function (url, id, data, trait) {
        var _this = this;
        if (trait === void 0) { trait = true; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.put(url + id, data, {
            headers: headers
        }).catch(function (error) { return _this.traitError(error, trait); });
    };
    HttpClient.prototype.delete = function (url, trait) {
        var _this = this;
        if (trait === void 0) { trait = true; }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        }).catch(function (error) { return _this.traitError(error, trait); });
    };
    HttpClient.prototype.traitError = function (error, trait) {
        if (trait) {
            var info = this.extractMessageError(error);
            this.generatePopUpError(info);
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
    };
    HttpClient.prototype.generatePopUpError = function (info) {
        var alert = this._alertCtrl.create({
            title: info.title,
            subTitle: info.message,
            buttons: ['OK']
        });
        alert.present();
    };
    HttpClient.prototype.extractMessageError = function (error) {
        if (error.status == 500) {
            return { title: "Serviço Indisponível", message: "Tente novamente mais tarde." };
        }
        else if (error.status == 400) {
            if (error.json().error) {
                if (error.json().error.mensagem) {
                    return { title: "Error", message: error.json().error.mensagem };
                }
                else if (error.json().error.fields) {
                    var field = error.json().error.fields;
                    var mensagem = field[Object.keys(field)[0]];
                    return { title: "Error", message: mensagem[0] };
                }
                else {
                    return { title: "Error", message: "Tente novamente mais tarde." };
                }
            }
            else {
                return { title: "Error", message: "Erro desconhecido" };
            }
        }
        else if (error.status == 413) {
            return { title: "Error", message: "Arquivo muito grande para envio" };
        }
    };
    return HttpClient;
}());
HttpClient = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
], HttpClient);

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = fb.group({
            'username': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4)])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.logar = function () {
        if (this.form.valid) {
            /* this._userService.loginUser(this.form.value).subscribe(data => {
                 localStorage.setItem('token', data.access_token);
                 this.navCtrl.setRoot(HomePage);
             },error=>{
               let alert = this._alertCtrl.create({
                 title: 'Erro',
                 subTitle: 'Login/Senha inválidos!',
                 buttons: ['OK']
               });
               alert.present();
             })*/
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\login\login.html"*/'<ion-content>\n    <p padding text-center>\n      <img width="50%" src="assets/img/educa_logo.svg"/>      \n    </p>\n    <form [formGroup]="form">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Usuário</ion-label>\n          <ion-input formControlName="username" type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Senha</ion-label>\n          <ion-input formControlName="password" type="password" value=""></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n    <div padding text-center>\n      <button ion-button icon-left color="primary" [disabled]="!form.valid" (click)="logar()"><ion-icon name="key"></ion-icon> Entrar </button>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_aluno_aluno__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_aluno_aluno_form_aluno_form__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_HttpClient__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pessoa_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_library__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_aluno_aluno__["a" /* AlunoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_aluno_aluno_form_aluno_form__["a" /* AlunoFormPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_aluno_aluno__["a" /* AlunoPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_aluno_aluno_form_aluno_form__["a" /* AlunoFormPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_photo_library__["a" /* PhotoLibrary */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__services_HttpClient__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_11__services_pessoa_service__["a" /* PessoaService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aluno_aluno__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //rootPage: any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_aluno_aluno__["a" /* AlunoPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Alunos', component: __WEBPACK_IMPORTED_MODULE_6__pages_aluno_aluno__["a" /* AlunoPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title padding text-center >\n        <img width="60%" src="assets/img/educa_logo.svg"/>\n        </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Documentos\Clientes\Matera\EducaMais-Front\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map