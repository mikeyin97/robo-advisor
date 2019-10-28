(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_PageComponents_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/PageComponents/Header */ "./src/components/Pages/PageComponents/Header.js");
/* harmony import */ var _Pages_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/PageComponents/Sidebar */ "./src/components/Pages/PageComponents/Sidebar.js");
/* harmony import */ var _Pages_PageComponents_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/PageComponents/Content */ "./src/components/Pages/PageComponents/Content.js");
/* harmony import */ var _Login_SignupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login/SignupForm */ "./src/components/Login/SignupForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/App.js";
// client/src/App.js







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleSignOut = async () => {
      const set = this.setState;
      setTimeout(function () {
        set({
          user: null
        });
      }, 150);
    };

    this.state = {
      user: "",
      page: "Home"
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.setState = this.setState.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  handleSignIn() {
    //change to better implementation
    this.setState({
      user: "Josh Kang"
    });
  }

  renderRedirect() {
    if (!this.state.user) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
        to: "/signin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      });
    }
  }

  handlePageChange(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    if (this.state.user) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.renderRedirect(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_PageComponents_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
        class: "header-component",
        currentUser: this.state.user,
        handlePageChange: this.handlePageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        class: "sidebar-component",
        handlePageChange: this.handlePageChange,
        handleSignOut: this.handleSignOut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_PageComponents_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
        class: "content-component",
        handlePageChange: this.handlePageChange,
        page: this.state.page,
        currentUser: this.state.user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
        match: "/signin",
        component: _Login_SignupForm__WEBPACK_IMPORTED_MODULE_4__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }));
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Login/SignupForm.js":
/*!********************************************!*\
  !*** ./src/components/Login/SignupForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "../../../../../node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "../../../../../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_erroricon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/erroricon.png */ "./src/images/erroricon.png");
/* harmony import */ var _images_erroricon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_erroricon_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Login/SignupForm.js";






class SignupForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = event => {
      let field;

      if (event.key == "Tab") {
        if (this.state.field == "username") {
          field = "email";
        } else if (this.state.field == "email") {
          field = "password";
        }

        this.setState({
          field
        });
      }
    };

    this.state = {
      error: {
        email: "",
        password: ""
      },
      user: {
        name: "",
        email: "",
        password: ""
      },
      hasAccount: false,
      field: ""
    };
    this.changeForm = this.changeForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    const field = this.state.field;
    let user = this.state.user;

    if (field === "username") {
      user.name = event.target.value;
    } else if (field === "password") {
      user.password = event.target.value;
    } else if (field === "email") {
      user.email = event.target.value;
    }

    this.setState({
      user
    });
  }

  handleFormClick(event) {
    this.setState({
      field: event.target.name
    });
  }

  submitSignup() {
    let error = {
      email: "",
      password: ""
    };

    if (this.state.hasAccount) {
      // if user + password does not match
      if (this.state.user.password === "111111") {
        error = this.state.error;
        error.password = "Wrong username/password combination.";
      }
    } else {
      if (this.state.user.email === "mike@yin") {
        error = this.state.error;
        error.email = "Email in use.";
      }
    }

    this.setState({
      error: error
    });
    return false;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.error.email === "" && this.state.error.password === "") {
      // post, etc, etc. , update state and upwards loading, etc... (while in loading state, disable form fields)
      // check form errors here - email in use and wrong username password combo and update error field on form. 
      // can use a spinner button
      console.log(this.state.user);
    }
  }

  changeForm() {
    let error = {
      email: "",
      password: ""
    };
    let user = {
      name: "",
      email: "",
      password: ""
    };
    let field = "";
    this.setState({
      field,
      error,
      user,
      hasAccount: !this.state.hasAccount
    });
  }

  render() {
    let form;
    let emailError;
    let passwordError;
    let passwordErrorComponent;
    let emailErrorComponent;

    if (!this.state.hasAccount) {
      if (this.state.error.email) {
        emailError = "Error: " + this.state.error.email;
        emailErrorComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          id: "erroricon2",
          src: _images_erroricon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, emailError));
      }

      form = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginbox",
        id: "signup",
        onKeyDown: this.handleKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Register for an Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "signupform",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
        onChange: this.handleChange,
        onClick: this.handleFormClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Your Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
        value: this.state.user.name,
        required: "required",
        name: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
        onChange: this.handleChange,
        onClick: this.handleFormClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Email Address \xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "errorText2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, emailErrorComponent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
        value: this.state.user.email,
        required: "required",
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
        onChange: this.handleChange,
        onClick: this.handleFormClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Password (minimum 6 characters)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
        value: this.state.user.password,
        required: "required",
        type: "password",
        pattern: ".{6,}",
        name: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttoncontainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "primary",
        type: "submit",
        onClick: this.submitSignup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "Submit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Have an account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: this.changeForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Log in")));
    } else {
      if (this.state.error.password) {
        passwordError = "Error: " + this.state.error.password;
        passwordErrorComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          id: "erroricon2",
          src: _images_erroricon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, passwordError));
      }

      form = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loginbox",
        id: "login",
        onKeyDown: this.handleKeyPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Login to Your Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "signupform",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
        onChange: this.handleChange,
        onClick: this.handleFormClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
        value: this.state.user.email,
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
        onChange: this.handleChange,
        onClick: this.handleFormClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Password \xA0\xA0\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "errorText2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, passwordErrorComponent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"].Control, {
        value: this.state.user.password,
        type: "password",
        name: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buttoncontainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "primary",
        type: "submit",
        onClick: this.submitSignup,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Submit"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Need an account? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: this.changeForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Sign up")));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signinbackground",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "logo",
      src: _images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }), form);
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./src/components/Pages/Analyzer.js":
/*!******************************************!*\
  !*** ./src/components/Pages/Analyzer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageComponents_Wholeform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageComponents/Wholeform */ "./src/components/Pages/PageComponents/Wholeform.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/Analyzer.js";



class Analyzer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let questions = [];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "content analyzer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Analyzer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Input your portfolio and let us analyze its risk and return!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageComponents_Wholeform__WEBPACK_IMPORTED_MODULE_1__["default"], {
      source: "analyzer",
      hasStocks: true,
      questions: questions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Analyzer);

/***/ }),

/***/ "./src/components/Pages/Builder.js":
/*!*****************************************!*\
  !*** ./src/components/Pages/Builder.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageComponents_Wholeform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageComponents/Wholeform */ "./src/components/Pages/PageComponents/Wholeform.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/Builder.js";



class Builder extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let questions = [['How much money are you willing to invest? (in $)', '\\d+\\.?\\d*'], ['Until when do you want to invest? (MM/YYYY)', '(0[1-9]|10|11|12)/[0-9]{4}$'], ['How much do you hope to get back from your investment? (in $)', '\\d+\\.?\\d*']];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "content builder",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Builder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "We will build a portfolio for you based on your preferences!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageComponents_Wholeform__WEBPACK_IMPORTED_MODULE_1__["default"], {
      source: "builder",
      hasStocks: false,
      questions: questions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Builder);

/***/ }),

/***/ "./src/components/Pages/Enhancer.js":
/*!******************************************!*\
  !*** ./src/components/Pages/Enhancer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageComponents_Wholeform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageComponents/Wholeform */ "./src/components/Pages/PageComponents/Wholeform.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/Enhancer.js";



class Enhancer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    let questions = [['What\'s the maximum number of stocks you want in your portfolio? (between 1 to 100)', '^[1-9]$|^[1-9][0-9]$|^(100)$'], ['Until when do you want to hold this portfolio (MM/YYYY)?', '(0[1-9]|10|11|12)/[0-9]{4}$']];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "content enhancer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Enhancer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Input a portfolio and we'll generate a better one!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PageComponents_Wholeform__WEBPACK_IMPORTED_MODULE_1__["default"], {
      source: "enhancer",
      hasStocks: true,
      questions: questions,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Enhancer);

/***/ }),

/***/ "./src/components/Pages/Homepage.js":
/*!******************************************!*\
  !*** ./src/components/Pages/Homepage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_fintech_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/fintech.png */ "./src/images/fintech.png");
/* harmony import */ var _images_fintech_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_fintech_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/Homepage.js";



class Homepage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(event, pageName) {
    this.setState({
      page: pageName
    });
    this.props.handlePageChange(pageName);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "content homepage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Getting Started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Welcome to drainr, the one-stop shop for all your financial portfolio needs!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "We offer several services as described below. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      onClick: e => this.changePage(e, "Analyzer"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Analyzer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Input a portfolio and analyze it's risk and return over time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      onClick: e => this.changePage(e, "Enhancer"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Enhancer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Input a portfolio to get a better portfolio that dominates it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      onClick: e => this.changePage(e, "Builder"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Builder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Input your return target and preferred strategy to build a suitable portfolio."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      onClick: e => this.changePage(e, "My Portfolios"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "My Portfolios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "View previous portfolios and analyses.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      class: "homeimage",
      src: _images_fintech_png__WEBPACK_IMPORTED_MODULE_1___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Content.js":
/*!********************************************************!*\
  !*** ./src/components/Pages/PageComponents/Content.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Homepage */ "./src/components/Pages/Homepage.js");
/* harmony import */ var _Analyzer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Analyzer */ "./src/components/Pages/Analyzer.js");
/* harmony import */ var _Enhancer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Enhancer */ "./src/components/Pages/Enhancer.js");
/* harmony import */ var _Builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Builder */ "./src/components/Pages/Builder.js");
/* harmony import */ var _Portfolios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Portfolios */ "./src/components/Pages/Portfolios.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Content.js";







class Content extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let content;

    if (this.props.page === "Home") {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Homepage__WEBPACK_IMPORTED_MODULE_1__["default"], {
        handlePageChange: this.props.handlePageChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      });
    } else if (this.props.page == "Analyzer") {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Analyzer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      });
    } else if (this.props.page == "Enhancer") {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Enhancer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    } else if (this.props.page == "Builder") {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Builder__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      });
    } else if (this.props.page == "My Portfolios") {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portfolios__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "mainContent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, content));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Formunit.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/PageComponents/Formunit.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "../../../../../node_modules/react-bootstrap/esm/Button.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Formunit.js";



class Formunit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fieldData = this.props.fieldData;
    let id = fieldData["id"];
    let currStock = fieldData["stock"];
    let value = fieldData["value"];
    let stockOptions = [];
    let stocks = ['a', 'b', 'c'];

    if (currStock === '') {
      stockOptions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Choose a stock"));
    } else {
      stockOptions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Choose a stock"));
    }

    stocks.forEach(function (stock) {
      if (stock === currStock) {
        stockOptions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: stock,
          selected: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, stock));
      } else {
        stockOptions.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: stock,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, stock));
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "formfield",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "input-group dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "stockField",
      onChange: e => this.props.handleFormChange(e, fieldData['id']),
      class: "custom-select stock-select",
      id: "inputGroupSelect01",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, stockOptions)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form-group select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: value,
      name: "valueField",
      class: "form-control",
      onChange: e => this.props.handleFormChange(e, fieldData['id']),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "remove",
      type: "button",
      onClick: e => this.props.delField(fieldData['id']),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Remove")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Formunit);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Graph.js":
/*!******************************************************!*\
  !*** ./src/components/Pages/PageComponents/Graph.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Graph.js";


class Graph extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content;

    if (this.props.loading) {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "spinner-border",
        role: "status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        class: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Loading...")));
    } else {
      content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "hi");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "graph",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, content);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Header.js":
/*!*******************************************************!*\
  !*** ./src/components/Pages/PageComponents/Header.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Nav */ "../../../../../node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_personicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/personicon.png */ "./src/images/personicon.png");
/* harmony import */ var _images_personicon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_personicon_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Header.js";





const LoggedInView = props => {
  if (props.currentUser) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "navbar navbar-custom navbar-fixed-top",
      expand: "lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "logo",
      onClick: e => props.changePage("Home"),
      src: _images_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      height: "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "mr-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      href: "#deets",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, props.currentUser), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_personicon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      height: "30",
      width: "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    })));
  }

  return null;
};

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoggedInView, {
      changePage: this.props.handlePageChange,
      currentUser: this.props.currentUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Questionunit.js":
/*!*************************************************************!*\
  !*** ./src/components/Pages/PageComponents/Questionunit.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Questionunit.js";


class Questionunit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let question = this.props.question.question;
    let value = this.props.question.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "quesform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "questiontext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, question)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "questionresponse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: value,
      name: "questionField",
      class: "form-control question-form",
      onChange: e => this.props.handleFormChange(e, question),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Questionunit);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Sidebar.js":
/*!********************************************************!*\
  !*** ./src/components/Pages/PageComponents/Sidebar.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "../../../../../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _images_homeicon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/homeicon.svg */ "./src/images/homeicon.svg");
/* harmony import */ var _images_homeicon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_homeicon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_analysisicon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/analysisicon.png */ "./src/images/analysisicon.png");
/* harmony import */ var _images_analysisicon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_analysisicon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_enhancericon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/enhancericon.png */ "./src/images/enhancericon.png");
/* harmony import */ var _images_enhancericon_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_enhancericon_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_buildericon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/buildericon.png */ "./src/images/buildericon.png");
/* harmony import */ var _images_buildericon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_buildericon_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_portfoliosicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/portfoliosicon.png */ "./src/images/portfoliosicon.png");
/* harmony import */ var _images_portfoliosicon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_portfoliosicon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_logouticon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/logouticon.png */ "./src/images/logouticon.png");
/* harmony import */ var _images_logouticon_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_logouticon_png__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Sidebar.js";









const Tab = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "text-left nonlogout",
    onClick: e => props.changePage(e, props.name),
    block: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    class: "iconimg",
    src: props.source,
    height: "30",
    width: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.name));
};

class Sidebar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Home"
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(event, pageName) {
    this.setState({
      page: pageName
    });
    this.props.handlePageChange(pageName);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidenav",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      name: "Home",
      changePage: this.changePage,
      source: _images_homeicon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      name: "Analyzer",
      changePage: this.changePage,
      source: _images_analysisicon_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      name: "Enhancer",
      changePage: this.changePage,
      source: _images_enhancericon_png__WEBPACK_IMPORTED_MODULE_4___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      name: "Builder",
      changePage: this.changePage,
      source: _images_buildericon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
      name: "My Portfolios",
      changePage: this.changePage,
      source: _images_portfoliosicon_png__WEBPACK_IMPORTED_MODULE_6___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-left logout",
      onClick: this.props.handleSignOut,
      block: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _images_logouticon_png__WEBPACK_IMPORTED_MODULE_7___default.a,
      height: "30",
      width: "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Logout")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/Pages/PageComponents/Wholeform.js":
/*!**********************************************************!*\
  !*** ./src/components/Pages/PageComponents/Wholeform.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Button */ "../../../../../node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _Formunit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Formunit */ "./src/components/Pages/PageComponents/Formunit.js");
/* harmony import */ var _Questionunit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Questionunit */ "./src/components/Pages/PageComponents/Questionunit.js");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Graph */ "./src/components/Pages/PageComponents/Graph.js");
/* harmony import */ var _images_erroricon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/erroricon.png */ "./src/images/erroricon.png");
/* harmony import */ var _images_erroricon_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_erroricon_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/PageComponents/Wholeform.js";







class Wholeform extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    let questionFields = [];

    for (var j = 0; j < props.questions.length; j++) {
      let question = this.props.questions[j][0];
      let format = this.props.questions[j][1];
      questionFields.push({
        question: question,
        format: format,
        value: ''
      });
    }

    this.state = {
      formFields: [{
        id: 1,
        stock: '',
        value: ''
      }],
      questionFields: questionFields,
      currId: 1,
      error: '',
      loading: false,
      showGraph: false,
      action: "Submit"
    };
    this.addFormField = this.addFormField.bind(this);
    this.delFormField = this.delFormField.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.validateFormFields = this.validateFormFields.bind(this);
    this.validateQuestionFields = this.validateQuestionFields.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleFormChange(event, id) {
    let formFields = this.state.formFields;
    let questionFields = this.state.questionFields;
    let field = event.target.name;
    let foundIndex;
    let formField;
    let questionField;

    if (field === "stockField") {
      foundIndex = formFields.findIndex(x => x.id == id);
      formField = formFields[foundIndex];
      formField.stock = event.target.value;
      formFields[foundIndex] = formField;
    } else if (field === "valueField") {
      foundIndex = formFields.findIndex(x => x.id == id);
      formField = formFields[foundIndex];
      formField.value = event.target.value;
      formFields[foundIndex] = formField;
    } else if (field === "questionField") {
      foundIndex = questionFields.findIndex(x => x.question == id);
      questionField = questionFields[foundIndex];
      questionField.value = event.target.value;
      questionFields[foundIndex] = questionField;
    }

    this.setState({
      formFields,
      questionFields
    });
  }

  addFormField() {
    let currId = this.state.currId + 1;
    let formFields = this.state.formFields;
    formFields.push({
      id: currId,
      stock: '',
      value: ''
    });
    this.setState({
      formFields,
      currId
    });
  }

  delFormField(id) {
    let formFields = this.state.formFields;
    formFields.splice(formFields.findIndex(function (i) {
      return i.id === id;
    }), 1);
    this.setState({
      formFields
    });
  }

  validateFormFields(formFields) {
    let error;

    if (formFields.length === 0) {
      error = 'Error: Please input at least one stock.';
    }

    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].value === '') {
        error = 'Error: Stock holdings cannot be empty.';
      }

      if (formFields[i].stock === '') {
        error = 'Error: Please select a valid stock name.';
      }
    }

    this.setState({
      error
    });
    return error;
  }

  validateQuestionFields(quesFields) {
    let error;
    let monthConvert = {
      1: "01",
      2: "02",
      3: "03",
      4: "04",
      5: "05",
      6: "06",
      7: "07",
      8: "08",
      9: "09",
      10: "10",
      11: "11",
      12: "12"
    };

    for (let i = 0; i < quesFields.length; i++) {
      if (!quesFields[i].value.match(quesFields[i].format)) {
        error = 'Error: Please answer the questions with the requested formats';
      } else {
        if (quesFields[i].format === '(0[1-9]|10|11|12)/[0-9]{4}$') {
          let month = quesFields[i].value.slice(0, 2);
          let year = quesFields[i].value.slice(3, 7);
          var d = new Date();
          var n = d.getMonth();
          var y = d.getFullYear();
          let currDate = y.toString() + monthConvert[n];
          let newDate = year + month;
          console.log(newDate, currDate);

          if (newDate <= currDate) {
            error = 'Error: Please input a future date.';
          }
        }
      }
    }

    this.setState({
      error
    });
    return error;
  }

  submitForm() {
    // check for errors and stuff here (valid inputs)
    const formFields = this.state.formFields;
    const quesFields = this.state.questionFields; // post the thing underneath, wait for loading, then update graph I guess
    // I should prob update the submit from based on whether it was submitted or nah - first time is submit,
    // then change to update when this is called. 

    let error1;
    let error2;

    if (this.props.hasStocks) {
      error1 = this.validateFormFields(formFields);
    }

    if (error1) {
      return;
    }

    error2 = this.validateQuestionFields(quesFields);

    if (error2) {
      return;
    }

    let set = this.setState;

    if (!error1 && !error2) {
      this.setState({
        loading: true,
        showGraph: true,
        action: "Update",
        error: ''
      }); // change this timeout to waiting for response

      setTimeout(function () {
        set({
          loading: false
        });
      }, 1000);
    }

    console.log({
      formFields,
      quesFields
    });
  }

  render() {
    let stockItems = [];

    for (let i = 0; i < this.state.formFields.length; i++) {
      stockItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Formunit__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fieldData: this.state.formFields[i],
        delField: this.delFormField,
        handleFormChange: this.handleFormChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }));
    }

    let stockForm;

    if (this.props.hasStocks) {
      stockForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "portform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "formheader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Stock Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        class: "holdings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Stock Holdings ($)")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "formfields",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, stockItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "formfooter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this.addFormField,
        variant: "add",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Add"))));
    }

    let quesItems = [];

    for (let j = 0; j < this.state.questionFields.length; j++) {
      quesItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Questionunit__WEBPACK_IMPORTED_MODULE_3__["default"], {
        question: this.state.questionFields[j],
        handleFormChange: this.handleFormChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }));
    }

    let errorText;

    if (this.state.error !== '') {
      errorText = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "alert alert-danger",
        role: "alert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        id: "erroricon",
        src: _images_erroricon_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }), this.state.error));
    }

    let graph;

    if (this.state.showGraph) {
      graph = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Graph__WEBPACK_IMPORTED_MODULE_4__["default"], {
        loading: this.state.loading,
        source: this.props.source,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      });
    }

    let formSpace;

    if (this.props.source !== 'analyzer') {
      formSpace = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        class: "formbreak",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "wholeform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, graph, stockForm, formSpace, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "quesfields",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, quesItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "errorText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, errorText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "form-submit",
      type: "button",
      onClick: this.submitForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, this.state.action)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wholeform);

/***/ }),

/***/ "./src/components/Pages/Portfolios.js":
/*!********************************************!*\
  !*** ./src/components/Pages/Portfolios.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Pages/Portfolios.js";


class Portfolios extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "My Portfolios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Your previously created portfolios are listed below. "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "wholeform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "quesform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "questiontext",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      class: "question",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "hi")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "questionresponse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      value: '',
      name: "questionField",
      class: "form-control question-form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      class: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Portfolios);

/***/ }),

/***/ "./src/components/Signin.js":
/*!**********************************!*\
  !*** ./src/components/Signin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_PageComponents_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/PageComponents/Header */ "./src/components/Pages/PageComponents/Header.js");
/* harmony import */ var _Pages_PageComponents_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/PageComponents/Sidebar */ "./src/components/Pages/PageComponents/Sidebar.js");
/* harmony import */ var _Pages_PageComponents_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pages/PageComponents/Content */ "./src/components/Pages/PageComponents/Content.js");
/* harmony import */ var _Login_SignupForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Login/SignupForm */ "./src/components/Login/SignupForm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/components/Signin.js";
// client/src/App.js







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleSignOut = async () => {
      const set = this.setState;
      setTimeout(function () {
        set({
          user: null
        });
      }, 150);
    };

    this.state = {
      user: "Mike Yin",
      page: "Home"
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.setState = this.setState.bind(this);
  }

  handleSignIn() {
    this.setState({
      user: "Josh Kang"
    });
  }

  handlePageChange(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "app",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_SignupForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      class: "logsign",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/images/analysisicon.png":
/*!*************************************!*\
  !*** ./src/images/analysisicon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/analysisicon.b633cdce.png";

/***/ }),

/***/ "./src/images/buildericon.png":
/*!************************************!*\
  !*** ./src/images/buildericon.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAADZtJREFUeJzt3XnQHEUZx/Hv+/KGJCQhHLkMR0LkDEc4EixEJBRyXxGJIAKioIWgcgmiJRRggVAKlhQERQ5PlENBRAKUQigREBJEQIgQhAISkphAEhLM8SbrH8+7Znd29n13ZnqmZ3Z+n6quYt/s9jyzdO9M9/QBIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIv51+A4gZ8YBewND6fu7WQcsAP4KLEo5LhGvxgN/Biox0hrgNmDzzKMWycBkYDnxKkdteg3YKtvQRdI1EFhM8spRTY9kG76krdN3AJ6tBDZ0mN86h3lJDpS9glSAFx3m97zDvCQHylRBuoAxIX9/weExwvLa1mH+krGyVJCjsCvFRSH/lnYFuRvrIdvN4XFEnBiJFdBqI/rxkPdMxk0DfS3W6K/VBaxifXfwlUB/R+cmksjB2IO82kK8JOR9m+OmgrwSkvf4kPc9C2zn4PxEYvsm1qMUVpC3Dnn/vCbvjZJ+G5Lv8U3euww4PPFZSurarQ2yAXAzdivTbKhIWFvARTskLI9m7Y4hwH3AGQ6OKylqpwrSBdwOnNbH+3YN+ZuL7tmwPMKOVbUBcCNwroNji/SqA/glrd0K3R7y+VNa/GxvKaxd8XqLn/1y/FMX6dtVtF6Qw26F9ojw+bC0gsar8RCat4PCesCOSfIFiDRzAtEK82oah5cMALoj5lObngmJ66MR81gG7Bj/a5A0FL0Nsh3WKI+iH40FcSXwaoI4wq5KvbU/wgzBesIGJIhDHCtyBekEfgoMivHZsMKbpCfLRQUBe25yRYI4xLEiV5AzsduYOFz3ZEXtwerNOcCkBLGIMAx4l/hthgdC8jwmQX4jQvJLEt+TaDq0JHAtyXqd3grJc1zMvBaE5LVlwvgqwHGRvxURbADiByQvgJsG8h0WM5+wMViHO4jvOXQV8a6IbZAzaRw1G8dJgdefiZnPtsDEwN9OiZlXrQnAQQ7ykRLpAuaS/Ne5gg0/vwaYCnyv53XcvBYBX8eeydzlKL4KcI+br03KwsWtS5HSGrSckFdFu8Wa6juAjHUBn/QdRJkVqYJ0AEf6DsKDo30HIMUwAf+3PD7SEmxovHhQpCvIfr4D8GQo8Z/KS0JFqiATfAfg0e6+AyirIlWQXXwH4FGZz92rIlWQsb4D8Gis7wDKqigVpIvwAYFlsYXvAMqqKBVkY4oTaxo28R1AWRWl0JV9lt1GvgMoqy7fAfRiCnAysA1arnM0Nrp3DTZ78QZglteIxJtO4Of4f0CX57QW+ErcL1iK7Xz8F8AipLXAPjG/Yymwt/Ff+IqS7oz5HUuL8tZIH466NKPY03cA7S5vFWS17wAKZpXvANpd3irIUqy3Rlozw3cAkr0jaH1N2zKnpYTvdSIlcDpuVi5p1zQP2Df2tysty/OyMqOxKbbj0IShqlXYKo53YyvKi4iIiIiISBvJcyM96Dqs4Q7WDVzdYrkdjQcur3k9A7jeTyhSFI9S39U5ym84qTqR+nO92m845ZW3J+m9eSPweoyPIDKyTeD1m16ikEJXkLBtl9tFsILM8RKFFKqCvBZ43c47wgbPLckGo1ISu1F/X36f33BS0wm8z/rzXE6xOlPEky5su+ZqwZnrN5zU7ED9D8FTfsMptyLdYnUDL9a8Hk17Tq4KToKa6SUKAYpVQaBxJY92XNB6cuD1Mz6CEFO0CvJY4PVkH0Gk7MDA6794iUIKaRT19+ev+w3HuTHUn1/YdtWSoaJdQeYDL9W8Hgvs7CeUVBwReP2wlyjk/4pWQaCx0BzrJYp0fDrw+kEvUUih7Uf9bcg//YbjzChsMbjqea0EhniNSAqpk8a90tthfaizqT+n+/2GI0V2HfWFaZrfcJyYTf05fdZvOFJkH6G+MC3D9hApqgNpPJ9BXiOSwnuW+kJ1nt9wErmX+nP5sd9wpB18kfpC9TbF3EdkAo0L5ZV5R19xZBCwhPqC9VWvEcXzO+rPYYbXaKStfIf6wjWfYnWNTqTx6nGY14ikrWyKrVFbW8C+6zWi1nUAf6M+do3cFeeCV5FV2KogeXc6jWvu6uohzg0FFlBf0J4k3+v5bgkspj7mR7xGJG3tVBp/jS/2GVAvOrHKUBtrNzalWCQVHcATNBa6/X0G1cRFNFbma71GJKWwK/Vz1ivAQvK1ftYx1A9IrAD/Bgb7DErK4xwaf51fBjbzGVSPvbAVSmpjWwt83GdQUi4d2ByKYCV5BmvM+7IHsCgkrst7+5BIGoZjty3Bwvhsz79lbRLwbkg8D5PvnjZpY+NpHIZSwVZnzHKK7gnYVmnBOGZjDzlFvDkIe2gYLJzLgVNSPnZ/4JqQY1ewyV556jiQEjuCxp6taroH2CqFY34M6xgIO+Y72MqJIrlxMM23lF6Bjd0a5uA4uwF30HyP9zdo7xXppcD2xtaYCiu4FawC3YotRBel4TwEOBmYTvOKUQGeBj6U/DQka2VaNXwkcBd9L1e6GFvNcBbWmH4Hu9L0xxrWw4Hdsd6pScCAPvK7GZunsjJu4CJZ6QIuoPktl8u0EPhUNqclYsZgC8VdDPwCW6v30Bj5jMOW1UmjYqwBbiBeN+6F2EDGW4BvYMPfR8TIR0piBPB54NfYrU5YgbwgQf4TsQUTems/tJr+C9wEfDhBPPc0yXsO8BPsilSkGZOSgo2xBRkeo3FgX1h6yMExx2K/3sGVUvpK3djuu2eRfLxXF/BeC8dciVWkY4F+CY8pfchTI30H4FzgJKKtCbUW2B4bXuLCZtiVZSJ2S7cZdrvUgT1kfAf7RX8O2/1puaPjngj8KuJnFmBXreuxNo+0ofHAnbR2tWiWfpN51G4NBF4h2e3d5zKPugS6PB57JHAlNhsw6SrzxwN/IPovcF58n2QPEQdg82GqRgPPJ4qodTtjV7KqC3tS2qZjz6BS5aOCdABnYE+wXQ5BvwVbPC64C1XenQ+c6TjPTmBzx3k2E7xN3yijY2fSWZH1/iBbY92Y03A/P6M/9qsyxXG+aboMu3pITmVZQaYA/yDdfQUHYisVXk2+e3iGYbeEl/gORHqXRQXpAK7ACu4mGR2v2mW7fwbHi6ID+AK2jdyRnmORFqRdQQZgI1y/RfZdyrtg69xOB/bJ+NhBncBU7Ap6C35mNkoMaVaQwcADWMHw6VBsSaCZ2APILGfybQN8G9uN907qe5qkANLqxRqELZ6wb0r5x7EX9lDtBqyj4EHgT9gehxVHx+iHbe7zCewWai9H+YonaVSQ/sDvyVflqNUPOKQngS1+/XfsyficnjQP+A+22MLqwOcHYo3s4dgSotthT/L3xK4QRdyjRJpwXUE6gJ9hW4oVxVCsZ21yk3+vYHPbO4ENswlJ8sJ1BbkMe6rdTjroe1KUtCmXFeRorEEq/nWT3f7x3YHXCzM69psZHMNZ1+vW2D281npK5j0a2zytmoZWasylDhqX81eKlyZH++olbS6eg3wJOMBBPiK5k7SCjACuchGISB4lbaRfQTbjq8roKODsDI7zMo3bZ0/Dnu2k7VpstEXVtsCPMjjuOmxBwT4lqSA7YQsqSDq2IJvnSWGb9+xNNqMAgjNBB5PNOa9t9Y1JbrEuRcv3S5uLW0G2B45zGYhIHsWtIF9L8FmRwohTyAeT/v4aIrkQp4JMRav7SUnEqSAnOY9CJKeiVpBh5G+et0hqolaQw1HXrpRI1ArS0tNHkXYRtYLo9kpKJcp8kC2wpT0lPQdgSxWB/Xhl9awpOOkpqyVp1/Wkqg6yu4UPnnOoKF/EnjEDkXiChSdLLRWeFFT3XMmNKL9Qu6QWhUhORbmCZDH8uewuwraDiGM6toqlOBSlgoxJLQqpOqTvtzS1iPUVZBNstHUWLgGW1bw+lHgbq0b1AraMa268hP8520rNU+02CltmeNxR1Ls0o+PeSwaitEGy2pBFJDeiVBANUJTSiVJBtOaslI4mPYn0IkoFWZNaFCI5FaWCrEgtCpGcilJBFqUWhUhORakg81KLQiSnolSQOalFIZJTUSrIi6lFIZJTUcZiPZVaFOLaQmBSRsdaHHh9E3B/BsddksExIlWQWVhQWqw6/1Zj2177MI82aq9GucXqxoZUi5RG1C3YDgYeSiMQSewx4t/aLAZucxhL24haQTqwDRp3SiEW8edfwI41r48im9HbTwCvZHCcTB2P/7kPSm7TbOrNzOi4p5NzcQYr3gE86joQkTyKO5r3VGzLYpG2FreCvAkcS/w9vUUKIcl8kBnAFGClm1BE8ifphKnpwH7AWw5iEckdFzMKZwK7ArdiPRNSLCuAG30HkVeuptwuBU7Dxv/80VGekq5VrN8P/YeeY8kt13PSZwFHYg8Sf0AbjclpI88DF2BrZ52F/h/1Kq1VvGcD5wHnY1eVw7CtEyYRvnG9pGc+9sR6BvAg8KrXaAom7WXuK8DTPQnsirU9sDM2tGEctqTpaGAksCnRh7+U3VpsOvR8YC7wOja5bTa2POdcf6EVX94KYxc2nH4odqUZDAzE1uTaEOiH7R9RTZ2sP4fac8nbeTVTCfx3Na3DCv46bDWZbqzNsBL4AGtYv4+1/ZbivnNkCrYfZdoep3GYi4iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIgE/A/85O+zUVGCDAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/images/enhancericon.png":
/*!*************************************!*\
  !*** ./src/images/enhancericon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/erroricon.png":
/*!**********************************!*\
  !*** ./src/images/erroricon.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/erroricon.999be554.png";

/***/ }),

/***/ "./src/images/fintech.png":
/*!********************************!*\
  !*** ./src/images/fintech.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fintech.8aac68cf.png";

/***/ }),

/***/ "./src/images/homeicon.svg":
/*!*********************************!*\
  !*** ./src/images/homeicon.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/homeicon.569e8718.svg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.7c194409.png";

/***/ }),

/***/ "./src/images/logouticon.png":
/*!***********************************!*\
  !*** ./src/images/logouticon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logouticon.d8e0fc35.png";

/***/ }),

/***/ "./src/images/personicon.png":
/*!***********************************!*\
  !*** ./src/images/personicon.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/personicon.e17d1ec4.png";

/***/ }),

/***/ "./src/images/portfoliosicon.png":
/*!***************************************!*\
  !*** ./src/images/portfoliosicon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/portfoliosicon.9a1f46fb.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _components_Signin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Signin */ "./src/components/Signin.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/index.js";






const routing = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
  exact: true,
  path: "/",
  component: _components_App__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})))); // make signup the default
// if not logged in, redirect to signup

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(routing, document.getElementById('root'));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mikeyin/Documents/school/robo-advisor/frontend/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/mikeyin/Documents/school/robo-advisor/frontend/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map