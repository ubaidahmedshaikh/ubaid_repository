/*! Copyright Elasticsearch B.V. and/or license to Elasticsearch B.V. under one or more contributor license agreements
 * Licensed under the Elastic License; you may not use this file except in compliance with the Elastic License. */
webpackJsonp([1],
{
	1717: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternCreationConfig = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _i18n = __webpack_require__(12);

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}
		var indexPatternTypeName = _i18n.i18n.translate("common.ui.management.editIndexPattern.createIndex.defaultTypeName",
		{
			defaultMessage: "index pattern"
		});
		var indexPatternButtonText = _i18n.i18n.translate("common.ui.management.editIndexPattern.createIndex.defaultButtonText",
		{
			defaultMessage: "Standard index pattern"
		});
		var indexPatternButtonDescription = _i18n.i18n.translate("common.ui.management.editIndexPattern.createIndex.defaultButtonDescription",
		{
			defaultMessage: "Perform full aggregations against any data"
		});
		var IndexPatternCreationConfig = exports.IndexPatternCreationConfig = function ()
		{
			function IndexPatternCreationConfig(_ref)
			{
				var _this = this;
				var _ref$type = _ref.type,
					type = void 0 === _ref$type ? void 0 : _ref$type,
					_ref$name = _ref.name,
					name = void 0 === _ref$name ? indexPatternTypeName : _ref$name,
					_ref$showSystemIndice = _ref.showSystemIndices,
					showSystemIndices = void 0 === _ref$showSystemIndice || _ref$showSystemIndice,
					_ref$httpClient = _ref.httpClient,
					httpClient = void 0 === _ref$httpClient ? null : _ref$httpClient,
					_ref$isBeta = _ref.isBeta,
					isBeta = void 0 !== _ref$isBeta && _ref$isBeta;
				_classCallCheck(this, IndexPatternCreationConfig);
				this.getIndexPatternType = function ()
				{
					return _this.type
				};
				this.getIndexPatternName = function ()
				{
					return _this.name
				};
				this.getIsBeta = function ()
				{
					return _this.isBeta
				};
				this.getShowSystemIndices = function ()
				{
					return _this.showSystemIndices
				};
				this.checkIndicesForErrors = function ()
				{
					return
				};
				this.getIndexPatternMappings = function ()
				{
					return {}
				};
				this.renderPrompt = function ()
				{
					return null
				};
				this.getFetchForWildcardOptions = function ()
				{
					return {}
				};
				this.type = type;
				this.name = name;
				this.showSystemIndices = showSystemIndices;
				this.httpClient = httpClient;
				this.isBeta = isBeta
			}
			_createClass(IndexPatternCreationConfig, [
			{
				key: "getIndexPatternCreationOption",
				value: function ()
				{
					var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(urlHandler)
					{
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								return _context.abrupt("return",
								{
									text: indexPatternButtonText,
									description: indexPatternButtonDescription,
									testSubj: "createStandardIndexPatternButton",
									onClick: function onClick()
									{
										urlHandler("/management/kibana/index")
									}
								});
							case 1:
							case "end":
								return _context.stop()
							}
						}, _callee, this)
					}));

					function getIndexPatternCreationOption(_x)
					{
						return _ref2.apply(this, arguments)
					}
					return getIndexPatternCreationOption
				}()
			},
			{
				key: "getIndexTags",
				value: function getIndexTags()
				{
					return []
				}
			}]);
			return IndexPatternCreationConfig
		}();
		IndexPatternCreationConfig.key = "default"
	},
	1718: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}
		var IndexPatternListConfig = exports.IndexPatternListConfig = function IndexPatternListConfig()
		{
			_classCallCheck(this, IndexPatternListConfig);
			this.getIndexPatternTags = function ()
			{
				return []
			};
			this.getFieldInfo = function ()
			{
				return []
			};
			this.areScriptedFieldsEnabled = function ()
			{
				return true
			}
		};
		IndexPatternListConfig.key = "default"
	},
	1719: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.recentlyAccessedShape = exports.RecentlyAccessed = exports.NUM_LONG_LINKS = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var NUM_LONG_LINKS = exports.NUM_LONG_LINKS = 5;
		var RecentlyAccessed = exports.RecentlyAccessed = function (_Component)
		{
			_inherits(RecentlyAccessed, _Component);

			function RecentlyAccessed(props)
			{
				_classCallCheck(this, RecentlyAccessed);
				var _this = _possibleConstructorReturn(this, (RecentlyAccessed.__proto__ || Object.getPrototypeOf(RecentlyAccessed)).call(this, props));
				_this.onButtonClick = function ()
				{
					_this.setState(
					{
						isPopoverOpen: !_this.state.isPopoverOpen
					})
				};
				_this.closePopover = function ()
				{
					_this.setState(
					{
						isPopoverOpen: false
					})
				};
				_this.renderDropdown = function ()
				{
					if (_this.props.recentlyAccessed.length <= NUM_LONG_LINKS) return;
					var dropdownLinks = [];
					for (var i = NUM_LONG_LINKS; i < _this.props.recentlyAccessed.length; i++) dropdownLinks.push(_react2.default.createElement("li",
					{
						style:
						{
							marginBottom: 8
						},
						key: _this.props.recentlyAccessed[i].id,
						"data-test-subj": "moreRecentlyAccessedItem" + _this.props.recentlyAccessed[i].id
					}, _react2.default.createElement(_eui.EuiLink,
					{
						className: "homRecentlyAccessed__dropdownLink",
						href: _this.props.recentlyAccessed[i].link
					}, _this.props.recentlyAccessed[i].label)));
					var openPopoverComponent = _react2.default.createElement(_eui.EuiLink,
					{
						onClick: _this.onButtonClick,
						"data-test-subj": "openMoreRecentlyAccessedPopover"
					}, _react2.default.createElement(_eui.EuiTextColor,
					{
						className: "homRecentlyAccessed__dropdownLabel",
						color: "subdued"
					}, dropdownLinks.length + " more"), _react2.default.createElement(_eui.EuiIcon,
					{
						type: "arrowDown",
						color: "subdued"
					}));
					var anchorPosition = "downRight";
					window.innerWidth <= 768 && (anchorPosition = "downLeft");
					return _react2.default.createElement(_eui.EuiPopover,
					{
						id: "popover",
						ownFocus: true,
						button: openPopoverComponent,
						isOpen: _this.state.isPopoverOpen,
						closePopover: _this.closePopover,
						anchorPosition: anchorPosition
					}, _react2.default.createElement("ul", null, dropdownLinks))
				};
				_this.renderLongLink = function (recentlyAccessedItem)
				{
					var includeSeparator = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					var separator = void 0;
					includeSeparator && (separator = _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false,
						className: "homRecentlyAccessed__separator"
					}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement(_eui.EuiIcon,
					{
						type: "dot",
						color: "subdued"
					}))));
					var EM_RATIO = .65;
					var minWidth = (recentlyAccessedItem.label.length < 8 ? recentlyAccessedItem.label.length : 8) * EM_RATIO;
					var style = {
						minWidth: minWidth + "em"
					};
					return _react2.default.createElement(_react2.default.Fragment,
					{
						key: recentlyAccessedItem.id
					}, separator, _react2.default.createElement(_eui.EuiFlexItem,
					{
						className: "homRecentlyAccessed__item",
						style: style,
						grow: false
					}, _react2.default.createElement(_eui.EuiToolTip,
					{
						anchorClassName: "homRecentlyAccessed__anchor",
						position: "bottom",
						content: recentlyAccessedItem.label
					}, _react2.default.createElement(_eui.EuiLink,
					{
						className: "homRecentlyAccessed__longLink",
						href: recentlyAccessedItem.link
					}, recentlyAccessedItem.label))))
				};
				_this.renderRecentlyAccessed = function ()
				{
					if (_this.props.recentlyAccessed.length <= NUM_LONG_LINKS) return _this.props.recentlyAccessed.map(function (item, index)
					{
						var includeSeparator = true;
						0 === index && (includeSeparator = false);
						return _this.renderLongLink(item, includeSeparator)
					});
					var links = [];
					for (var i = 0; i < NUM_LONG_LINKS; i++)
					{
						var includeSeparator = true;
						0 === i && (includeSeparator = false);
						links.push(_this.renderLongLink(_this.props.recentlyAccessed[i], includeSeparator))
					}
					return links
				};
				_this.state = {
					isPopoverOpen: false
				};
				return _this
			}
			_createClass(RecentlyAccessed, [
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, _react2.default.createElement(_eui.EuiTitle,
					{
						size: "xs"
					}, _react2.default.createElement("h3", null, _react2.default.createElement(_eui.EuiTextColor,
					{
						color: "subdued"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.recentlyAccessed.recentlyViewedTitle",
						defaultMessage: "Recently viewed"
					})))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "spaceBetween",
						alignItems: "flexEnd",
						wrap: true
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false,
						className: "homRecentlyAccessed__flexItem"
					}, _react2.default.createElement(_eui.EuiFlexGroup, null, this.renderRecentlyAccessed())), _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, this.renderDropdown())))
				}
			}]);
			return RecentlyAccessed
		}(_react.Component);
		var recentlyAccessedShape = exports.recentlyAccessedShape = _propTypes2.default.shape(
		{
			label: _propTypes2.default.string.isRequired,
			link: _propTypes2.default.string.isRequired,
			id: _propTypes2.default.string.isRequired
		});
		RecentlyAccessed.propTypes = {
			recentlyAccessed: _propTypes2.default.arrayOf(recentlyAccessedShape).isRequired
		}
	},
	1720: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getTutorial = exports.getTutorials = void 0;
		var loadTutorials = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
		{
			var response;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					_context.prev = 0;
					_context.next = 3;
					return fetch(baseUrl,
					{
						method: "get",
						credentials: "include",
						headers: headers
					});
				case 3:
					response = _context.sent;
					if (!(response.status >= 300))
					{
						_context.next = 6;
						break
					}
					throw new Error(_i18n.i18n.translate("kbn.home.loadTutorials.requestFailedErrorMessage",
					{
						defaultMessage: "Request failed with status code: {status}",
						values:
						{
							status: response.status
						}
					}));
				case 6:
					_context.next = 8;
					return response.json();
				case 8:
					tutorials = _context.sent;
					tutorialsLoaded = true;
					_context.next = 15;
					break;
				case 12:
					_context.prev = 12;
					_context.t0 = _context["catch"](0);
					_notify.toastNotifications.addDanger(
					{
						title: _i18n.i18n.translate("kbn.home.loadTutorials.unableToLoadErrorMessage",
						{
							defaultMessage: "Unable to load tutorials"
						}),
						text: _context.t0.message
					});
				case 15:
				case "end":
					return _context.stop()
				}
			}, _callee, this, [
				[0, 12]
			])
		})), function loadTutorials()
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		exports.getTutorials = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2()
		{
			return regeneratorRuntime.wrap(function _callee2$(_context2)
			{
				while (1) switch (_context2.prev = _context2.next)
				{
				case 0:
					if (tutorialsLoaded)
					{
						_context2.next = 3;
						break
					}
					_context2.next = 3;
					return loadTutorials();
				case 3:
					return _context2.abrupt("return", _lodash2.default.cloneDeep(tutorials));
				case 4:
				case "end":
					return _context2.stop()
				}
			}, _callee2, this)
		})), function getTutorials()
		{
			return _ref2.apply(this, arguments)
		});
		var _ref2;
		exports.getTutorial = (_ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id)
		{
			var tutorial;
			return regeneratorRuntime.wrap(function _callee3$(_context3)
			{
				while (1) switch (_context3.prev = _context3.next)
				{
				case 0:
					if (tutorialsLoaded)
					{
						_context3.next = 3;
						break
					}
					_context3.next = 3;
					return loadTutorials();
				case 3:
					tutorial = tutorials.find(function (tutorial)
					{
						return tutorial.id === id
					});
					if (!tutorial)
					{
						_context3.next = 6;
						break
					}
					return _context3.abrupt("return", _lodash2.default.cloneDeep(tutorial));
				case 6:
				case "end":
					return _context3.stop()
				}
			}, _callee3, this)
		})), function getTutorial(_x)
		{
			return _ref3.apply(this, arguments)
		});
		var _ref3;
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _i18n = __webpack_require__(12);
		var _notify = __webpack_require__(10);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var baseUrl = _chrome2.default.addBasePath("/api/kibana/home/tutorials");
		var headers = new Headers;
		headers.append("Accept", "application/json");
		headers.append("Content-Type", "application/json");
		headers.append("kbn-xsrf", "kibana");
		var tutorials = [];
		var tutorialsLoaded = false
	},
	1721: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.HAS_DATA = "has_data";
		exports.FETCHING = "FETCHING";
		exports.NO_DATA = "NO_DATA";
		exports.NOT_CHECKED = "NOT_CHECKED";
		exports.ERROR = "ERROR"
	},
	1722: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ObjectsTable = exports.INCLUDED_TYPES = void 0;
		var _slicedToArray = function ()
		{
			function sliceIterator(arr, i)
			{
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = void 0;
				try
				{
					for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true)
					{
						_arr.push(_s.value);
						if (i && _arr.length === i) break
					}
				}
				catch (err)
				{
					_d = true;
					_e = err
				}
				finally
				{
					try
					{
						!_n && _i["return"] && _i["return"]()
					}
					finally
					{
						if (_d) throw _e
					}
				}
				return _arr
			}
			return function (arr, i)
			{
				if (Array.isArray(arr)) return arr;
				if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _lodash = __webpack_require__(1);
		var _header = __webpack_require__(5505);
		var _flyout = __webpack_require__(5507);
		var _relationships = __webpack_require__(5509);
		var _table = __webpack_require__(5519);
		var _notify = __webpack_require__(10);
		var _eui = __webpack_require__(3);
		var _lib = __webpack_require__(651);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var INCLUDED_TYPES = exports.INCLUDED_TYPES = ["index-pattern", "visualization", "dashboard", "search"];
		var ObjectsTableUI = function (_Component)
		{
			_inherits(ObjectsTableUI, _Component);

			function ObjectsTableUI(props)
			{
				var _this2 = this;
				_classCallCheck(this, ObjectsTableUI);
				var _this = _possibleConstructorReturn(this, (ObjectsTableUI.__proto__ || Object.getPrototypeOf(ObjectsTableUI)).call(this, props));
				_this.fetchCounts = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var _parseQuery, queryText, visibleTypes, filteredTypes, filteredSavedObjectCounts, exportAllOptions, exportAllSelectedOptions, savedObjectCounts;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_parseQuery = (0, _lib.parseQuery)(_this.state.activeQuery), queryText = _parseQuery.queryText, visibleTypes = _parseQuery.visibleTypes;
							filteredTypes = INCLUDED_TYPES.filter(function (type)
							{
								return !visibleTypes || visibleTypes.includes(type)
							});
							_context.next = 4;
							return (0, _lib.getSavedObjectCounts)(_this.props.$http, filteredTypes, queryText);
						case 4:
							filteredSavedObjectCounts = _context.sent;
							exportAllOptions = [];
							exportAllSelectedOptions = {};
							Object.keys(filteredSavedObjectCounts).forEach(function (id)
							{
								exportAllOptions.push(
								{
									id: id,
									label: id + " (" + (filteredSavedObjectCounts[id] || 0) + ")"
								});
								exportAllSelectedOptions[id] = true
							});
							_context.next = 10;
							return (0, _lib.getSavedObjectCounts)(_this.props.$http, INCLUDED_TYPES, queryText);
						case 10:
							savedObjectCounts = _context.sent;
							_this.setState(function (state)
							{
								return _extends(
								{}, state,
								{
									savedObjectCounts: savedObjectCounts,
									exportAllOptions: exportAllOptions,
									exportAllSelectedOptions: exportAllSelectedOptions
								})
							});
						case 12:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2)
				}));
				_this.fetchSavedObjects = function ()
				{
					_this.setState(
					{
						isSearching: true
					}, _this.debouncedFetch)
				};
				_this.debouncedFetch = (0, _lodash.debounce)(_asyncToGenerator(regeneratorRuntime.mark(function _callee2()
				{
					var savedObjectsClient, _this$state, query, page, perPage, _parseQuery2, queryText, visibleTypes, findOptions, resp;
					return regeneratorRuntime.wrap(function _callee2$(_context2)
					{
						while (1) switch (_context2.prev = _context2.next)
						{
						case 0:
							savedObjectsClient = _this.props.savedObjectsClient;
							_this$state = _this.state, query = _this$state.activeQuery, page = _this$state.page, perPage = _this$state.perPage;
							_parseQuery2 = (0, _lib.parseQuery)(query), queryText = _parseQuery2.queryText, visibleTypes = _parseQuery2.visibleTypes;
							findOptions = {
								search: queryText ? queryText + "*" : void 0,
								perPage: perPage,
								page: page + 1,
								fields: ["title", "id"],
								searchFields: ["title"],
								type: INCLUDED_TYPES.filter(function (type)
								{
									return !visibleTypes || visibleTypes.includes(type)
								})
							};
							findOptions.type.length > 1 && (findOptions.sortField = "type");
							resp = void 0;
							_context2.prev = 6;
							_context2.next = 9;
							return savedObjectsClient.find(findOptions);
						case 9:
							resp = _context2.sent;
							_context2.next = 17;
							break;
						case 12:
							_context2.prev = 12;
							_context2.t0 = _context2["catch"](6);
							_this._isMounted && _this.setState(
							{
								isSearching: false
							});
							_notify.toastNotifications.addDanger(
							{
								title: "Unable find saved objects",
								text: "" + _context2.t0
							});
							return _context2.abrupt("return");
						case 17:
							if (_this._isMounted)
							{
								_context2.next = 19;
								break
							}
							return _context2.abrupt("return");
						case 19:
							_this.setState(function (_ref3)
							{
								var activeQuery = _ref3.activeQuery;
								if (activeQuery.text !== query.text) return {};
								return {
									savedObjects: resp.savedObjects.map(function (savedObject)
									{
										return {
											title: savedObject.attributes.title,
											type: savedObject.type,
											id: savedObject.id,
											icon: (0, _lib.getSavedObjectIcon)(savedObject.type)
										}
									}),
									filteredItemCount: resp.total,
									isSearching: false
								}
							});
						case 20:
						case "end":
							return _context2.stop()
						}
					}, _callee2, _this2, [
						[6, 12]
					])
				})), 300);
				_this.refreshData = _asyncToGenerator(regeneratorRuntime.mark(function _callee3()
				{
					return regeneratorRuntime.wrap(function _callee3$(_context3)
					{
						while (1) switch (_context3.prev = _context3.next)
						{
						case 0:
							_context3.next = 2;
							return Promise.all([_this.fetchSavedObjects(), _this.fetchCounts()]);
						case 2:
						case "end":
							return _context3.stop()
						}
					}, _callee3, _this2)
				}));
				_this.onSelectionChanged = function (selection)
				{
					var selectedSavedObjects = selection.map(function (item)
					{
						return {
							id: item.id,
							type: item.type
						}
					});
					_this.setState(
					{
						selectedSavedObjects: selectedSavedObjects
					})
				};
				_this.onQueryChange = function (_ref5)
				{
					var query = _ref5.query;
					_this.setState(
					{
						activeQuery: query,
						page: 0,
						selectedSavedObjects: []
					}, function ()
					{
						_this.fetchSavedObjects();
						_this.fetchCounts()
					})
				};
				_this.onTableChange = (_ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(table)
				{
					var _ref7, page, perPage;
					return regeneratorRuntime.wrap(function _callee4$(_context4)
					{
						while (1) switch (_context4.prev = _context4.next)
						{
						case 0:
							_ref7 = table.page ||
							{}, page = _ref7.index, perPage = _ref7.size;
							_this.setState(
							{
								page: page,
								perPage: perPage,
								selectedSavedObjects: []
							}, _this.fetchSavedObjects);
						case 2:
						case "end":
							return _context4.stop()
						}
					}, _callee4, _this2)
				})), function (_x)
				{
					return _ref6.apply(this, arguments)
				});
				var _ref6;
				_this.onShowRelationships = function (id, type, title)
				{
					_this.setState(
					{
						isShowingRelationships: true,
						relationshipId: id,
						relationshipType: type,
						relationshipTitle: title
					})
				};
				_this.onHideRelationships = function ()
				{
					_this.setState(
					{
						isShowingRelationships: false,
						relationshipId: void 0,
						relationshipType: void 0,
						relationshipTitle: void 0
					})
				};
				_this.onExport = _asyncToGenerator(regeneratorRuntime.mark(function _callee5()
				{
					var savedObjectsClient, selectedSavedObjects, objects;
					return regeneratorRuntime.wrap(function _callee5$(_context5)
					{
						while (1) switch (_context5.prev = _context5.next)
						{
						case 0:
							savedObjectsClient = _this.props.savedObjectsClient;
							selectedSavedObjects = _this.state.selectedSavedObjects;
							_context5.next = 4;
							return savedObjectsClient.bulkGet(selectedSavedObjects);
						case 4:
							objects = _context5.sent;
							_context5.next = 7;
							return (0, _lib.retrieveAndExportDocs)(objects.savedObjects, savedObjectsClient);
						case 7:
						case "end":
							return _context5.stop()
						}
					}, _callee5, _this2)
				}));
				_this.onExportAll = _asyncToGenerator(regeneratorRuntime.mark(function _callee6()
				{
					var $http, exportAllSelectedOptions, exportTypes, results;
					return regeneratorRuntime.wrap(function _callee6$(_context6)
					{
						while (1) switch (_context6.prev = _context6.next)
						{
						case 0:
							$http = _this.props.$http;
							exportAllSelectedOptions = _this.state.exportAllSelectedOptions;
							exportTypes = Object.entries(exportAllSelectedOptions).reduce(function (accum, _ref10)
							{
								var _ref11 = _slicedToArray(_ref10, 2),
									id = _ref11[0],
									selected = _ref11[1];
								selected && accum.push(id);
								return accum
							}, []);
							_context6.next = 5;
							return (0, _lib.scanAllTypes)($http, exportTypes);
						case 5:
							results = _context6.sent;
							(0, _lib.saveToFile)(JSON.stringify((0, _lodash.flattenDeep)(results), null, 2));
						case 7:
						case "end":
							return _context6.stop()
						}
					}, _callee6, _this2)
				}));
				_this.finishImport = function ()
				{
					_this.hideImportFlyout();
					_this.fetchSavedObjects();
					_this.fetchCounts()
				};
				_this.showImportFlyout = function ()
				{
					_this.setState(
					{
						isShowingImportFlyout: true
					})
				};
				_this.hideImportFlyout = function ()
				{
					_this.setState(
					{
						isShowingImportFlyout: false
					})
				};
				_this.onDelete = function ()
				{
					_this.setState(
					{
						isShowingDeleteConfirmModal: true
					})
				};
				_this.delete = _asyncToGenerator(regeneratorRuntime.mark(function _callee7()
				{
					var savedObjectsClient, _this$state2, selectedSavedObjects, isDeleting, indexPatterns, objects, deletes;
					return regeneratorRuntime.wrap(function _callee7$(_context7)
					{
						while (1) switch (_context7.prev = _context7.next)
						{
						case 0:
							savedObjectsClient = _this.props.savedObjectsClient;
							_this$state2 = _this.state, selectedSavedObjects = _this$state2.selectedSavedObjects, isDeleting = _this$state2.isDeleting;
							if (!isDeleting)
							{
								_context7.next = 4;
								break
							}
							return _context7.abrupt("return");
						case 4:
							_this.setState(
							{
								isDeleting: true
							});
							indexPatterns = selectedSavedObjects.filter(function (object)
							{
								return "index-pattern" === object.type
							});
							if (!indexPatterns.length)
							{
								_context7.next = 9;
								break
							}
							_context7.next = 9;
							return _this.props.indexPatterns.cache.clearAll();
						case 9:
							_context7.next = 11;
							return savedObjectsClient.bulkGet(selectedSavedObjects);
						case 11:
							objects = _context7.sent;
							deletes = objects.savedObjects.map(function (object)
							{
								return savedObjectsClient.delete(object.type, object.id)
							});
							_context7.next = 15;
							return Promise.all(deletes);
						case 15:
							_this.setState(
							{
								selectedSavedObjects: []
							});
							_context7.next = 18;
							return _this.fetchSavedObjects();
						case 18:
							_context7.next = 20;
							return _this.fetchCounts();
						case 20:
							_this.setState(
							{
								isShowingDeleteConfirmModal: false,
								isDeleting: false
							});
						case 21:
						case "end":
							return _context7.stop()
						}
					}, _callee7, _this2)
				}));
				_this.getRelationships = (_ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(type, id)
				{
					return regeneratorRuntime.wrap(function _callee8$(_context8)
					{
						while (1) switch (_context8.prev = _context8.next)
						{
						case 0:
							_context8.next = 2;
							return (0, _lib.getRelationships)(type, id, _this.props.$http, _this.props.basePath);
						case 2:
							return _context8.abrupt("return", _context8.sent);
						case 3:
						case "end":
							return _context8.stop()
						}
					}, _callee8, _this2)
				})), function (_x2, _x3)
				{
					return _ref13.apply(this, arguments)
				});
				var _ref13;
				_this.state = {
					totalCount: 0,
					page: 0,
					perPage: props.perPageConfig || 50,
					savedObjects: [],
					savedObjectCounts: INCLUDED_TYPES.reduce(function (typeToCountMap, type)
					{
						typeToCountMap[type] = 0;
						return typeToCountMap
					},
					{}),
					activeQuery: _eui.Query.parse(""),
					selectedSavedObjects: [],
					isShowingImportFlyout: false,
					isSearching: false,
					filteredItemCount: 0,
					isShowingRelationships: false,
					relationshipId: void 0,
					relationshipType: void 0,
					relationshipTitle: void 0,
					isShowingDeleteConfirmModal: false,
					isShowingExportAllOptionsModal: false,
					isDeleting: false,
					exportAllOptions: [],
					exportAllSelectedOptions:
					{}
				};
				return _this
			}
			_createClass(ObjectsTableUI, [
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					this._isMounted = true;
					this.fetchSavedObjects();
					this.fetchCounts()
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this._isMounted = false;
					this.debouncedFetch.cancel()
				}
			},
			{
				key: "renderFlyout",
				value: function renderFlyout()
				{
					if (!this.state.isShowingImportFlyout) return null;
					return _react2.default.createElement(_flyout.Flyout,
					{
						close: this.hideImportFlyout,
						done: this.finishImport,
						services: this.props.services,
						indexPatterns: this.props.indexPatterns,
						newIndexPatternUrl: this.props.newIndexPatternUrl
					})
				}
			},
			{
				key: "renderRelationships",
				value: function renderRelationships()
				{
					if (!this.state.isShowingRelationships) return null;
					return _react2.default.createElement(_relationships.Relationships,
					{
						id: this.state.relationshipId,
						type: this.state.relationshipType,
						title: this.state.relationshipTitle,
						getRelationships: this.getRelationships,
						close: this.onHideRelationships,
						getDashboardUrl: this.props.getDashboardUrl,
						getEditUrl: this.props.getEditUrl,
						goInApp: this.props.goInApp
					})
				}
			},
			{
				key: "renderDeleteConfirmModal",
				value: function renderDeleteConfirmModal()
				{
					var _this3 = this;
					var _state = this.state,
						isShowingDeleteConfirmModal = _state.isShowingDeleteConfirmModal,
						isDeleting = _state.isDeleting,
						selectedSavedObjects = _state.selectedSavedObjects;
					var intl = this.props.intl;
					if (!isShowingDeleteConfirmModal) return null;
					var modal = void 0;
					if (isDeleting) modal = _react2.default.createElement(_eui.EuiLoadingKibana,
					{
						size: "xl"
					});
					else
					{
						var onCancel = function onCancel()
						{
							_this3.setState(
							{
								isShowingDeleteConfirmModal: false
							})
						};
						var onConfirm = function onConfirm()
						{
							_this3.delete()
						};
						modal = _react2.default.createElement(_eui.EuiConfirmModal,
						{
							title: _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.deleteSavedObjectsConfirmModalTitle",
								defaultMessage: "Delete saved objects"
							}),
							onCancel: onCancel,
							onConfirm: onConfirm,
							cancelButtonText: _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.deleteSavedObjectsConfirmModal.cancelButtonLabel",
								defaultMessage: "Cancel"
							}),
							confirmButtonText: isDeleting ? _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.deleteSavedObjectsConfirmModal.deleteProcessButtonLabel",
								defaultMessage: "Deleting…"
							}) : _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.deleteSavedObjectsConfirmModal.deleteButtonLabel",
								defaultMessage: "Delete"
							}),
							defaultFocusedButton: _eui.EUI_MODAL_CONFIRM_BUTTON
						}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.deleteSavedObjectsConfirmModalDescription",
							defaultMessage: "This action will delete the following saved objects:"
						})), _react2.default.createElement(_eui.EuiInMemoryTable,
						{
							items: selectedSavedObjects,
							columns: [
							{
								field: "type",
								name: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.deleteSavedObjectsConfirmModal.typeColumnName",
									defaultMessage: "Type"
								}),
								width: "50px",
								render: function render(type)
								{
									return _react2.default.createElement(_eui.EuiToolTip,
									{
										position: "top",
										content: (0, _lib.getSavedObjectLabel)(type)
									}, _react2.default.createElement(_eui.EuiIcon,
									{
										type: (0, _lib.getSavedObjectIcon)(type)
									}))
								}
							},
							{
								field: "id",
								name: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.deleteSavedObjectsConfirmModal.idColumnName",
									defaultMessage: "Id/Name"
								})
							}],
							pagination: true,
							sorting: false
						}))
					}
					return _react2.default.createElement(_eui.EuiOverlayMask, null, modal)
				}
			},
			{
				key: "renderExportAllOptionsModal",
				value: function renderExportAllOptionsModal()
				{
					var _this4 = this;
					var _state2 = this.state,
						isShowingExportAllOptionsModal = _state2.isShowingExportAllOptionsModal,
						filteredItemCount = _state2.filteredItemCount,
						exportAllOptions = _state2.exportAllOptions,
						exportAllSelectedOptions = _state2.exportAllSelectedOptions;
					if (!isShowingExportAllOptionsModal) return null;
					return _react2.default.createElement(_eui.EuiOverlayMask, null, _react2.default.createElement(_eui.EuiConfirmModal,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.exportObjectsConfirmModalTitle",
							defaultMessage: "Export {filteredItemCount, plural, one{# object} other {# objects}}",
							values:
							{
								filteredItemCount: filteredItemCount
							}
						}),
						onCancel: function onCancel()
						{
							return _this4.setState(
							{
								isShowingExportAllOptionsModal: false
							})
						},
						onConfirm: this.onExportAll,
						cancelButtonText: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.exportObjectsConfirmModal.cancelButtonLabel",
							defaultMessage: "Cancel"
						}),
						confirmButtonText: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.exportObjectsConfirmModal.exportAllButtonLabel",
							defaultMessage: "Export All"
						}),
						defaultFocusedButton: _eui.EUI_MODAL_CONFIRM_BUTTON
					}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.exportObjectsConfirmModalDescription",
						defaultMessage: "Select which types to export. The number in parentheses indicates how many of this type are available to export."
					})), _react2.default.createElement(_eui.EuiCheckboxGroup,
					{
						options: exportAllOptions,
						idToSelectedMap: exportAllSelectedOptions,
						onChange: function onChange(optionId)
						{
							var newExportAllSelectedOptions = _extends(
							{}, exportAllSelectedOptions, _defineProperty(
							{}, optionId, !exportAllSelectedOptions[optionId]));
							_this4.setState(
							{
								exportAllSelectedOptions: newExportAllSelectedOptions
							})
						}
					})))
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _this5 = this;
					var _state3 = this.state,
						selectedSavedObjects = _state3.selectedSavedObjects,
						page = _state3.page,
						perPage = _state3.perPage,
						savedObjects = _state3.savedObjects,
						filteredItemCount = _state3.filteredItemCount,
						isSearching = _state3.isSearching,
						savedObjectCounts = _state3.savedObjectCounts;
					var selectionConfig = {
						onSelectionChange: this.onSelectionChanged
					};
					var filterOptions = INCLUDED_TYPES.map(function (type)
					{
						return {
							value: type,
							name: type,
							view: type + " (" + (savedObjectCounts[type] || 0) + ")"
						}
					});
					return _react2.default.createElement(_eui.EuiPage, null, _react2.default.createElement(_eui.EuiPageBody, null, _react2.default.createElement(_eui.EuiPageContent,
					{
						verticalPosition: "center",
						horizontalPosition: "center",
						style:
						{
							maxWidth: 1e3,
							marginTop: 16,
							marginBottom: 16
						}
					}, this.renderFlyout(), this.renderRelationships(), this.renderDeleteConfirmModal(), this.renderExportAllOptionsModal(), _react2.default.createElement(_header.Header,
					{
						onExportAll: function onExportAll()
						{
							return _this5.setState(
							{
								isShowingExportAllOptionsModal: true
							})
						},
						onImport: this.showImportFlyout,
						onRefresh: this.refreshData,
						filteredCount: filteredItemCount
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "xs"
					}), _react2.default.createElement(_table.Table,
					{
						itemId: "id",
						selectionConfig: selectionConfig,
						selectedSavedObjects: selectedSavedObjects,
						onQueryChange: this.onQueryChange,
						onTableChange: this.onTableChange,
						filterOptions: filterOptions,
						onExport: this.onExport,
						onDelete: this.onDelete,
						getEditUrl: this.props.getEditUrl,
						goInApp: this.props.goInApp,
						pageIndex: page,
						pageSize: perPage,
						items: savedObjects,
						totalItemCount: filteredItemCount,
						isSearching: isSearching,
						onShowRelationships: this.onShowRelationships
					}))))
				}
			}]);
			return ObjectsTableUI
		}(_react.Component);
		ObjectsTableUI.propTypes = {
			savedObjectsClient: _propTypes2.default.object.isRequired,
			indexPatterns: _propTypes2.default.object.isRequired,
			$http: _propTypes2.default.func.isRequired,
			basePath: _propTypes2.default.string.isRequired,
			perPageConfig: _propTypes2.default.number,
			newIndexPatternUrl: _propTypes2.default.string.isRequired,
			services: _propTypes2.default.array.isRequired,
			getEditUrl: _propTypes2.default.func.isRequired,
			goInApp: _propTypes2.default.func.isRequired
		};
		exports.ObjectsTable = (0, _react3.injectI18n)(ObjectsTableUI)
	},
	1723: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.importFile = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(file)
		{
			var FileReader = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.FileReader;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					return _context.abrupt("return", new Promise(function (resolve, reject)
					{
						var fr = new FileReader;
						fr.onload = function (_ref2)
						{
							var result = _ref2.target.result;
							try
							{
								resolve(JSON.parse(result))
							}
							catch (e)
							{
								reject(e)
							}
						};
						fr.readAsText(file)
					}));
				case 1:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function importFile(_x2)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
	},
	1724: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.resolveSavedObjects = exports.resolveSavedSearches = exports.saveObject = exports.saveObjects = exports.resolveIndexPatternConflicts = void 0;
		var getSavedObject = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(doc, services)
		{
			var service, obj;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					service = services.find(function (service)
					{
						return service.type === doc._type
					});
					if (service)
					{
						_context.next = 3;
						break
					}
					return _context.abrupt("return");
				case 3:
					_context.next = 5;
					return service.get();
				case 5:
					obj = _context.sent;
					obj.id = doc._id;
					obj.migrationVersion = doc._migrationVersion;
					return _context.abrupt("return", obj);
				case 9:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function getSavedObject(_x, _x2)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var importIndexPattern = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(doc, indexPatterns, overwriteAll)
		{
			var emptyPattern, _doc$_source, title, timeFieldName, fields, fieldFormatMap, sourceFilters, type, typeMeta, importedIndexPattern, newId;
			return regeneratorRuntime.wrap(function _callee2$(_context2)
			{
				while (1) switch (_context2.prev = _context2.next)
				{
				case 0:
					_context2.next = 2;
					return indexPatterns.get();
				case 2:
					emptyPattern = _context2.sent;
					_doc$_source = doc._source, title = _doc$_source.title, timeFieldName = _doc$_source.timeFieldName, fields = _doc$_source.fields, fieldFormatMap = _doc$_source.fieldFormatMap, sourceFilters = _doc$_source.sourceFilters, type = _doc$_source.type, typeMeta = _doc$_source.typeMeta;
					importedIndexPattern = {
						id: doc._id,
						title: title,
						timeFieldName: timeFieldName
					};
					type && (importedIndexPattern.type = type);
					addJsonFieldToIndexPattern(importedIndexPattern, fields, "fields", title);
					addJsonFieldToIndexPattern(importedIndexPattern, fieldFormatMap, "fieldFormatMap", title);
					addJsonFieldToIndexPattern(importedIndexPattern, sourceFilters, "sourceFilters", title);
					addJsonFieldToIndexPattern(importedIndexPattern, typeMeta, "typeMeta", title);
					Object.assign(emptyPattern, importedIndexPattern);
					_context2.next = 13;
					return emptyPattern.create(true, !overwriteAll);
				case 13:
					newId = _context2.sent;
					indexPatterns.cache.clear(newId);
					return _context2.abrupt("return", newId);
				case 16:
				case "end":
					return _context2.stop()
				}
			}, _callee2, this)
		})), function importIndexPattern(_x3, _x4, _x5)
		{
			return _ref2.apply(this, arguments)
		});
		var _ref2;
		var importDocument = (_ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(obj, doc, overwriteAll)
		{
			return regeneratorRuntime.wrap(function _callee3$(_context3)
			{
				while (1) switch (_context3.prev = _context3.next)
				{
				case 0:
					_context3.next = 2;
					return obj.applyESResp(doc);
				case 2:
					_context3.next = 4;
					return obj.save(
					{
						confirmOverwrite: !overwriteAll
					});
				case 4:
					return _context3.abrupt("return", _context3.sent);
				case 5:
				case "end":
					return _context3.stop()
				}
			}, _callee3, this)
		})), function importDocument(_x6, _x7, _x8)
		{
			return _ref3.apply(this, arguments)
		});
		var _ref3;
		var awaitEachItemInParallel = (_ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(list, op)
		{
			return regeneratorRuntime.wrap(function _callee4$(_context4)
			{
				while (1) switch (_context4.prev = _context4.next)
				{
				case 0:
					_context4.next = 2;
					return Promise.all(list.map(function (item)
					{
						return op(item)
					}));
				case 2:
					return _context4.abrupt("return", _context4.sent);
				case 3:
				case "end":
					return _context4.stop()
				}
			}, _callee4, this)
		})), function awaitEachItemInParallel(_x9, _x10)
		{
			return _ref4.apply(this, arguments)
		});
		var _ref4;
		exports.resolveIndexPatternConflicts = (_ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(resolutions, conflictedIndexPatterns, overwriteAll)
		{
			var _this = this;
			var importCount;
			return regeneratorRuntime.wrap(function _callee6$(_context6)
			{
				while (1) switch (_context6.prev = _context6.next)
				{
				case 0:
					importCount = 0;
					_context6.next = 3;
					return awaitEachItemInParallel(conflictedIndexPatterns, function ()
					{
						var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(_ref6)
						{
							var obj = _ref6.obj;
							var oldIndexId, resolution, newIndexId;
							return regeneratorRuntime.wrap(function _callee5$(_context5)
							{
								while (1) switch (_context5.prev = _context5.next)
								{
								case 0:
									oldIndexId = obj.searchSource.getOwnField("index");
									"string" !== typeof oldIndexId && (oldIndexId = oldIndexId.id);
									resolution = resolutions.find(function (_ref8)
									{
										var oldId = _ref8.oldId;
										return oldId === oldIndexId
									});
									if (resolution)
									{
										_context5.next = 5;
										break
									}
									return _context5.abrupt("return");
								case 5:
									newIndexId = resolution.newId;
									_context5.next = 8;
									return obj.hydrateIndexPattern(newIndexId);
								case 8:
									_context5.next = 10;
									return saveObject(obj, overwriteAll);
								case 10:
									if (!_context5.sent)
									{
										_context5.next = 12;
										break
									}
									importCount++;
								case 12:
								case "end":
									return _context5.stop()
								}
							}, _callee5, _this)
						}));
						return function (_x14)
						{
							return _ref7.apply(this, arguments)
						}
					}());
				case 3:
					return _context6.abrupt("return", importCount);
				case 4:
				case "end":
					return _context6.stop()
				}
			}, _callee6, this)
		})), function resolveIndexPatternConflicts(_x11, _x12, _x13)
		{
			return _ref5.apply(this, arguments)
		});
		var _ref5;
		exports.saveObjects = (_ref9 = _asyncToGenerator(regeneratorRuntime.mark(function _callee8(objs, overwriteAll)
		{
			var _this2 = this;
			var importCount;
			return regeneratorRuntime.wrap(function _callee8$(_context8)
			{
				while (1) switch (_context8.prev = _context8.next)
				{
				case 0:
					importCount = 0;
					_context8.next = 3;
					return awaitEachItemInParallel(objs, function ()
					{
						var _ref10 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(obj)
						{
							return regeneratorRuntime.wrap(function _callee7$(_context7)
							{
								while (1) switch (_context7.prev = _context7.next)
								{
								case 0:
									_context7.next = 2;
									return saveObject(obj, overwriteAll);
								case 2:
									if (!_context7.sent)
									{
										_context7.next = 4;
										break
									}
									importCount++;
								case 4:
								case "end":
									return _context7.stop()
								}
							}, _callee7, _this2)
						}));
						return function (_x17)
						{
							return _ref10.apply(this, arguments)
						}
					}());
				case 3:
					return _context8.abrupt("return", importCount);
				case 4:
				case "end":
					return _context8.stop()
				}
			}, _callee8, this)
		})), function saveObjects(_x15, _x16)
		{
			return _ref9.apply(this, arguments)
		});
		var _ref9;
		var saveObject = exports.saveObject = (_ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee9(obj, overwriteAll)
		{
			return regeneratorRuntime.wrap(function _callee9$(_context9)
			{
				while (1) switch (_context9.prev = _context9.next)
				{
				case 0:
					_context9.next = 2;
					return obj.save(
					{
						confirmOverwrite: !overwriteAll
					});
				case 2:
					return _context9.abrupt("return", _context9.sent);
				case 3:
				case "end":
					return _context9.stop()
				}
			}, _callee9, this)
		})), function saveObject(_x18, _x19)
		{
			return _ref11.apply(this, arguments)
		});
		var _ref11;
		exports.resolveSavedSearches = (_ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee11(savedSearches, services, indexPatterns, overwriteAll)
		{
			var _this3 = this;
			var importCount;
			return regeneratorRuntime.wrap(function _callee11$(_context11)
			{
				while (1) switch (_context11.prev = _context11.next)
				{
				case 0:
					importCount = 0;
					_context11.next = 3;
					return awaitEachItemInParallel(savedSearches, function ()
					{
						var _ref13 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(searchDoc)
						{
							var obj;
							return regeneratorRuntime.wrap(function _callee10$(_context10)
							{
								while (1) switch (_context10.prev = _context10.next)
								{
								case 0:
									_context10.next = 2;
									return getSavedObject(searchDoc, services);
								case 2:
									obj = _context10.sent;
									if (obj)
									{
										_context10.next = 5;
										break
									}
									return _context10.abrupt("return");
								case 5:
									_context10.next = 7;
									return importDocument(obj, searchDoc, overwriteAll);
								case 7:
									if (!_context10.sent)
									{
										_context10.next = 9;
										break
									}
									importCount++;
								case 9:
								case "end":
									return _context10.stop()
								}
							}, _callee10, _this3)
						}));
						return function (_x24)
						{
							return _ref13.apply(this, arguments)
						}
					}());
				case 3:
					return _context11.abrupt("return", importCount);
				case 4:
				case "end":
					return _context11.stop()
				}
			}, _callee11, this)
		})), function resolveSavedSearches(_x20, _x21, _x22, _x23)
		{
			return _ref12.apply(this, arguments)
		});
		var _ref12;
		exports.resolveSavedObjects = (_ref14 = _asyncToGenerator(regeneratorRuntime.mark(function _callee15(savedObjects, overwriteAll, services, indexPatterns)
		{
			var _this4 = this;
			var docTypes, importedObjectCount, failedImports, conflictedSearchDocs, conflictedIndexPatterns, conflictedSavedObjectsLinkedToSavedSearches;
			return regeneratorRuntime.wrap(function _callee15$(_context15)
			{
				while (1) switch (_context15.prev = _context15.next)
				{
				case 0:
					docTypes = groupByType(savedObjects);
					importedObjectCount = 0;
					failedImports = [];
					_context15.next = 5;
					return awaitEachItemInParallel(docTypes.indexPatterns, function ()
					{
						var _ref15 = _asyncToGenerator(regeneratorRuntime.mark(function _callee12(indexPatternDoc)
						{
							var importedIndexPatternId;
							return regeneratorRuntime.wrap(function _callee12$(_context12)
							{
								while (1) switch (_context12.prev = _context12.next)
								{
								case 0:
									_context12.prev = 0;
									_context12.next = 3;
									return importIndexPattern(indexPatternDoc, indexPatterns, overwriteAll);
								case 3:
									importedIndexPatternId = _context12.sent;
									importedIndexPatternId && importedObjectCount++;
									_context12.next = 10;
									break;
								case 7:
									_context12.prev = 7;
									_context12.t0 = _context12["catch"](0);
									failedImports.push(
									{
										indexPatternDoc: indexPatternDoc,
										error: _context12.t0
									});
								case 10:
								case "end":
									return _context12.stop()
								}
							}, _callee12, _this4, [
								[0, 7]
							])
						}));
						return function (_x29)
						{
							return _ref15.apply(this, arguments)
						}
					}());
				case 5:
					conflictedSearchDocs = [];
					conflictedIndexPatterns = [];
					conflictedSavedObjectsLinkedToSavedSearches = [];
					_context15.next = 10;
					return awaitEachItemInParallel(docTypes.searches, function ()
					{
						var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee13(searchDoc)
						{
							var obj;
							return regeneratorRuntime.wrap(function _callee13$(_context13)
							{
								while (1) switch (_context13.prev = _context13.next)
								{
								case 0:
									_context13.next = 2;
									return getSavedObject(searchDoc, services);
								case 2:
									obj = _context13.sent;
									_context13.prev = 3;
									_context13.next = 6;
									return importDocument(obj, searchDoc, overwriteAll);
								case 6:
									if (!_context13.sent)
									{
										_context13.next = 8;
										break
									}
									importedObjectCount++;
								case 8:
									_context13.next = 13;
									break;
								case 10:
									_context13.prev = 10;
									_context13.t0 = _context13["catch"](3);
									_context13.t0 instanceof _errors.SavedObjectNotFound ? "index-pattern" === _context13.t0.savedObjectType ? conflictedIndexPatterns.push(
									{
										obj: obj,
										doc: searchDoc
									}) : conflictedSearchDocs.push(searchDoc) : failedImports.push(
									{
										obj: obj,
										error: _context13.t0
									});
								case 13:
								case "end":
									return _context13.stop()
								}
							}, _callee13, _this4, [
								[3, 10]
							])
						}));
						return function (_x30)
						{
							return _ref16.apply(this, arguments)
						}
					}());
				case 10:
					_context15.next = 12;
					return awaitEachItemInParallel(docTypes.other, function ()
					{
						var _ref17 = _asyncToGenerator(regeneratorRuntime.mark(function _callee14(otherDoc)
						{
							var obj;
							return regeneratorRuntime.wrap(function _callee14$(_context14)
							{
								while (1) switch (_context14.prev = _context14.next)
								{
								case 0:
									_context14.next = 2;
									return getSavedObject(otherDoc, services);
								case 2:
									obj = _context14.sent;
									_context14.prev = 3;
									_context14.next = 6;
									return importDocument(obj, otherDoc, overwriteAll);
								case 6:
									if (!_context14.sent)
									{
										_context14.next = 8;
										break
									}
									importedObjectCount++;
								case 8:
									_context14.next = 13;
									break;
								case 10:
									_context14.prev = 10;
									_context14.t0 = _context14["catch"](3);
									if (_context14.t0 instanceof _errors.SavedObjectNotFound)
									{
										"search" === _context14.t0.savedObjectType && failedImports.push(
										{
											obj: obj,
											error: _context14.t0
										});
										"index-pattern" === _context14.t0.savedObjectType && (obj.savedSearchId ? conflictedSavedObjectsLinkedToSavedSearches.push(obj) : conflictedIndexPatterns.push(
										{
											obj: obj,
											doc: otherDoc
										}))
									}
									else failedImports.push(
									{
										obj: obj,
										error: _context14.t0
									});
								case 13:
								case "end":
									return _context14.stop()
								}
							}, _callee14, _this4, [
								[3, 10]
							])
						}));
						return function (_x31)
						{
							return _ref17.apply(this, arguments)
						}
					}());
				case 12:
					return _context15.abrupt("return",
					{
						conflictedIndexPatterns: conflictedIndexPatterns,
						conflictedSavedObjectsLinkedToSavedSearches: conflictedSavedObjectsLinkedToSavedSearches,
						conflictedSearchDocs: conflictedSearchDocs,
						importedObjectCount: importedObjectCount,
						failedImports: failedImports
					});
				case 13:
				case "end":
					return _context15.stop()
				}
			}, _callee15, this)
		})), function resolveSavedObjects(_x25, _x26, _x27, _x28)
		{
			return _ref14.apply(this, arguments)
		});
		var _ref14;
		var _errors = __webpack_require__(51);
		var _i18n = __webpack_require__(12);

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function addJsonFieldToIndexPattern(target, sourceString, fieldName, indexName)
		{
			if (sourceString) try
			{
				target[fieldName] = JSON.parse(sourceString)
			}
			catch (error)
			{
				throw new Error(_i18n.i18n.translate("kbn.management.objects.parsingFieldErrorMessage",
				{
					defaultMessage: "Error encountered parsing {fieldName} for index pattern {indexName}: {errorMessage}",
					values:
					{
						fieldName: fieldName,
						indexName: indexName,
						errorMessage: error.message
					}
				}))
			}
		}

		function groupByType(docs)
		{
			var defaultDocTypes = {
				searches: [],
				indexPatterns: [],
				other: []
			};
			return docs.reduce(function (types, doc)
			{
				switch (doc._type)
				{
				case "search":
					types.searches.push(doc);
					break;
				case "index-pattern":
					types.indexPatterns.push(doc);
					break;
				default:
					types.other.push(doc)
				}
				return types
			}, defaultDocTypes)
		}
	},
	1725: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getInAppUrl = getInAppUrl;

		function getInAppUrl(id, type)
		{
			switch (type)
			{
			case "search":
			case "searches":
				return "/discover/" + id;
			case "visualization":
			case "visualizations":
				return "/visualize/edit/" + id;
			case "index-pattern":
			case "index-patterns":
			case "indexPatterns":
				return "/management/kibana/indices/" + id;
			case "dashboard":
			case "dashboards":
				return "/dashboard/" + id;
			default:
				return "/" + type.toLowerCase() + "/" + id
			}
		}
	},
	1726: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _field_editor = __webpack_require__(5567);
		Object.defineProperty(exports, "FieldEditor",
		{
			enumerable: true,
			get: function get()
			{
				return _field_editor.FieldEditor
			}
		})
	},
	1727: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getSupportedScriptingLanguages = getSupportedScriptingLanguages;
		exports.getDeprecatedScriptingLanguages = getDeprecatedScriptingLanguages;
		exports.GetEnabledScriptingLanguagesProvider = GetEnabledScriptingLanguagesProvider;
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _notify = __webpack_require__(10);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function getSupportedScriptingLanguages()
		{
			return ["painless"]
		}

		function getDeprecatedScriptingLanguages()
		{
			return ["expression"]
		}

		function GetEnabledScriptingLanguagesProvider($http)
		{
			return function ()
			{
				return $http.get(_chrome2.default.addBasePath("/api/kibana/scripts/languages")).then(function (res)
				{
					return res.data
				}).catch(function ()
				{
					_notify.toastNotifications.addDanger("Error getting available scripting languages from Elasticsearch");
					return []
				})
			}
		}
	},
	1728: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var META_FIELD_NAMES = ["_seq_no", "_doc", "_uid"];

		function getFirstSortableField(indexPattern, fieldNames)
		{
			var sortableFields = fieldNames.filter(function (fieldName)
			{
				return META_FIELD_NAMES.includes(fieldName) || (indexPattern.fields.byName[fieldName] ||
				{
					sortable: false
				}).sortable
			});
			return sortableFields[0]
		}

		function reverseSortDirection(sortDirection)
		{
			return "asc" === sortDirection ? "desc" : "asc"
		}
		exports.getFirstSortableField = getFirstSortableField;
		exports.reverseSortDirection = reverseSortDirection
	},
	1729: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _actions = __webpack_require__(5633);
		Object.defineProperty(exports, "QueryParameterActionsProvider",
		{
			enumerable: true,
			get: function get()
			{
				return _actions.QueryParameterActionsProvider
			}
		});
		var _constants = __webpack_require__(1730);
		Object.defineProperty(exports, "MAX_CONTEXT_SIZE",
		{
			enumerable: true,
			get: function get()
			{
				return _constants.MAX_CONTEXT_SIZE
			}
		});
		Object.defineProperty(exports, "MIN_CONTEXT_SIZE",
		{
			enumerable: true,
			get: function get()
			{
				return _constants.MIN_CONTEXT_SIZE
			}
		});
		Object.defineProperty(exports, "QUERY_PARAMETER_KEYS",
		{
			enumerable: true,
			get: function get()
			{
				return _constants.QUERY_PARAMETER_KEYS
			}
		});
		var _state = __webpack_require__(1731);
		Object.defineProperty(exports, "createInitialQueryParametersState",
		{
			enumerable: true,
			get: function get()
			{
				return _state.createInitialQueryParametersState
			}
		})
	},
	1730: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.QUERY_PARAMETER_KEYS = exports.MIN_CONTEXT_SIZE = exports.MAX_CONTEXT_SIZE = void 0;
		var _state = __webpack_require__(1731);
		exports.MAX_CONTEXT_SIZE = 1e4;
		exports.MIN_CONTEXT_SIZE = 0;
		exports.QUERY_PARAMETER_KEYS = Object.keys((0, _state.createInitialQueryParametersState)())
	},
	1731: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.createInitialQueryParametersState = createInitialQueryParametersState;

		function createInitialQueryParametersState(defaultStepSize, tieBreakerField)
		{
			return {
				anchorType: null,
				anchorId: null,
				columns: [],
				defaultStepSize: defaultStepSize,
				filters: [],
				indexPatternId: null,
				predecessorCount: 0,
				successorCount: 0,
				sort: [],
				tieBreakerField: tieBreakerField
			}
		}
	},
	5408: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(170);
		__webpack_require__(172);
		__webpack_require__(174);
		__webpack_require__(175);
		__webpack_require__(176);
		__webpack_require__(177);
		__webpack_require__(178);
		__webpack_require__(179);
		__webpack_require__(180);
		__webpack_require__(181);
		__webpack_require__(182);
		__webpack_require__(183);
		__webpack_require__(184);
		__webpack_require__(185);
		__webpack_require__(186);
		__webpack_require__(187);
		__webpack_require__(188);
		__webpack_require__(189);
		__webpack_require__(190);
		__webpack_require__(191);
		__webpack_require__(192);
		__webpack_require__(193);
		__webpack_require__(194);
		__webpack_require__(195);
		__webpack_require__(196);
		__webpack_require__(197);
		__webpack_require__(198);
		__webpack_require__(199);
		__webpack_require__(200);
		__webpack_require__(201);
		__webpack_require__(202);
		__webpack_require__(203);
		__webpack_require__(204);
		__webpack_require__(205);
		__webpack_require__(206);
		__webpack_require__(207);
		__webpack_require__(208);
		__webpack_require__(209);
		__webpack_require__(210);
		__webpack_require__(211);
		__webpack_require__(212);
		__webpack_require__(213);
		__webpack_require__(214);
		__webpack_require__(215);
		__webpack_require__(216);
		__webpack_require__(217);
		__webpack_require__(218);
		__webpack_require__(219);
		__webpack_require__(220);
		__webpack_require__(221);
		__webpack_require__(222);
		__webpack_require__(140);
		__webpack_require__(223);
		__webpack_require__(224);
		__webpack_require__(225);
		__webpack_require__(226);
		__webpack_require__(227);
		__webpack_require__(228);
		__webpack_require__(229);
		__webpack_require__(230);
		__webpack_require__(231);
		__webpack_require__(232);
		__webpack_require__(233);
		__webpack_require__(234);
		__webpack_require__(235);
		__webpack_require__(236);
		__webpack_require__(237);
		__webpack_require__(238);
		__webpack_require__(239);
		__webpack_require__(240);
		__webpack_require__(241);
		__webpack_require__(242);
		__webpack_require__(243);
		__webpack_require__(244);
		__webpack_require__(245);
		__webpack_require__(246);
		__webpack_require__(247);
		__webpack_require__(248);
		__webpack_require__(249);
		__webpack_require__(250);
		__webpack_require__(251);
		__webpack_require__(252);
		__webpack_require__(253);
		__webpack_require__(254);
		__webpack_require__(255);
		__webpack_require__(256);
		__webpack_require__(257);
		__webpack_require__(258);
		__webpack_require__(259);
		__webpack_require__(260);
		var _i18n = __webpack_require__(12);
		var _kibanaCore__ = __webpack_require__(261);
		var injectedMetadata = JSON.parse(document.querySelector("kbn-injected-metadata").getAttribute("data"));
		_i18n.i18n.init(injectedMetadata.legacyMetadata.translations);
		new _kibanaCore__.CoreSystem(
		{
			injectedMetadata: injectedMetadata,
			rootDomElement: document.body,
			requireLegacyFiles: function requireLegacyFiles()
			{
				__webpack_require__(5409)
			}
		}).start()
	},
	5409: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		__webpack_require__(5410);
		__webpack_require__(813);
		__webpack_require__(865);
		__webpack_require__(867);
		__webpack_require__(870);
		__webpack_require__(5417);
		__webpack_require__(615);
		__webpack_require__(622);
		__webpack_require__(1582);
		__webpack_require__(892);
		__webpack_require__(1320);
		__webpack_require__(1584);
		__webpack_require__(5422);
		__webpack_require__(1678);
		__webpack_require__(893);
		__webpack_require__(880);
		__webpack_require__(1486);
		__webpack_require__(1510);
		__webpack_require__(895);
		__webpack_require__(1514);
		__webpack_require__(467);
		__webpack_require__(5436);
		__webpack_require__(5461);
		__webpack_require__(5464);
		__webpack_require__(1537);
		__webpack_require__(5487);
		__webpack_require__(5619);
		__webpack_require__(5622);
		__webpack_require__(5625);
		__webpack_require__(583);
		__webpack_require__(1580);
		__webpack_require__(611);
		__webpack_require__(901);
		var _notify = __webpack_require__(10);
		__webpack_require__(136);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_routes2.default.enable();
		_routes2.default.otherwise(
		{
			redirectTo: "/" + _chrome2.default.getInjected("kbnDefaultAppId", "discover")
		});
		_modules.uiModules.get("kibana").run(_notify.showAppRedirectNotification)
	},
	5410: function (module, exports, __webpack_require__)
	{
		__webpack_require__(5411);
		__webpack_require__(5413);
		__webpack_require__(5414);
		__webpack_require__(5415);
		__webpack_require__(5416)
	},
	5411: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5412)
	},
	5412: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _feature_catalogue = __webpack_require__(79);
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ($injector)
		{
			var licenseService = $injector.get("logstashLicenseService");
			if (!licenseService.enableLinks) return;
			return {
				id: "management_logstash",
				title: "Logstash Pipelines",
				description: "Create, delete, update, and clone data ingestion pipelines.",
				icon: "pipelineApp",
				path: "/app/kibana#/management/logstash/pipelines",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5413: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _feature_catalogue = __webpack_require__(79);
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "reporting",
				title: "Reporting",
				description: "Manage your reports generated from Discover, Visualize, and Dashboard.",
				icon: "reportingApp",
				path: "/app/kibana#/management/kibana/reporting",
				showOnHomePage: false,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5414: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _feature_catalogue = __webpack_require__(79);
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "security",
				title: "Security Settings",
				description: "Protect your data and easily manage who has access to what with users and roles.",
				icon: "securityApp",
				path: "/app/kibana#/management/security",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5415: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _feature_catalogue = __webpack_require__(79);
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "timelion",
				title: "Timelion",
				description: "Use an expression language to analyze time series data and visualize the results.",
				icon: "timelionApp",
				path: "/app/timelion",
				showOnHomePage: false,
				category: _feature_catalogue.FeatureCatalogueCategory.DATA
			}
		})
	},
	5416: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _feature_catalogue = __webpack_require__(79);
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "watcher",
				title: "Watcher",
				description: "Detect changes in your data by creating, managing, and monitoring alerts.",
				icon: "watchesApp",
				path: "/app/kibana#/management/elasticsearch/watcher/watches",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5417: function (module, exports, __webpack_require__)
	{
		__webpack_require__(5418)
	},
	5418: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _agg_type_filter = __webpack_require__(5419);
		var _agg_type_field_filter = __webpack_require__(5420);
		var _editor_config = __webpack_require__(5421);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var uiSettings = _chrome2.default.getUiSettingsClient();
		var isRollupIndexPatternsEnabled = uiSettings.get("rollups:enableIndexPatterns");
		if (isRollupIndexPatternsEnabled)
		{
			(0, _agg_type_filter.initAggTypeFilter)();
			(0, _agg_type_field_filter.initAggTypeFieldFilter)();
			(0, _editor_config.initEditorConfig)()
		}
	},
	5419: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.initAggTypeFilter = initAggTypeFilter;
		var _filter = __webpack_require__(877);

		function initAggTypeFilter()
		{
			_filter.aggTypeFilters.addFilter(function (aggType, indexPattern)
			{
				if ("rollup" !== indexPattern.type) return true;
				var aggName = aggType.name;
				var aggs = indexPattern.typeMeta && indexPattern.typeMeta.aggs;
				return "count" === aggName || Object.keys(aggs).includes(aggName)
			})
		}
	},
	5420: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.initAggTypeFieldFilter = initAggTypeFieldFilter;
		var _filter = __webpack_require__(872);

		function initAggTypeFieldFilter()
		{
			_filter.aggTypeFieldFilters.addFilter(function (field, fieldParamType, aggConfig)
			{
				var indexPattern = aggConfig.getIndexPattern();
				if (!indexPattern || "rollup" !== indexPattern.type) return true;
				var aggName = aggConfig.type && aggConfig.type.name;
				var aggFields = indexPattern.typeMeta && indexPattern.typeMeta.aggs && indexPattern.typeMeta.aggs[aggName];
				return aggFields && aggFields[field.name]
			})
		}
	},
	5421: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.initEditorConfig = initEditorConfig;
		var _editor_config_providers = __webpack_require__(1482);

		function initEditorConfig()
		{
			_editor_config_providers.editorConfigProviders.register(function (aggType, indexPattern, aggConfig)
			{
				if ("rollup" !== indexPattern.type) return {};
				var aggTypeName = aggConfig.type && aggConfig.type.name;
				if ("terms" === aggTypeName) return {
					otherBucket:
					{
						hidden: true
					},
					missingBucket:
					{
						hidden: true
					},
					orderBy:
					{
						fixedValue: "_key",
						hidden: true
					},
					orderAgg:
					{
						hidden: true
					}
				};
				var rollupAggs = indexPattern.typeMeta && indexPattern.typeMeta.aggs;
				var field = aggConfig.params && aggConfig.params.field && aggConfig.params.field.name;
				var fieldAgg = rollupAggs && field && rollupAggs[aggTypeName] && rollupAggs[aggTypeName][field];
				if (!rollupAggs || !field || !fieldAgg) return {};
				if ("histogram" === aggTypeName)
				{
					var interval = fieldAgg.interval;
					return interval ?
					{
						intervalBase:
						{
							fixedValue: interval
						},
						interval:
						{
							base: interval,
							help: "Must be a multiple of rollup configuration interval: " + interval
						}
					} :
					{}
				}
				if ("date_histogram" === aggTypeName)
				{
					var timezone = fieldAgg.time_zone || "UTC";
					var _interval = fieldAgg.interval;
					return {
						time_zone:
						{
							fixedValue: timezone
						},
						interval:
						{
							fixedValue: "custom"
						},
						useNormalizedEsInterval:
						{
							fixedValue: false
						},
						customInterval:
						{
							default: _interval,
							timeBase: _interval,
							help: "Must be a multiple of rollup configuration interval: " + _interval
						}
					}
				}
				return {}
			})
		}
	},
	5422: function (module, exports, __webpack_require__)
	{
		__webpack_require__(5423);
		__webpack_require__(5431)
	},
	5423: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _register = __webpack_require__(5424);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var uiSettings = _chrome2.default.getUiSettingsClient();
		var isRollupIndexPatternsEnabled = uiSettings.get("rollups:enableIndexPatterns");
		isRollupIndexPatternsEnabled && (0, _register.initIndexPatternCreation)()
	},
	5424: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.initIndexPatternCreation = initIndexPatternCreation;
		var _index_pattern_creation = __webpack_require__(649);
		var _rollup_index_pattern_creation_config = __webpack_require__(5427);

		function initIndexPatternCreation()
		{
			_index_pattern_creation.IndexPatternCreationConfigRegistry.register(function ()
			{
				return _rollup_index_pattern_creation_config.RollupIndexPatternCreationConfig
			})
		}
	},
	5425: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternCreationFactory = void 0;
		var _index_pattern_creation_config_registry = __webpack_require__(959);

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}
		var IndexPatternCreation = function IndexPatternCreation(registry, httpClient, type)
		{
			_classCallCheck(this, IndexPatternCreation);
			_initialiseProps.call(this);
			this._registry = registry;
			this._allTypes = this._registry.inOrder.map(function (Plugin)
			{
				return new Plugin(
				{
					httpClient: httpClient
				})
			});
			this._setCurrentType(type)
		};
		var _initialiseProps = function _initialiseProps()
		{
			var _this = this;
			this._setCurrentType = function (type)
			{
				var index = type ? _this._registry.inOrder.findIndex(function (Plugin)
				{
					return Plugin.key === type
				}) : -1;
				_this._currentType = index > -1 && _this._allTypes[index] ? _this._allTypes[index] : null
			};
			this.getType = function ()
			{
				return _this._currentType || null
			};
			this.getIndexPatternCreationOptions = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(urlHandler)
			{
				var options;
				return regeneratorRuntime.wrap(function _callee2$(_context2)
				{
					while (1) switch (_context2.prev = _context2.next)
					{
					case 0:
						options = [];
						_context2.next = 3;
						return Promise.all(_this._allTypes.map(function ()
						{
							var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(type)
							{
								var option;
								return regeneratorRuntime.wrap(function _callee$(_context)
								{
									while (1) switch (_context.prev = _context.next)
									{
									case 0:
										if (!type.getIndexPatternCreationOption)
										{
											_context.next = 6;
											break
										}
										_context.next = 3;
										return type.getIndexPatternCreationOption(urlHandler);
									case 3:
										_context.t0 = _context.sent;
										_context.next = 7;
										break;
									case 6:
										_context.t0 = null;
									case 7:
										option = _context.t0;
										option && options.push(option);
									case 9:
									case "end":
										return _context.stop()
									}
								}, _callee, _this)
							}));
							return function (_x3)
							{
								return _ref2.apply(this, arguments)
							}
						}()));
					case 3:
						return _context2.abrupt("return", options);
					case 4:
					case "end":
						return _context2.stop()
					}
				}, _callee2, _this)
			})), function (_x2)
			{
				return _ref.apply(this, arguments)
			});
			var _ref
		};
		exports.IndexPatternCreationFactory = function IndexPatternCreationFactory(Private, $http)
		{
			return function ()
			{
				var type = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default";
				var indexPatternCreationRegistry = Private(_index_pattern_creation_config_registry.IndexPatternCreationConfigRegistry);
				var indexPatternCreationProvider = new IndexPatternCreation(indexPatternCreationRegistry, $http, type);
				return indexPatternCreationProvider
			}
		}
	},
	5426: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _index_pattern_creation_config = __webpack_require__(1717);
		var _index_pattern_creation_config_registry = __webpack_require__(959);
		_index_pattern_creation_config_registry.IndexPatternCreationConfigRegistry.register(function ()
		{
			return _index_pattern_creation_config.IndexPatternCreationConfig
		})
	},
	5427: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.RollupIndexPatternCreationConfig = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _index_pattern_creation = __webpack_require__(649);
		var _rollup_prompt = __webpack_require__(5428);
		var _api = __webpack_require__(5430);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var rollupIndexPatternTypeName = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.defaultTypeName",
		{
			defaultMessage: "rollup index pattern"
		});
		var rollupIndexPatternButtonText = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.defaultButtonText",
		{
			defaultMessage: "Rollup index pattern"
		});
		var rollupIndexPatternButtonDescription = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.defaultButtonDescription",
		{
			defaultMessage: "Perform limited aggregations against summarized data"
		});
		var rollupIndexPatternNoMatchError = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.noMatchError",
		{
			defaultMessage: "Rollup index pattern error: must match one rollup index"
		});
		var rollupIndexPatternTooManyMatchesError = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.tooManyMatchesError",
		{
			defaultMessage: "Rollup index pattern error: can only match one rollup index"
		});
		var rollupIndexPatternIndexLabel = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.indexLabel",
		{
			defaultMessage: "Rollup"
		});
		var RollupIndexPatternCreationConfig = exports.RollupIndexPatternCreationConfig = function (_IndexPatternCreation)
		{
			_inherits(RollupIndexPatternCreationConfig, _IndexPatternCreation);

			function RollupIndexPatternCreationConfig(options)
			{
				_classCallCheck(this, RollupIndexPatternCreationConfig);
				var _this = _possibleConstructorReturn(this, (RollupIndexPatternCreationConfig.__proto__ || Object.getPrototypeOf(RollupIndexPatternCreationConfig)).call(this, _extends(
				{
					type: "rollup",
					name: rollupIndexPatternTypeName,
					showSystemIndices: false,
					isBeta: true
				}, options)));
				_this.isRollupIndex = function (indexName)
				{
					return _this.rollupIndices.includes(indexName)
				};
				_this.checkIndicesForErrors = function (indices)
				{
					_this.rollupIndex = null;
					if (!indices || !indices.length) return;
					var rollupIndices = indices.filter(function (index)
					{
						return _this.isRollupIndex(index.name)
					});
					if (!rollupIndices.length) return [rollupIndexPatternNoMatchError];
					if (rollupIndices.length > 1) return [rollupIndexPatternTooManyMatchesError];
					var rollupIndexName = rollupIndices[0].name;
					var error = _this.rollupIndicesCapabilities[rollupIndexName].error;
					if (error)
					{
						var errorMessage = _i18n.i18n.translate("xpack.rollupJobs.editRollupIndexPattern.createIndex.uncaughtError",
						{
							defaultMessage: "Rollup index pattern error: {error}",
							values:
							{
								error: error
							}
						});
						return [errorMessage]
					}
					_this.rollupIndex = rollupIndexName
				};
				_this.getIndexPatternMappings = function ()
				{
					return _this.rollupIndex ?
					{
						type: _this.type,
						typeMeta:
						{
							params:
							{
								rollup_index: _this.rollupIndex
							},
							aggs: _this.rollupIndicesCapabilities[_this.rollupIndex].aggs
						}
					} :
					{}
				};
				_this.renderPrompt = function ()
				{
					return _react2.default.createElement(_rollup_prompt.RollupPrompt, null)
				};
				_this.getFetchForWildcardOptions = function ()
				{
					return {
						type: _this.type,
						params:
						{
							rollup_index: _this.rollupIndex
						}
					}
				};
				(0, _api.setHttpClient)(_this.httpClient);
				_this.rollupIndex = null;
				_this.rollupJobs = [];
				_this.rollupIndicesCapabilities = {};
				_this.rollupIndices = [];
				_this.settingUp = _this.setRollupIndices();
				return _this
			}
			_createClass(RollupIndexPatternCreationConfig, [
			{
				key: "setRollupIndices",
				value: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
					{
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								_context.prev = 0;
								_context.next = 3;
								return (0, _api.getRollupIndices)();
							case 3:
								this.rollupIndicesCapabilities = _context.sent;
								this.rollupIndices = Object.keys(this.rollupIndicesCapabilities);
								_context.next = 9;
								break;
							case 7:
								_context.prev = 7;
								_context.t0 = _context["catch"](0);
							case 9:
							case "end":
								return _context.stop()
							}
						}, _callee, this, [
							[0, 7]
						])
					}));

					function setRollupIndices()
					{
						return _ref.apply(this, arguments)
					}
					return setRollupIndices
				}()
			},
			{
				key: "getIndexPatternCreationOption",
				value: function ()
				{
					var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(urlHandler)
					{
						return regeneratorRuntime.wrap(function _callee2$(_context2)
						{
							while (1) switch (_context2.prev = _context2.next)
							{
							case 0:
								_context2.next = 2;
								return this.settingUp;
							case 2:
								return _context2.abrupt("return", this.rollupIndices && this.rollupIndices.length ?
								{
									text: rollupIndexPatternButtonText,
									description: rollupIndexPatternButtonDescription,
									testSubj: "createRollupIndexPatternButton",
									isBeta: this.isBeta,
									onClick: function onClick()
									{
										urlHandler("/management/kibana/index?type=rollup")
									}
								} : null);
							case 3:
							case "end":
								return _context2.stop()
							}
						}, _callee2, this)
					}));

					function getIndexPatternCreationOption(_x)
					{
						return _ref2.apply(this, arguments)
					}
					return getIndexPatternCreationOption
				}()
			},
			{
				key: "getIndexTags",
				value: function getIndexTags(indexName)
				{
					return this.isRollupIndex(indexName) ? [
					{
						key: this.type,
						name: rollupIndexPatternIndexLabel
					}] : []
				}
			}]);
			return RollupIndexPatternCreationConfig
		}(_index_pattern_creation.IndexPatternCreationConfig);
		RollupIndexPatternCreationConfig.key = "rollup"
	},
	5428: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _rollup_prompt = __webpack_require__(5429);
		Object.defineProperty(exports, "RollupPrompt",
		{
			enumerable: true,
			get: function get()
			{
				return _rollup_prompt.RollupPrompt
			}
		})
	},
	5429: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.RollupPrompt = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.RollupPrompt = function RollupPrompt()
		{
			return _react2.default.createElement(_eui.EuiCallOut,
			{
				color: "warning",
				iconType: "help",
				title: "Beta feature"
			}, _react2.default.createElement("p", null, "Kibana's support for rollup index patterns is in beta. You might encounter issues using these patterns in saved searches, visualizations, and dashboards. They are not supported in advanced features, such as Visual Builder, Timelion, and Machine Learning."), _react2.default.createElement("p", null, "You can match a rollup index pattern against one rollup index and zero or more regular indices. A rollup index pattern has limited metrics, fields, intervals, and aggregations. A rollup index is limited to indices that have one job configuration, or multiple jobs with compatible configurations."))
		}
	},
	5430: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getRollupIndices = exports.setHttpClient = void 0;
		exports.getRollupIndices = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
		{
			var response;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					_context.next = 2;
					return httpClient.get(apiPrefix + "/indices");
				case 2:
					response = _context.sent;
					return _context.abrupt("return", response.data ||
					{});
				case 4:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function getRollupIndices()
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var httpClient = void 0;
		exports.setHttpClient = function setHttpClient(client)
		{
			httpClient = client
		};
		var apiPrefix = _chrome2.default.addBasePath("/api/rollup")
	},
	5431: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _register = __webpack_require__(5432);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var uiSettings = _chrome2.default.getUiSettingsClient();
		var isRollupIndexPatternsEnabled = uiSettings.get("rollups:enableIndexPatterns");
		isRollupIndexPatternsEnabled && (0, _register.initIndexPatternList)()
	},
	5432: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.initIndexPatternList = initIndexPatternList;
		var _index_pattern_list = __webpack_require__(650);
		var _rollup_index_pattern_list_config = __webpack_require__(5435);

		function initIndexPatternList()
		{
			_index_pattern_list.IndexPatternListConfigRegistry.register(function ()
			{
				return _rollup_index_pattern_list_config.RollupIndexPatternListConfig
			})
		}
	},
	5433: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternListFactory = void 0;
		var _index_pattern_list_config_registry = __webpack_require__(960);

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}
		var IndexPatternList = function IndexPatternList(registry)
		{
			var _this = this;
			_classCallCheck(this, IndexPatternList);
			this.getIndexPatternTags = function (indexPattern)
			{
				return _this._plugins.reduce(function (tags, plugin)
				{
					return plugin.getIndexPatternTags ? tags.concat(plugin.getIndexPatternTags(indexPattern)) : tags
				}, [])
			};
			this.getFieldInfo = function (indexPattern, field)
			{
				return _this._plugins.reduce(function (info, plugin)
				{
					return plugin.getFieldInfo ? info.concat(plugin.getFieldInfo(indexPattern, field)) : info
				}, [])
			};
			this.areScriptedFieldsEnabled = function (indexPattern)
			{
				return _this._plugins.every(function (plugin)
				{
					return !plugin.areScriptedFieldsEnabled || plugin.areScriptedFieldsEnabled(indexPattern)
				})
			};
			this._plugins = registry.inOrder.map(function (Plugin)
			{
				return new Plugin
			})
		};
		exports.IndexPatternListFactory = function IndexPatternListFactory(Private)
		{
			return function ()
			{
				var indexPatternListRegistry = Private(_index_pattern_list_config_registry.IndexPatternListConfigRegistry);
				var indexPatternListProvider = new IndexPatternList(indexPatternListRegistry);
				return indexPatternListProvider
			}
		}
	},
	5434: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _index_pattern_list_config = __webpack_require__(1718);
		var _index_pattern_list_config_registry = __webpack_require__(960);
		_index_pattern_list_config_registry.IndexPatternListConfigRegistry.register(function ()
		{
			return _index_pattern_list_config.IndexPatternListConfig
		})
	},
	5435: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.RollupIndexPatternListConfig = void 0;
		var _index_pattern_list = __webpack_require__(650);

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}

		function isRollup(indexPattern)
		{
			return "rollup" === indexPattern.type || indexPattern.get && "rollup" === indexPattern.get("type")
		}
		var RollupIndexPatternListConfig = exports.RollupIndexPatternListConfig = function (_IndexPatternListConf)
		{
			_inherits(RollupIndexPatternListConfig, _IndexPatternListConf);

			function RollupIndexPatternListConfig()
			{
				var _ref;
				var _temp, _this, _ret;
				_classCallCheck(this, RollupIndexPatternListConfig);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RollupIndexPatternListConfig.__proto__ || Object.getPrototypeOf(RollupIndexPatternListConfig)).call.apply(_ref, [this].concat(args))), _this), _this.getIndexPatternTags = function (indexPattern)
				{
					return isRollup(indexPattern) ? [
					{
						key: "rollup",
						name: "Rollup"
					}] : []
				}, _this.getFieldInfo = function (indexPattern, field)
				{
					if (!isRollup(indexPattern)) return [];
					var allAggs = indexPattern.typeMeta && indexPattern.typeMeta.aggs;
					var fieldAggs = allAggs && Object.keys(allAggs).filter(function (agg)
					{
						return allAggs[agg][field]
					});
					if (!fieldAggs || !fieldAggs.length) return [];
					return ["Rollup aggregations:"].concat(fieldAggs.map(function (aggName)
					{
						var agg = allAggs[aggName][field];
						switch (aggName)
						{
						case "date_histogram":
							return aggName + " (interval: " + agg.interval + ", " + (agg.delay ? "delay: " + agg.delay + "," : "") + " " + agg.time_zone + ")";
						case "histogram":
							return aggName + " (interval: " + agg.interval + ")";
						default:
							return aggName
						}
					}))
				}, _this.areScriptedFieldsEnabled = function (indexPattern)
				{
					return !isRollup(indexPattern)
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			return RollupIndexPatternListConfig
		}(_index_pattern_list.IndexPatternListConfig);
		RollupIndexPatternListConfig.key = "rollup"
	},
	5436: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5437);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _home_ng_wrapper = __webpack_require__(5438);
		var _home_ng_wrapper2 = _interopRequireDefault(_home_ng_wrapper);
		var _feature_catalogue = __webpack_require__(79);
		var _modules = __webpack_require__(2);
		var _home_app = __webpack_require__(5439);
		var _persisted_log = __webpack_require__(132);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var app = _modules.uiModules.get("apps/home", []);
		app.directive("homeApp", function (reactDirective)
		{
			return reactDirective(_home_app.HomeApp)
		});

		function getRoute()
		{
			return {
				template: _home_ng_wrapper2.default,
				controller: function controller($scope, config, indexPatterns, Private)
				{
					$scope.directories = Private(_feature_catalogue.FeatureCatalogueRegistryProvider).inTitleOrder;
					$scope.recentlyAccessed = _persisted_log.recentlyAccessed.get().map(function (item)
					{
						item.link = _chrome2.default.addBasePath(item.link);
						return item
					})
				}
			}
		}
		_routes2.default.when("/home", getRoute());
		_routes2.default.when("/home/feature_directory", getRoute());
		_routes2.default.when("/home/tutorial_directory/:tab?", getRoute());
		_routes2.default.when("/home/tutorial/:id", getRoute())
	},
	5437: function (module, exports) {},
	5438: function (module, exports)
	{
		module.exports = '<home-app\n  directories="directories"\n  recently-accessed="recentlyAccessed"\n/>\n'
	},
	5439: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.HomeApp = HomeApp;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _home = __webpack_require__(5440);
		var _feature_directory = __webpack_require__(5443);
		var _tutorial_directory = __webpack_require__(5444);
		var _tutorial = __webpack_require__(5449);
		var _reactRouterDom = __webpack_require__(80);
		var _load_tutorials = __webpack_require__(1720);
		var _replace_template_strings = __webpack_require__(5459);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _recently_accessed = __webpack_require__(1719);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function HomeApp(_ref)
		{
			var directories = _ref.directories,
				recentlyAccessed = _ref.recentlyAccessed;
			var isCloudEnabled = _chrome2.default.getInjected("isCloudEnabled", false);
			var apmUiEnabled = _chrome2.default.getInjected("apmUiEnabled", true);
			var mlEnabled = _chrome2.default.getInjected("mlEnabled", false);
			var savedObjectsClient = _chrome2.default.getSavedObjectsClient();
			var renderTutorialDirectory = function renderTutorialDirectory(props)
			{
				return _react2.default.createElement(_tutorial_directory.TutorialDirectory,
				{
					addBasePath: _chrome2.default.addBasePath,
					openTab: props.match.params.tab,
					isCloudEnabled: isCloudEnabled
				})
			};
			var renderTutorial = function renderTutorial(props)
			{
				return _react2.default.createElement(_tutorial.Tutorial,
				{
					addBasePath: _chrome2.default.addBasePath,
					isCloudEnabled: isCloudEnabled,
					getTutorial: _load_tutorials.getTutorial,
					replaceTemplateStrings: _replace_template_strings.replaceTemplateStrings,
					tutorialId: props.match.params.id,
					bulkCreate: savedObjectsClient.bulkCreate
				})
			};
			return _react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_reactRouterDom.HashRouter, null, _react2.default.createElement(_reactRouterDom.Switch, null, _react2.default.createElement(_reactRouterDom.Route,
			{
				path: "/home/tutorial/:id",
				render: renderTutorial
			}), _react2.default.createElement(_reactRouterDom.Route,
			{
				path: "/home/tutorial_directory/:tab?",
				render: renderTutorialDirectory
			}), _react2.default.createElement(_reactRouterDom.Route,
			{
				path: "/home/feature_directory"
			}, _react2.default.createElement(_feature_directory.FeatureDirectory,
			{
				addBasePath: _chrome2.default.addBasePath,
				directories: directories
			})), _react2.default.createElement(_reactRouterDom.Route,
			{
				path: "/home"
			}, _react2.default.createElement(_home.Home,
			{
				addBasePath: _chrome2.default.addBasePath,
				directories: directories,
				apmUiEnabled: apmUiEnabled,
				mlEnabled: mlEnabled,
				recentlyAccessed: recentlyAccessed,
				find: savedObjectsClient.find,
				localStorage: localStorage,
				urlBasePath: _chrome2.default.getBasePath()
			})))))
		}
		HomeApp.propTypes = {
			directories: _propTypes2.default.arrayOf(_propTypes2.default.shape(
			{
				id: _propTypes2.default.string.isRequired,
				title: _propTypes2.default.string.isRequired,
				description: _propTypes2.default.string.isRequired,
				icon: _propTypes2.default.string.isRequired,
				path: _propTypes2.default.string.isRequired,
				showOnHomePage: _propTypes2.default.bool.isRequired,
				category: _propTypes2.default.string.isRequired
			})),
			recentlyAccessed: _propTypes2.default.arrayOf(_recently_accessed.recentlyAccessedShape).isRequired
		}
	},
	5440: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Home = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _synopsis = __webpack_require__(961);
		var _add_data = __webpack_require__(5441);
		var _recently_accessed = __webpack_require__(1719);
		var _react3 = __webpack_require__(8);
		var _eui = __webpack_require__(3);
		var _welcome = __webpack_require__(5442);
		var _feature_catalogue = __webpack_require__(79);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var KEY_ENABLE_WELCOME = "home:welcome:show";
		var Home = exports.Home = function (_Component)
		{
			_inherits(Home, _Component);

			function Home(props)
			{
				var _this2 = this;
				_classCallCheck(this, Home);
				var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
				_this.fetchIsNewKibanaInstance = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var resp;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_context.prev = 0;
							setTimeout(function ()
							{
								_this.state.isLoading && _this.setState(
								{
									isWelcomeEnabled: false
								})
							}, 500);
							_context.next = 4;
							return _this.props.find(
							{
								type: "index-pattern",
								fields: ["title"],
								search: "*",
								search_fields: ["title"],
								perPage: 1
							});
						case 4:
							resp = _context.sent;
							_this.endLoading(
							{
								isNewKibanaInstance: 0 === resp.total
							});
							_context.next = 11;
							break;
						case 8:
							_context.prev = 8;
							_context.t0 = _context["catch"](0);
							_this.endLoading();
						case 11:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2, [
						[0, 8]
					])
				}));
				_this.endLoading = function ()
				{
					var state = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] :
					{};
					_this._isMounted && _this.setState(_extends(
					{}, state,
					{
						isLoading: false
					}))
				};
				_this.skipWelcome = function ()
				{
					_this.props.localStorage.setItem(KEY_ENABLE_WELCOME, "false");
					_this._isMounted && _this.setState(
					{
						isWelcomeEnabled: false
					})
				};
				_this.renderDirectories = function (category)
				{
					var _this$props = _this.props,
						addBasePath = _this$props.addBasePath,
						directories = _this$props.directories;
					return directories.filter(function (directory)
					{
						return directory.showOnHomePage && directory.category === category
					}).map(function (directory)
					{
						return _react2.default.createElement(_eui.EuiFlexItem,
						{
							style:
							{
								minHeight: 64
							},
							key: directory.id
						}, _react2.default.createElement(_synopsis.Synopsis,
						{
							description: directory.description,
							iconType: directory.icon,
							title: directory.title,
							url: addBasePath(directory.path)
						}))
					})
				};
				var isWelcomeEnabled = "false" !== props.localStorage.getItem(KEY_ENABLE_WELCOME);
				_this.state = {
					isLoading: isWelcomeEnabled,
					isNewKibanaInstance: false,
					isWelcomeEnabled: isWelcomeEnabled
				};
				return _this
			}
			_createClass(Home, [
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this._isMounted = false
				}
			},
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					this._isMounted = true;
					this.fetchIsNewKibanaInstance()
				}
			},
			{
				key: "renderNormal",
				value: function renderNormal()
				{
					var _props = this.props,
						apmUiEnabled = _props.apmUiEnabled,
						recentlyAccessed = _props.recentlyAccessed,
						mlEnabled = _props.mlEnabled;
					var recentlyAccessedPanel = void 0;
					recentlyAccessed.length > 0 && (recentlyAccessedPanel = _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_recently_accessed.RecentlyAccessed,
					{
						recentlyAccessed: recentlyAccessed
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					})));
					return _react2.default.createElement(_eui.EuiPage,
					{
						className: "homPage"
					}, _react2.default.createElement(_eui.EuiPageBody, null, recentlyAccessedPanel, _react2.default.createElement(_add_data.AddData,
					{
						apmUiEnabled: apmUiEnabled,
						mlEnabled: mlEnabled,
						isNewKibanaInstance: this.state.isNewKibanaInstance
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					}), _react2.default.createElement(_eui.EuiFlexGroup, null, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h3", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.directories.visualize.nameTitle",
						defaultMessage: "Visualize and Explore Data"
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_eui.EuiFlexGrid,
					{
						columns: 2
					}, this.renderDirectories(_feature_catalogue.FeatureCatalogueCategory.DATA)))), _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h3", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.directories.manage.nameTitle",
						defaultMessage: "Manage and Administer the Elastic Stack"
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_eui.EuiFlexGrid,
					{
						columns: 2
					}, this.renderDirectories(_feature_catalogue.FeatureCatalogueCategory.ADMIN))))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					}), _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "center"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.directories.notFound.description",
						defaultMessage: "Didn’t find what you were looking for?"
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement(_eui.EuiButton,
					{
						href: "#/home/feature_directory"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.directories.notFound.viewFullButtonLabel",
						defaultMessage: "View full directory of Kibana plugins"
					}))))))
				}
			},
			{
				key: "renderLoading",
				value: function renderLoading()
				{
					return ""
				}
			},
			{
				key: "renderWelcome",
				value: function renderWelcome()
				{
					return _react2.default.createElement(_welcome.Welcome,
					{
						onSkip: this.skipWelcome,
						urlBasePath: this.props.urlBasePath
					})
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _state = this.state,
						isLoading = _state.isLoading,
						isWelcomeEnabled = _state.isWelcomeEnabled,
						isNewKibanaInstance = _state.isNewKibanaInstance;
					if (isWelcomeEnabled)
					{
						if (isLoading) return this.renderLoading();
						if (isNewKibanaInstance) return this.renderWelcome()
					}
					return this.renderNormal()
				}
			}]);
			return Home
		}(_react.Component);
		Home.propTypes = {
			addBasePath: _propTypes2.default.func.isRequired,
			directories: _propTypes2.default.arrayOf(_propTypes2.default.shape(
			{
				id: _propTypes2.default.string.isRequired,
				title: _propTypes2.default.string.isRequired,
				description: _propTypes2.default.string.isRequired,
				icon: _propTypes2.default.string.isRequired,
				path: _propTypes2.default.string.isRequired,
				showOnHomePage: _propTypes2.default.bool.isRequired,
				category: _propTypes2.default.string.isRequired
			})),
			apmUiEnabled: _propTypes2.default.bool.isRequired,
			recentlyAccessed: _propTypes2.default.arrayOf(_recently_accessed.recentlyAccessedShape).isRequired,
			find: _propTypes2.default.func.isRequired,
			localStorage: _propTypes2.default.object.isRequired,
			urlBasePath: _propTypes2.default.string.isRequired,
			mlEnabled: _propTypes2.default.bool.isRequired
		}
	},
	5441: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.AddData = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _classnames = __webpack_require__(5);
		var _classnames2 = _interopRequireDefault(_classnames);
		var _react3 = __webpack_require__(8);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var basePath = _chrome2.default.getBasePath();
		var AddDataUi = function AddDataUi(_ref)
		{
			var apmUiEnabled = _ref.apmUiEnabled,
				isNewKibanaInstance = _ref.isNewKibanaInstance,
				intl = _ref.intl,
				mlEnabled = _ref.mlEnabled;
			var renderCards = function renderCards()
			{
				var apmTitle = intl.formatMessage(
				{
					id: "kbn.home.addData.apm.nameTitle",
					defaultMessage: "APM"
				});
				var apmDescription = intl.formatMessage(
				{
					id: "kbn.home.addData.apm.nameDescription",
					defaultMessage: "APM automatically collects in-depth performance metrics and errors from inside your applications."
				});
				var loggingTitle = intl.formatMessage(
				{
					id: "kbn.home.addData.logging.nameTitle",
					defaultMessage: "Logging"
				});
				var loggingDescription = intl.formatMessage(
				{
					id: "kbn.home.addData.logging.nameDescription",
					defaultMessage: "Ingest logs from popular data sources and easily visualize in preconfigured dashboards."
				});
				var metricsTitle = intl.formatMessage(
				{
					id: "kbn.home.addData.metrics.nameTitle",
					defaultMessage: "Metrics"
				});
				var metricsDescription = intl.formatMessage(
				{
					id: "kbn.home.addData.metrics.nameDescription",
					defaultMessage: "Collect metrics from the operating system and services running on your servers."
				});
				var securityTitle = intl.formatMessage(
				{
					id: "kbn.home.addData.security.nameTitle",
					defaultMessage: "Security analytics"
				});
				var securityDescription = intl.formatMessage(
				{
					id: "kbn.home.addData.security.nameDescription",
					defaultMessage: "Centralize security events for interactive investigation in ready-to-go visualizations."
				});
				var getApmCard = function getApmCard()
				{
					return _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiCard,
					{
						className: "homAddData__card",
						icon: _react2.default.createElement(_eui.EuiIcon,
						{
							className: "homAddData__icon",
							type: "apmApp"
						}),
						title: apmTitle,
						description: apmDescription,
						footer: _react2.default.createElement(_eui.EuiButton,
						{
							className: "homAddData__button",
							href: "#/home/tutorial/apm"
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.addData.apm.addApmButtonLabel",
							defaultMessage: "Add APM"
						}))
					}))
				};
				return _react2.default.createElement(_eui.EuiFlexGroup,
				{
					wrap: true,
					gutterSize: "none"
				}, false !== apmUiEnabled && getApmCard(), _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiCard,
				{
					className: "homAddData__card",
					icon: _react2.default.createElement(_eui.EuiIcon,
					{
						className: "homAddData__icon",
						type: "loggingApp"
					}),
					title: loggingTitle,
					description: loggingDescription,
					footer: _react2.default.createElement(_eui.EuiButton,
					{
						className: "homAddData__button",
						href: "#/home/tutorial_directory/logging"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.addData.logging.addLogDataButtonLabel",
						defaultMessage: "Add log data"
					}))
				})), _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiCard,
				{
					className: "homAddData__card",
					icon: _react2.default.createElement(_eui.EuiIcon,
					{
						className: "homAddData__icon",
						type: "monitoringApp"
					}),
					title: metricsTitle,
					description: metricsDescription,
					footer: _react2.default.createElement(_eui.EuiButton,
					{
						className: "homAddData__button",
						href: "#/home/tutorial_directory/metrics"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.addData.metrics.addMetricsDataButtonLabel",
						defaultMessage: "Add metric data"
					}))
				})), _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiCard,
				{
					className: "homAddData__card",
					icon: _react2.default.createElement(_eui.EuiIcon,
					{
						className: "homAddData__icon",
						type: "securityApp"
					}),
					title: securityTitle,
					description: securityDescription,
					footer: _react2.default.createElement(_eui.EuiButton,
					{
						className: "homAddData__button",
						href: "#/home/tutorial_directory/security"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.addData.security.addSecurityEventsButtonLabel",
						defaultMessage: "Add security events"
					}))
				})))
			};
			var footerItemClasses = (0, _classnames2.default)("homAddData__footerItem",
			{
				"homAddData__footerItem--highlight": isNewKibanaInstance
			});
			return _react2.default.createElement(_eui.EuiPanel,
			{
				paddingSize: "l"
			}, _react2.default.createElement(_eui.EuiFlexGroup, null, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h3", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.addDataToKibanaTitle",
				defaultMessage: "Add Data to Kibana"
			}))), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.addDataToKibanaDescription",
				defaultMessage: "Use these solutions to quickly turn your data into pre-built dashboards and monitoring systems."
			}))))), _react2.default.createElement(_eui.EuiSpacer, null), renderCards(), _react2.default.createElement(_eui.EuiHorizontalRule, null), _react2.default.createElement(_eui.EuiFlexGrid,
			{
				columns: false !== mlEnabled ? 3 : 2
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				className: footerItemClasses
			}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("strong",
			{
				style:
				{
					height: 38
				}
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.sampleDataTitle",
				defaultMessage: "Add sample data"
			})), _react2.default.createElement(_eui.EuiLink,
			{
				style:
				{
					display: "block",
					textAlign: "center"
				},
				href: "#/home/tutorial_directory/sampleData"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.sampleDataLink",
				defaultMessage: "Load a data set and a Kibana dashboard"
			})))), false !== mlEnabled ? _react2.default.createElement(_eui.EuiFlexItem,
			{
				className: footerItemClasses
			}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("strong",
			{
				style:
				{
					height: 38
				}
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.uploadFileTitle",
				defaultMessage: "Upload data from log file"
			})), _react2.default.createElement(_eui.EuiLink,
			{
				style:
				{
					display: "block",
					textAlign: "center"
				},
				href: basePath + "/app/ml#/filedatavisualizer"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.uploadFileLink",
				defaultMessage: "Import a CSV, NDJSON, or log file"
			})))) : null, _react2.default.createElement(_eui.EuiFlexItem,
			{
				className: footerItemClasses
			}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("strong",
			{
				style:
				{
					height: 38
				}
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.yourDataTitle",
				defaultMessage: "Use Elasticsearch data"
			})), _react2.default.createElement(_eui.EuiLink,
			{
				style:
				{
					display: "block",
					textAlign: "center"
				},
				href: "#/management/kibana/index"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.addData.yourDataLink",
				defaultMessage: "Connect to your Elasticsearch index"
			}))))))
		};
		AddDataUi.propTypes = {
			apmUiEnabled: _propTypes2.default.bool.isRequired,
			mlEnabled: _propTypes2.default.bool.isRequired,
			isNewKibanaInstance: _propTypes2.default.bool.isRequired
		};
		exports.AddData = (0, _react3.injectI18n)(AddDataUi)
	},
	5442: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Welcome = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var Welcome = exports.Welcome = function (_React$Component)
		{
			_inherits(Welcome, _React$Component);

			function Welcome()
			{
				var _ref;
				var _temp, _this, _ret;
				_classCallCheck(this, Welcome);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call.apply(_ref, [this].concat(args))), _this), _this.hideOnEsc = function (e)
				{
					"Escape" === e.key && _this.props.onSkip()
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(Welcome, [
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					document.addEventListener("keydown", this.hideOnEsc)
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					document.removeEventListener("keydown", this.hideOnEsc)
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _props = this.props,
						urlBasePath = _props.urlBasePath,
						onSkip = _props.onSkip;
					return _react2.default.createElement("div",
					{
						className: "homWelcome"
					}, _react2.default.createElement("header",
					{
						className: "homWelcome__header"
					}, _react2.default.createElement("div",
					{
						className: "homWelcome__content eui-textCenter"
					}, _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "xxl"
					}), _react2.default.createElement("span",
					{
						className: "homWelcome__logo"
					}, _react2.default.createElement(_eui.EuiIcon,
					{
						type: "logoKibana",
						size: "xxl"
					})), _react2.default.createElement(_eui.EuiTitle,
					{
						size: "l",
						className: "homWelcome__title"
					}, _react2.default.createElement("h1", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.welcomeTitle",
						defaultMessage: "Welcome to Kibana"
					}))), _react2.default.createElement(_eui.EuiText,
					{
						size: "s",
						color: "subdued",
						className: "homWelcome__subtitle"
					}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.welcomeDescription",
						defaultMessage: "Your window into the Elastic Stack"
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "xl"
					}))), _react2.default.createElement("div",
					{
						className: "homWelcome__content homWelcome-body"
					}, _react2.default.createElement(_eui.EuiFlexGroup,
					{
						gutterSize: "l"
					}, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiCard,
					{
						image: urlBasePath + "/plugins/kibana/assets/illo_dashboard.png",
						textAlign: "left",
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.letsStartTitle",
							defaultMessage: "Let's get started"
						}),
						description: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.letsStartDescription",
							defaultMessage: "We noticed that you don't have any data in your cluster.\nYou can try our sample data and dashboards or jump in with your own data."
						}),
						footer: _react2.default.createElement("footer", null, _react2.default.createElement(_eui.EuiButton,
						{
							fill: true,
							className: "homWelcome__footerAction",
							href: "#/home/tutorial_directory/sampleData"
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.tryButtonLabel",
							defaultMessage: "Try our sample data"
						})), _react2.default.createElement(_eui.EuiButtonEmpty,
						{
							className: "homWelcome__footerAction",
							onClick: onSkip,
							"data-test-subj": "skipWelcomeScreen"
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.exploreButtonLabel",
							defaultMessage: "Explore on my own"
						})))
					})))))
				}
			}]);
			return Welcome
		}(_react2.default.Component);
		Welcome.propTypes = {
			urlBasePath: _propTypes2.default.string.isRequired,
			onSkip: _propTypes2.default.func.isRequired
		}
	},
	5443: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.FeatureDirectory = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _synopsis = __webpack_require__(961);
		var _eui = __webpack_require__(3);
		var _feature_catalogue = __webpack_require__(79);
		var _i18n = __webpack_require__(12);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var ALL_TAB_ID = "all";
		var OTHERS_TAB_ID = "others";
		var isOtherCategory = function isOtherCategory(directory)
		{
			return directory.category !== _feature_catalogue.FeatureCatalogueCategory.DATA && directory.category !== _feature_catalogue.FeatureCatalogueCategory.ADMIN
		};
		var FeatureDirectory = exports.FeatureDirectory = function (_React$Component)
		{
			_inherits(FeatureDirectory, _React$Component);

			function FeatureDirectory(props)
			{
				_classCallCheck(this, FeatureDirectory);
				var _this = _possibleConstructorReturn(this, (FeatureDirectory.__proto__ || Object.getPrototypeOf(FeatureDirectory)).call(this, props));
				_this.onSelectedTabChanged = function (id)
				{
					_this.setState(
					{
						selectedTabId: id
					})
				};
				_this.renderTabs = function ()
				{
					return _this.tabs.map(function (tab, index)
					{
						return _react2.default.createElement(_eui.EuiTab,
						{
							onClick: function onClick()
							{
								return _this.onSelectedTabChanged(tab.id)
							},
							isSelected: tab.id === _this.state.selectedTabId,
							key: index
						}, tab.name)
					})
				};
				_this.renderDirectories = function ()
				{
					return _this.props.directories.filter(function (directory)
					{
						if (_this.state.selectedTabId === ALL_TAB_ID) return true;
						if (_this.state.selectedTabId === OTHERS_TAB_ID) return isOtherCategory(directory);
						return _this.state.selectedTabId === directory.category
					}).map(function (directory)
					{
						return _react2.default.createElement(_eui.EuiFlexItem,
						{
							key: directory.id
						}, _react2.default.createElement(_synopsis.Synopsis,
						{
							description: directory.description,
							iconType: directory.icon,
							title: directory.title,
							url: _this.props.addBasePath(directory.path),
							wrapInPanel: true
						}))
					})
				};
				_this.tabs = [
				{
					id: ALL_TAB_ID,
					name: _i18n.i18n.translate("kbn.home.directory.tabs.allTitle",
					{
						defaultMessage: "All"
					})
				},
				{
					id: _feature_catalogue.FeatureCatalogueCategory.DATA,
					name: _i18n.i18n.translate("kbn.home.directory.tabs.dataTitle",
					{
						defaultMessage: "Data Exploration & Visualization"
					})
				},
				{
					id: _feature_catalogue.FeatureCatalogueCategory.ADMIN,
					name: _i18n.i18n.translate("kbn.home.directory.tabs.administrativeTitle",
					{
						defaultMessage: "Administrative"
					})
				}];
				props.directories.some(isOtherCategory) && _this.tabs.push(
				{
					id: OTHERS_TAB_ID,
					name: _i18n.i18n.translate("kbn.home.directory.tabs.otherTitle",
					{
						defaultMessage: "Other"
					})
				});
				_this.state = {
					selectedTabId: ALL_TAB_ID
				};
				return _this
			}
			_createClass(FeatureDirectory, [
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement(_eui.EuiPage,
					{
						className: "homPage"
					}, _react2.default.createElement(_eui.EuiPageBody, null, _react2.default.createElement(_eui.EuiTitle,
					{
						size: "l"
					}, _react2.default.createElement("h1", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.directory.directoryTitle",
						defaultMessage: "Directory"
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_eui.EuiTabs,
					{
						className: "homeDirectoryTabs"
					}, this.renderTabs()), _react2.default.createElement(_eui.EuiSpacer, null), _react2.default.createElement(_eui.EuiFlexGrid,
					{
						columns: 4
					}, this.renderDirectories())))
				}
			}]);
			return FeatureDirectory
		}(_react2.default.Component);
		FeatureDirectory.propTypes = {
			addBasePath: _propTypes2.default.func.isRequired,
			directories: _propTypes2.default.arrayOf(_propTypes2.default.shape(
			{
				id: _propTypes2.default.string.isRequired,
				title: _propTypes2.default.string.isRequired,
				description: _propTypes2.default.string.isRequired,
				icon: _propTypes2.default.string.isRequired,
				path: _propTypes2.default.string.isRequired,
				showOnHomePage: _propTypes2.default.bool.isRequired,
				category: _propTypes2.default.string.isRequired
			}))
		}
	},
	5444: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.TutorialDirectory = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _synopsis = __webpack_require__(961);
		var _sample_data_set_cards = __webpack_require__(5445);
		var _eui = __webpack_require__(3);
		var _load_tutorials = __webpack_require__(1720);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var ALL_TAB_ID = "all";
		var SAMPLE_DATA_TAB_ID = "sampleData";
		var TutorialDirectoryUi = function (_React$Component)
		{
			_inherits(TutorialDirectoryUi, _React$Component);

			function TutorialDirectoryUi(props)
			{
				_classCallCheck(this, TutorialDirectoryUi);
				var _this = _possibleConstructorReturn(this, (TutorialDirectoryUi.__proto__ || Object.getPrototypeOf(TutorialDirectoryUi)).call(this, props));
				_this.onSelectedTabChanged = function (id)
				{
					_this.setState(
					{
						selectedTabId: id
					})
				};
				_this.renderTabs = function ()
				{
					return _this.tabs.map(function (tab, index)
					{
						return _react2.default.createElement(_eui.EuiTab,
						{
							onClick: function onClick()
							{
								return _this.onSelectedTabChanged(tab.id)
							},
							isSelected: tab.id === _this.state.selectedTabId,
							key: index
						}, tab.name)
					})
				};
				_this.renderTabContent = function ()
				{
					if (_this.state.selectedTabId === SAMPLE_DATA_TAB_ID) return _react2.default.createElement(_sample_data_set_cards.SampleDataSetCards,
					{
						addBasePath: _this.props.addBasePath
					});
					return _react2.default.createElement(_eui.EuiFlexGrid,
					{
						columns: 4
					}, _this.state.tutorialCards.filter(function (tutorial)
					{
						return _this.state.selectedTabId === ALL_TAB_ID || _this.state.selectedTabId === tutorial.category
					}).map(function (tutorial)
					{
						return _react2.default.createElement(_eui.EuiFlexItem,
						{
							key: tutorial.name
						}, _react2.default.createElement(_synopsis.Synopsis,
						{
							iconType: tutorial.icon,
							description: tutorial.description,
							title: tutorial.name,
							wrapInPanel: true,
							url: tutorial.url,
							onClick: tutorial.onClick,
							isBeta: tutorial.isBeta
						}))
					}))
				};
				_this.tabs = [
				{
					id: ALL_TAB_ID,
					name: _this.props.intl.formatMessage(
					{
						id: "kbn.home.tutorial.tabs.allTitle",
						defaultMessage: "All"
					})
				},
				{
					id: "logging",
					name: _this.props.intl.formatMessage(
					{
						id: "kbn.home.tutorial.tabs.loggingTitle",
						defaultMessage: "Logging"
					})
				},
				{
					id: "metrics",
					name: _this.props.intl.formatMessage(
					{
						id: "kbn.home.tutorial.tabs.metricsTitle",
						defaultMessage: "Metrics"
					})
				},
				{
					id: "security",
					name: _this.props.intl.formatMessage(
					{
						id: "kbn.home.tutorial.tabs.securityAnalyticsTitle",
						defaultMessage: "Security analytics"
					})
				},
				{
					id: SAMPLE_DATA_TAB_ID,
					name: _this.props.intl.formatMessage(
					{
						id: "kbn.home.tutorial.tabs.sampleDataTitle",
						defaultMessage: "Sample data"
					})
				}];
				var openTab = ALL_TAB_ID;
				props.openTab && _this.tabs.some(function (tab)
				{
					return tab.id === props.openTab
				}) && (openTab = props.openTab);
				_this.state = {
					selectedTabId: openTab,
					tutorialCards: []
				};
				return _this
			}
			_createClass(TutorialDirectoryUi, [
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this._isMounted = false
				}
			},
			{
				key: "componentDidMount",
				value: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
					{
						var _this2 = this;
						var tutorialConfigs, tutorialCards;
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								this._isMounted = true;
								_context.next = 3;
								return (0, _load_tutorials.getTutorials)();
							case 3:
								tutorialConfigs = _context.sent;
								if (this._isMounted)
								{
									_context.next = 6;
									break
								}
								return _context.abrupt("return");
							case 6:
								tutorialCards = tutorialConfigs.map(function (tutorialConfig)
								{
									return {
										category: tutorialConfig.category,
										icon: tutorialConfig.euiIconType,
										name: tutorialConfig.name,
										description: tutorialConfig.shortDescription,
										url: _this2.props.addBasePath("#/home/tutorial/" + tutorialConfig.id),
										elasticCloud: tutorialConfig.elasticCloud
									}
								});
								tutorialCards.push(
								{
									name: this.props.intl.formatMessage(
									{
										id: "kbn.home.tutorial.card.sampleDataTitle",
										defaultMessage: "Sample Data"
									}),
									description: this.props.intl.formatMessage(
									{
										id: "kbn.home.tutorial.card.sampleDataDescription",
										defaultMessage: 'Get started exploring Kibana with these "one click" data sets.'
									}),
									url: this.props.addBasePath("#/home/tutorial_directory/sampleData"),
									elasticCloud: true,
									onClick: this.onSelectedTabChanged.bind(null, SAMPLE_DATA_TAB_ID)
								});
								this.props.isCloudEnabled && (tutorialCards = tutorialCards.filter(function (tutorial)
								{
									return _lodash2.default.has(tutorial, "elasticCloud")
								}));
								tutorialCards.sort(function (a, b)
								{
									return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
								});
								this.setState(
								{
									tutorialCards: tutorialCards
								});
							case 11:
							case "end":
								return _context.stop()
							}
						}, _callee, this)
					}));

					function componentDidMount()
					{
						return _ref.apply(this, arguments)
					}
					return componentDidMount
				}()
			},
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement(_eui.EuiPage,
					{
						className: "homPage"
					}, _react2.default.createElement(_eui.EuiPageBody, null, _react2.default.createElement("a",
					{
						className: "kuiLink",
						href: "#/home"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.tutorial.homeTitle",
						defaultMessage: "Home"
					})), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement(_eui.EuiTitle,
					{
						size: "l"
					}, _react2.default.createElement("h1", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.tutorial.addDataTitle",
						defaultMessage: "Add Data to Kibana"
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_eui.EuiTabs, null, this.renderTabs()), _react2.default.createElement(_eui.EuiSpacer, null), this.renderTabContent()))
				}
			}]);
			return TutorialDirectoryUi
		}(_react2.default.Component);
		TutorialDirectoryUi.propTypes = {
			addBasePath: _propTypes2.default.func.isRequired,
			openTab: _propTypes2.default.string,
			isCloudEnabled: _propTypes2.default.bool.isRequired
		};
		exports.TutorialDirectory = (0, _react3.injectI18n)(TutorialDirectoryUi)
	},
	5445: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.SampleDataSetCards = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _sample_data_set_card = __webpack_require__(5446);
		var _notify = __webpack_require__(10);
		var _sample_data_client = __webpack_require__(5447);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var SampleDataSetCards = exports.SampleDataSetCards = function (_React$Component)
		{
			_inherits(SampleDataSetCards, _React$Component);

			function SampleDataSetCards(props)
			{
				var _this2 = this;
				_classCallCheck(this, SampleDataSetCards);
				var _this = _possibleConstructorReturn(this, (SampleDataSetCards.__proto__ || Object.getPrototypeOf(SampleDataSetCards)).call(this, props));
				_this.loadSampleDataSets = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var sampleDataSets;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							sampleDataSets = void 0;
							_context.prev = 1;
							_context.next = 4;
							return (0, _sample_data_client.listSampleDataSets)();
						case 4:
							sampleDataSets = _context.sent;
							_context.next = 11;
							break;
						case 7:
							_context.prev = 7;
							_context.t0 = _context["catch"](1);
							_notify.toastNotifications.addDanger(
							{
								title: _i18n.i18n.translate("kbn.home.sampleDataSet.unableToLoadListErrorMessage",
								{
									defaultMessage: "Unable to load sample data sets list"
								}),
								text: "" + _context.t0.message
							});
							sampleDataSets = [];
						case 11:
							if (_this._isMounted)
							{
								_context.next = 13;
								break
							}
							return _context.abrupt("return");
						case 13:
							_this.setState(
							{
								sampleDataSets: sampleDataSets.sort(function (a, b)
								{
									return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
								}),
								processingStatus:
								{}
							});
						case 14:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2, [
						[1, 7]
					])
				}));
				_this.install = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id)
				{
					var targetSampleDataSet;
					return regeneratorRuntime.wrap(function _callee2$(_context2)
					{
						while (1) switch (_context2.prev = _context2.next)
						{
						case 0:
							targetSampleDataSet = _this.state.sampleDataSets.find(function (sampleDataSet)
							{
								return sampleDataSet.id === id
							});
							_this.setState(function (prevState)
							{
								return {
									processingStatus: _extends(
									{}, prevState.processingStatus, _defineProperty(
									{}, id, true))
								}
							});
							_context2.prev = 2;
							_context2.next = 5;
							return (0, _sample_data_client.installSampleDataSet)(id, targetSampleDataSet.defaultIndex);
						case 5:
							_context2.next = 12;
							break;
						case 7:
							_context2.prev = 7;
							_context2.t0 = _context2["catch"](2);
							_this._isMounted && _this.setState(function (prevState)
							{
								return {
									processingStatus: _extends(
									{}, prevState.processingStatus, _defineProperty(
									{}, id, false))
								}
							});
							_notify.toastNotifications.addDanger(
							{
								title: _i18n.i18n.translate("kbn.home.sampleDataSet.unableToInstallErrorMessage",
								{
									defaultMessage: "Unable to install sample data set: {name}",
									values:
									{
										name: targetSampleDataSet.name
									}
								}),
								text: "" + _context2.t0.message
							});
							return _context2.abrupt("return");
						case 12:
							_this._isMounted && _this.setState(function (prevState)
							{
								return {
									processingStatus: _extends(
									{}, prevState.processingStatus, _defineProperty(
									{}, id, false)),
									sampleDataSets: prevState.sampleDataSets.map(function (sampleDataSet)
									{
										sampleDataSet.id === id && (sampleDataSet.status = _sample_data_set_card.INSTALLED_STATUS);
										return sampleDataSet
									})
								}
							});
							_notify.toastNotifications.addSuccess(_defineProperty(
							{
								title: _i18n.i18n.translate("kbn.home.sampleDataSet.installedLabel",
								{
									defaultMessage: "{name} installed",
									values:
									{
										name: targetSampleDataSet.name
									}
								})
							}, "data-test-subj", "sampleDataSetInstallToast"));
						case 14:
						case "end":
							return _context2.stop()
						}
					}, _callee2, _this2, [
						[2, 7]
					])
				})), function (_x)
				{
					return _ref2.apply(this, arguments)
				});
				var _ref2;
				_this.uninstall = (_ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id)
				{
					var targetSampleDataSet;
					return regeneratorRuntime.wrap(function _callee3$(_context3)
					{
						while (1) switch (_context3.prev = _context3.next)
						{
						case 0:
							targetSampleDataSet = _this.state.sampleDataSets.find(function (sampleDataSet)
							{
								return sampleDataSet.id === id
							});
							_this.setState(function (prevState)
							{
								return {
									processingStatus: _extends(
									{}, prevState.processingStatus, _defineProperty(
									{}, id, true))
								}
							});
							_context3.prev = 2;
							_context3.next = 5;
							return (0, _sample_data_client.uninstallSampleDataSet)(id, targetSampleDataSet.defaultIndex);
						case 5:
							_context3.next = 12;
							break;
						case 7:
							_context3.prev = 7;
							_context3.t0 = _context3["catch"](2);
							_this._isMounted && _this.setState(function (prevState)
							{
								return {
									processingStatus: _extends(
									{}, prevState.processingStatus, _defineProperty(
									{}, id, false))
								}
							});
							_notify.toastNotifications.addDanger(
							{
								title: _i18n.i18n.translate("kbn.home.sampleDataSet.unableToUninstallErrorMessage",
								{
									defaultMessage: "Unable to uninstall sample data set: {name}",
									values:
									{
										name: targetSampleDataSet.name
									}
								}),
								text: "" + _context3.t0.message
							});
							return _context3.abrupt("return");
						case 12:
							_this._isMounted && _this.setState(function (prevState)
							{
								return {
									processingStatus: _extends(
									{}, prevState.processingStatus, _defineProperty(
									{}, id, false)),
									sampleDataSets: prevState.sampleDataSets.map(function (sampleDataSet)
									{
										sampleDataSet.id === id && (sampleDataSet.status = _sample_data_set_card.UNINSTALLED_STATUS);
										return sampleDataSet
									})
								}
							});
							_notify.toastNotifications.addSuccess(_defineProperty(
							{
								title: _i18n.i18n.translate("kbn.home.sampleDataSet.uninstalledLabel",
								{
									defaultMessage: "{name} uninstalled",
									values:
									{
										name: targetSampleDataSet.name
									}
								})
							}, "data-test-subj", "sampleDataSetUninstallToast"));
						case 14:
						case "end":
							return _context3.stop()
						}
					}, _callee3, _this2, [
						[2, 7]
					])
				})), function (_x2)
				{
					return _ref3.apply(this, arguments)
				});
				var _ref3;
				_this.state = {
					sampleDataSets: [],
					processingStatus:
					{}
				};
				return _this
			}
			_createClass(SampleDataSetCards, [
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this._isMounted = false
				}
			},
			{
				key: "componentDidMount",
				value: function ()
				{
					var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4()
					{
						return regeneratorRuntime.wrap(function _callee4$(_context4)
						{
							while (1) switch (_context4.prev = _context4.next)
							{
							case 0:
								this._isMounted = true;
								this.loadSampleDataSets();
							case 2:
							case "end":
								return _context4.stop()
							}
						}, _callee4, this)
					}));

					function componentDidMount()
					{
						return _ref4.apply(this, arguments)
					}
					return componentDidMount
				}()
			},
			{
				key: "render",
				value: function render()
				{
					var _this3 = this;
					return _react2.default.createElement(_eui.EuiFlexGrid,
					{
						columns: 4
					}, this.state.sampleDataSets.map(function (sampleDataSet)
					{
						return _react2.default.createElement(_eui.EuiFlexItem,
						{
							key: sampleDataSet.id
						}, _react2.default.createElement(_sample_data_set_card.SampleDataSetCard,
						{
							id: sampleDataSet.id,
							description: sampleDataSet.description,
							name: sampleDataSet.name,
							launchUrl: _this3.props.addBasePath("/app/kibana#/dashboard/" + sampleDataSet.overviewDashboard),
							status: sampleDataSet.status,
							isProcessing: _lodash2.default.get(_this3.state.processingStatus, sampleDataSet.id, false),
							statusMsg: sampleDataSet.statusMsg,
							previewUrl: _this3.props.addBasePath(sampleDataSet.previewImagePath),
							onInstall: _this3.install,
							onUninstall: _this3.uninstall
						}))
					}))
				}
			}]);
			return SampleDataSetCards
		}(_react2.default.Component);
		SampleDataSetCards.propTypes = {
			addBasePath: _propTypes2.default.func.isRequired
		}
	},
	5446: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.SampleDataSetCard = exports.UNINSTALLED_STATUS = exports.INSTALLED_STATUS = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var INSTALLED_STATUS = exports.INSTALLED_STATUS = "installed";
		var UNINSTALLED_STATUS = exports.UNINSTALLED_STATUS = "not_installed";
		var SampleDataSetCard = exports.SampleDataSetCard = function (_React$Component)
		{
			_inherits(SampleDataSetCard, _React$Component);

			function SampleDataSetCard()
			{
				var _ref;
				var _temp, _this, _ret;
				_classCallCheck(this, SampleDataSetCard);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SampleDataSetCard.__proto__ || Object.getPrototypeOf(SampleDataSetCard)).call.apply(_ref, [this].concat(args))), _this), _this.isInstalled = function ()
				{
					if (_this.props.status === INSTALLED_STATUS) return true;
					return false
				}, _this.install = function ()
				{
					_this.props.onInstall(_this.props.id)
				}, _this.uninstall = function ()
				{
					_this.props.onUninstall(_this.props.id)
				}, _this.renderBtn = function ()
				{
					switch (_this.props.status)
					{
					case INSTALLED_STATUS:
						return _react2.default.createElement(_eui.EuiFlexGroup,
						{
							justifyContent: "spaceBetween"
						}, _react2.default.createElement(_eui.EuiFlexItem,
						{
							grow: false
						}, _react2.default.createElement(_eui.EuiButtonEmpty,
						{
							isLoading: _this.props.isProcessing,
							onClick: _this.uninstall,
							color: "danger",
							"data-test-subj": "removeSampleDataSet" + _this.props.id
						}, _this.props.isProcessing ? _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.sampleDataSetCard.removingButtonLabel",
							defaultMessage: "Removing"
						}) : _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.sampleDataSetCard.removeButtonLabel",
							defaultMessage: "Remove"
						}))), _react2.default.createElement(_eui.EuiFlexItem,
						{
							grow: false
						}, _react2.default.createElement(_eui.EuiButton,
						{
							href: _this.props.launchUrl,
							"data-test-subj": "launchSampleDataSet" + _this.props.id
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.sampleDataSetCard.viewDataButtonLabel",
							defaultMessage: "View data"
						}))));
					case UNINSTALLED_STATUS:
						return _react2.default.createElement(_eui.EuiFlexGroup,
						{
							justifyContent: "flexEnd"
						}, _react2.default.createElement(_eui.EuiFlexItem,
						{
							grow: false
						}, _react2.default.createElement(_eui.EuiButton,
						{
							isLoading: _this.props.isProcessing,
							onClick: _this.install,
							"data-test-subj": "addSampleDataSet" + _this.props.id
						}, _this.props.isProcessing ? _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.sampleDataSetCard.addingButtonLabel",
							defaultMessage: "Adding"
						}) : _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.sampleDataSetCard.addButtonLabel",
							defaultMessage: "Add"
						}))));
					default:
						return _react2.default.createElement(_eui.EuiFlexGroup,
						{
							justifyContent: "flexEnd"
						}, _react2.default.createElement(_eui.EuiFlexItem,
						{
							grow: false
						}, _react2.default.createElement(_eui.EuiToolTip,
						{
							position: "top",
							content: _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.home.sampleDataSetCard.default.unableToVerifyErrorMessage",
								defaultMessage: "Unable to verify dataset status, error: {statusMsg}",
								values:
								{
									statusMsg: _this.props.statusMsg
								}
							}))
						}, _react2.default.createElement(_eui.EuiButton,
						{
							isDisabled: true,
							"data-test-subj": "addSampleDataSet" + _this.props.id
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.sampleDataSetCard.default.addButtonLabel",
							defaultMessage: "Add"
						})))))
					}
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(SampleDataSetCard, [
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement(_eui.EuiCard,
					{
						className: "homSampleDataSetCard",
						image: this.props.previewUrl,
						title: this.props.name,
						description: this.props.description,
						betaBadgeLabel: this.isInstalled() ? "INSTALLED" : null,
						footer: this.renderBtn(),
						"data-test-subj": "sampleDataSetCard" + this.props.id
					})
				}
			}]);
			return SampleDataSetCard
		}(_react2.default.Component);
		SampleDataSetCard.propTypes = {
			id: _propTypes2.default.string.isRequired,
			description: _propTypes2.default.string.isRequired,
			name: _propTypes2.default.string.isRequired,
			launchUrl: _propTypes2.default.string.isRequired,
			status: _propTypes2.default.oneOf([INSTALLED_STATUS, UNINSTALLED_STATUS, "unknown"]).isRequired,
			isProcessing: _propTypes2.default.bool.isRequired,
			statusMsg: _propTypes2.default.string,
			previewUrl: _propTypes2.default.string.isRequired,
			onInstall: _propTypes2.default.func.isRequired,
			onUninstall: _propTypes2.default.func.isRequired
		}
	},
	5447: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.uninstallSampleDataSet = exports.installSampleDataSet = exports.listSampleDataSets = void 0;
		exports.listSampleDataSets = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
		{
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					_context.next = 2;
					return (0, _kfetch.kfetch)(
					{
						method: "GET",
						pathname: sampleDataUrl
					});
				case 2:
					return _context.abrupt("return", _context.sent);
				case 3:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function listSampleDataSets()
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		exports.installSampleDataSet = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id, sampleDataDefaultIndex)
		{
			return regeneratorRuntime.wrap(function _callee2$(_context2)
			{
				while (1) switch (_context2.prev = _context2.next)
				{
				case 0:
					_context2.next = 2;
					return (0, _kfetch.kfetch)(
					{
						method: "POST",
						pathname: sampleDataUrl + "/" + id
					});
				case 2:
					_chrome2.default.getUiSettingsClient().isDefault("defaultIndex") && _chrome2.default.getUiSettingsClient().set("defaultIndex", sampleDataDefaultIndex);
					clearIndexPatternsCache();
				case 4:
				case "end":
					return _context2.stop()
				}
			}, _callee2, this)
		})), function installSampleDataSet(_x, _x2)
		{
			return _ref2.apply(this, arguments)
		});
		var _ref2;
		exports.uninstallSampleDataSet = (_ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id, sampleDataDefaultIndex)
		{
			return regeneratorRuntime.wrap(function _callee3$(_context3)
			{
				while (1) switch (_context3.prev = _context3.next)
				{
				case 0:
					_context3.next = 2;
					return (0, _kfetch.kfetch)(
					{
						method: "DELETE",
						pathname: sampleDataUrl + "/" + id
					});
				case 2:
					_chrome2.default.getUiSettingsClient().isDefault("defaultIndex") || _chrome2.default.getUiSettingsClient().get("defaultIndex") !== sampleDataDefaultIndex || _chrome2.default.getUiSettingsClient().set("defaultIndex", null);
					clearIndexPatternsCache();
				case 4:
				case "end":
					return _context3.stop()
				}
			}, _callee3, this)
		})), function uninstallSampleDataSet(_x3, _x4)
		{
			return _ref3.apply(this, arguments)
		});
		var _ref3;
		var _kfetch = __webpack_require__(149);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _kibana_services = __webpack_require__(5448);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var sampleDataUrl = "/api/sample_data";

		function clearIndexPatternsCache()
		{
			_kibana_services.indexPatternService.getIds.clearCache()
		}
	},
	5448: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.indexPatternService = void 0;
		var _modules = __webpack_require__(2);
		exports.indexPatternService = void 0;
		_modules.uiModules.get("kibana").run(function ($injector)
		{
			exports.indexPatternService = $injector.get("indexPatterns")
		})
	},
	5449: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Tutorial = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _footer = __webpack_require__(5450);
		var _introduction = __webpack_require__(5451);
		var _instruction_set = __webpack_require__(5452);
		var _saved_objects_installer = __webpack_require__(5458);
		var _eui = __webpack_require__(3);
		var _status_check_states = __webpack_require__(1721);
		var StatusCheckStates = _interopRequireWildcard(_status_check_states);
		var _react3 = __webpack_require__(8);

		function _interopRequireWildcard(obj)
		{
			if (obj && obj.__esModule) return obj;
			var newObj = {};
			if (null != obj)
				for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
			newObj.default = obj;
			return newObj
		}

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var INSTRUCTIONS_TYPE = {
			ELASTIC_CLOUD: "elasticCloud",
			ON_PREM: "onPrem",
			ON_PREM_ELASTIC_CLOUD: "onPremElasticCloud"
		};
		var TutorialUi = function (_React$Component)
		{
			_inherits(TutorialUi, _React$Component);

			function TutorialUi(props)
			{
				var _this2 = this;
				_classCallCheck(this, TutorialUi);
				var _this = _possibleConstructorReturn(this, (TutorialUi.__proto__ || Object.getPrototypeOf(TutorialUi)).call(this, props));
				_this.getInstructions = function ()
				{
					if (!_this.state.tutorial) return {
						instructionSets: []
					};
					switch (_this.state.visibleInstructions)
					{
					case INSTRUCTIONS_TYPE.ELASTIC_CLOUD:
						return _this.state.tutorial.elasticCloud;
					case INSTRUCTIONS_TYPE.ON_PREM:
						return _this.state.tutorial.onPrem;
					case INSTRUCTIONS_TYPE.ON_PREM_ELASTIC_CLOUD:
						return _this.state.tutorial.onPremElasticCloud;
					default:
						throw new Error("Unhandled instruction type " + _this.state.visibleInstructions)
					}
				};
				_this.getInstructionSets = function ()
				{
					return _this.getInstructions().instructionSets
				};
				_this.initInstructionsState = function ()
				{
					var instructions = _this.getInstructions();
					var paramValues = {};
					instructions.params && instructions.params.forEach(function (param)
					{
						paramValues[param.id] = param.defaultValue
					});
					var statusCheckStates = new Array(instructions.instructionSets.length).fill(StatusCheckStates.NOT_CHECKED);
					_this.setState(
					{
						paramValues: paramValues,
						statusCheckStates: statusCheckStates
					})
				};
				_this.setVisibleInstructions = function (instructionsType)
				{
					_this.setState(
					{
						visibleInstructions: instructionsType
					}, _this.initInstructionsState)
				};
				_this.setParameter = function (paramId, newValue)
				{
					_this.setState(function (previousState)
					{
						var paramValues = _lodash2.default.cloneDeep(previousState.paramValues);
						paramValues[paramId] = newValue;
						return {
							paramValues: paramValues
						}
					})
				};
				_this.checkInstructionSetStatus = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(instructionSetIndex)
				{
					var instructionSet, esHitsCheckConfig, statusCheckState;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							instructionSet = _this.getInstructionSets()[instructionSetIndex];
							esHitsCheckConfig = _lodash2.default.get(instructionSet, "statusCheck.esHitsCheck");
							if (!esHitsCheckConfig)
							{
								_context.next = 7;
								break
							}
							_context.next = 5;
							return _this.fetchEsHitsStatus(esHitsCheckConfig);
						case 5:
							statusCheckState = _context.sent;
							_this.setState(function (prevState)
							{
								return {
									statusCheckStates: _extends(
									{}, prevState.statusCheckStates, _defineProperty(
									{}, instructionSetIndex, statusCheckState))
								}
							});
						case 7:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2)
				})), function (_x)
				{
					return _ref.apply(this, arguments)
				});
				var _ref;
				_this.fetchEsHitsStatus = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(esHitsCheckConfig)
				{
					var searchHeader, searchBody, response, results, numHits;
					return regeneratorRuntime.wrap(function _callee2$(_context2)
					{
						while (1) switch (_context2.prev = _context2.next)
						{
						case 0:
							searchHeader = JSON.stringify(
							{
								index: esHitsCheckConfig.index
							});
							searchBody = JSON.stringify(
							{
								query: esHitsCheckConfig.query,
								size: 1
							});
							_context2.next = 4;
							return fetch(_this.props.addBasePath("/elasticsearch/_msearch"),
							{
								method: "post",
								body: searchHeader + "\n" + searchBody + "\n",
								headers:
								{
									accept: "application/json",
									"content-type": "application/x-ndjson",
									"kbn-xsrf": "kibana"
								},
								credentials: "same-origin"
							});
						case 4:
							response = _context2.sent;
							if (!(response.status > 300))
							{
								_context2.next = 7;
								break
							}
							return _context2.abrupt("return", StatusCheckStates.ERROR);
						case 7:
							_context2.next = 9;
							return response.json();
						case 9:
							results = _context2.sent;
							numHits = _lodash2.default.get(results, "responses.[0].hits.hits.length", 0);
							return _context2.abrupt("return", 0 === numHits ? StatusCheckStates.NO_DATA : StatusCheckStates.HAS_DATA);
						case 12:
						case "end":
							return _context2.stop()
						}
					}, _callee2, _this2)
				})), function (_x2)
				{
					return _ref2.apply(this, arguments)
				});
				var _ref2;
				_this.renderInstructionSetsToggle = function ()
				{
					if (!_this.props.isCloudEnabled && _this.state.tutorial.onPremElasticCloud)
					{
						var selfManagedLabel = _this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.selfManagedButtonLabel",
							defaultMessage: "Self managed"
						});
						var cloudLabel = _this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.elasticCloudButtonLabel",
							defaultMessage: "Elastic Cloud"
						});
						var radioButtons = [
						{
							id: INSTRUCTIONS_TYPE.ON_PREM,
							label: selfManagedLabel
						},
						{
							id: INSTRUCTIONS_TYPE.ON_PREM_ELASTIC_CLOUD,
							label: cloudLabel
						}];
						return _react2.default.createElement(_eui.EuiFlexGroup,
						{
							justifyContent: "center"
						}, _react2.default.createElement(_eui.EuiFlexItem,
						{
							grow: false
						}, _react2.default.createElement(_eui.EuiButtonGroup,
						{
							options: radioButtons,
							idSelected: _this.state.visibleInstructions,
							onChange: _this.setVisibleInstructions,
							color: "primary"
						})))
					}
				};
				_this.onStatusCheck = function (instructionSetIndex)
				{
					_this.setState(function (prevState)
					{
						return {
							statusCheckStates: _extends(
							{}, prevState.statusCheckStates, _defineProperty(
							{}, instructionSetIndex, StatusCheckStates.FETCHING))
						}
					}, _this.checkInstructionSetStatus.bind(null, instructionSetIndex))
				};
				_this.renderInstructionSets = function (instructions)
				{
					var offset = 1;
					return instructions.instructionSets.map(function (instructionSet, index)
					{
						var currentOffset = offset;
						offset += instructionSet.instructionVariants[0].instructions.length;
						return _react2.default.createElement(_instruction_set.InstructionSet,
						{
							title: instructionSet.title,
							instructionVariants: instructionSet.instructionVariants,
							statusCheckConfig: instructionSet.statusCheck,
							statusCheckState: _this.state.statusCheckStates[index],
							onStatusCheck: function onStatusCheck()
							{
								_this.onStatusCheck(index)
							},
							offset: currentOffset,
							params: instructions.params,
							paramValues: _this.state.paramValues,
							setParameter: _this.setParameter,
							replaceTemplateStrings: _this.props.replaceTemplateStrings,
							key: index
						})
					})
				};
				_this.renderSavedObjectsInstaller = function ()
				{
					if (!_this.state.tutorial.savedObjects) return;
					return _react2.default.createElement(_saved_objects_installer.SavedObjectsInstaller,
					{
						bulkCreate: _this.props.bulkCreate,
						savedObjects: _this.state.tutorial.savedObjects,
						installMsg: _this.state.tutorial.savedObjectsInstallMsg
					})
				};
				_this.renderFooter = function ()
				{
					var label = void 0;
					var url = void 0;
					if (_lodash2.default.has(_this.state, "tutorial.artifacts.application"))
					{
						label = _this.state.tutorial.artifacts.application.label;
						url = _this.props.addBasePath(_this.state.tutorial.artifacts.application.path)
					}
					else if (_lodash2.default.has(_this.state, "tutorial.artifacts.dashboards"))
					{
						var overviewDashboard = _this.state.tutorial.artifacts.dashboards.find(function (dashboard)
						{
							return dashboard.isOverview
						});
						if (overviewDashboard)
						{
							label = overviewDashboard.linkLabel;
							url = _this.props.addBasePath("/app/kibana#/dashboard/" + overviewDashboard.id)
						}
					}
					if (url && label) return _react2.default.createElement(_footer.Footer,
					{
						label: label,
						url: url
					})
				};
				_this.state = {
					notFound: false,
					paramValues:
					{},
					statusCheckStates: [],
					tutorial: null
				};
				props.isCloudEnabled ? _this.state.visibleInstructions = INSTRUCTIONS_TYPE.ELASTIC_CLOUD : _this.state.visibleInstructions = INSTRUCTIONS_TYPE.ON_PREM;
				return _this
			}
			_createClass(TutorialUi, [
			{
				key: "componentWillMount",
				value: function componentWillMount()
				{
					this._isMounted = true
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this._isMounted = false
				}
			},
			{
				key: "componentDidMount",
				value: function ()
				{
					var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3()
					{
						var tutorial;
						return regeneratorRuntime.wrap(function _callee3$(_context3)
						{
							while (1) switch (_context3.prev = _context3.next)
							{
							case 0:
								_context3.next = 2;
								return this.props.getTutorial(this.props.tutorialId);
							case 2:
								tutorial = _context3.sent;
								if (this._isMounted)
								{
									_context3.next = 5;
									break
								}
								return _context3.abrupt("return");
							case 5:
								tutorial ? this.setState(
								{
									tutorial: tutorial
								}, this.initInstructionsState) : this.setState(
								{
									notFound: true
								});
							case 6:
							case "end":
								return _context3.stop()
							}
						}, _callee3, this)
					}));

					function componentDidMount()
					{
						return _ref3.apply(this, arguments)
					}
					return componentDidMount
				}()
			},
			{
				key: "render",
				value: function render()
				{
					var content = void 0;
					this.state.notFound && (content = _react2.default.createElement("div",
					{
						className: "homTutorial__notFoundPanel"
					}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.tutorial.noTutorialLabel",
						defaultMessage: "Unable to find tutorial {tutorialId}",
						values:
						{
							tutorialId: this.props.tutorialId
						}
					})))));
					if (this.state.tutorial)
					{
						var previewUrl = void 0;
						this.state.tutorial.previewImagePath && (previewUrl = this.props.addBasePath(this.state.tutorial.previewImagePath));
						var exportedFieldsUrl = void 0;
						_lodash2.default.has(this.state, "tutorial.artifacts.exportedFields") && (exportedFieldsUrl = this.props.replaceTemplateStrings(this.state.tutorial.artifacts.exportedFields.documentationUrl));
						var instructions = this.getInstructions();
						content = _react2.default.createElement("div", null, _react2.default.createElement(_introduction.Introduction,
						{
							title: this.state.tutorial.name,
							description: this.props.replaceTemplateStrings(this.state.tutorial.longDescription),
							previewUrl: previewUrl,
							exportedFieldsUrl: exportedFieldsUrl,
							iconType: this.state.tutorial.euiIconType,
							isBeta: this.state.tutorial.isBeta
						}), _react2.default.createElement(_eui.EuiSpacer, null), _react2.default.createElement("div",
						{
							className: "eui-textCenter"
						}, this.renderInstructionSetsToggle()), _react2.default.createElement(_eui.EuiSpacer, null), _react2.default.createElement(_eui.EuiPanel,
						{
							paddingSize: "l"
						}, this.renderInstructionSets(instructions), this.renderSavedObjectsInstaller(), this.renderFooter()))
					}
					return _react2.default.createElement(_eui.EuiPage,
					{
						className: "homPage"
					}, _react2.default.createElement(_eui.EuiPageBody, null, _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiLink,
					{
						href: "#/home"
					}, "Home"), " / ", _react2.default.createElement(_eui.EuiLink,
					{
						href: "#/home/tutorial_directory"
					}, "Add Data")), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), content))
				}
			}]);
			return TutorialUi
		}(_react2.default.Component);
		TutorialUi.propTypes = {
			addBasePath: _propTypes2.default.func.isRequired,
			isCloudEnabled: _propTypes2.default.bool.isRequired,
			getTutorial: _propTypes2.default.func.isRequired,
			replaceTemplateStrings: _propTypes2.default.func.isRequired,
			tutorialId: _propTypes2.default.string.isRequired,
			bulkCreate: _propTypes2.default.func.isRequired
		};
		exports.Tutorial = (0, _react3.injectI18n)(TutorialUi)
	},
	5450: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Footer = Footer;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function Footer(_ref)
		{
			var url = _ref.url,
				label = _ref.label;
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiHorizontalRule, null), _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "spaceBetween",
				alignItems: "center"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.exploreYourDataDescription",
				defaultMessage: "When all steps are complete, you're ready to explore your data."
			})))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButton,
			{
				fill: true,
				href: url
			}, label))))
		}
		Footer.propTypes = {
			url: _propTypes2.default.string.isRequired,
			label: _propTypes2.default.string.isRequired
		}
	},
	5451: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Introduction = Introduction;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _content = __webpack_require__(962);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function Introduction(_ref)
		{
			var description = _ref.description,
				previewUrl = _ref.previewUrl,
				title = _ref.title,
				exportedFieldsUrl = _ref.exportedFieldsUrl,
				iconType = _ref.iconType,
				isBeta = _ref.isBeta;
			var img = void 0;
			previewUrl && (img = _react2.default.createElement(_eui.EuiImage,
			{
				size: "l",
				hasShadow: true,
				allowFullScreen: true,
				fullScreenIconColor: "dark",
				alt: "screenshot of primary dashboard.",
				url: previewUrl
			}));
			var exportedFields = void 0;
			exportedFieldsUrl && (exportedFields = _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiSpacer, null), _react2.default.createElement(_eui.EuiButton,
			{
				href: exportedFieldsUrl,
				target: "_blank",
				rel: "noopener noreferrer"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.home.tutorial.introduction.viewButtonLabel",
				defaultMessage: "View exported fields"
			}))));
			var icon = void 0;
			iconType && (icon = _react2.default.createElement(_eui.EuiIcon,
			{
				type: iconType,
				size: "xl",
				style:
				{
					marginRight: 16
				}
			}));
			var betaBadge = void 0;
			isBeta && (betaBadge = _react2.default.createElement(_eui.EuiBetaBadge,
			{
				label: "Beta"
			}));
			return _react2.default.createElement(_eui.EuiFlexGroup, null, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiFlexGroup,
			{
				gutterSize: "s",
				alignItems: "center"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, icon), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "l"
			}, _react2.default.createElement("h2", null, title, "  ", betaBadge)))), _react2.default.createElement(_content.Content,
			{
				text: description
			}), exportedFields), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, img))
		}
		Introduction.propTypes = {
			description: _propTypes2.default.string.isRequired,
			title: _propTypes2.default.string.isRequired,
			previewUrl: _propTypes2.default.string,
			exportedFieldsUrl: _propTypes2.default.string,
			iconType: _propTypes2.default.string,
			isBeta: _propTypes2.default.bool
		};
		Introduction.defaultProps = {
			isBeta: false
		}
	},
	5452: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.InstructionSet = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _classnames = __webpack_require__(5);
		var _classnames2 = _interopRequireDefault(_classnames);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _components = __webpack_require__(322);
		var _instruction = __webpack_require__(5453);
		var _parameter_form = __webpack_require__(5454);
		var _content = __webpack_require__(962);
		var _instruction_variant = __webpack_require__(5457);
		var _eui = __webpack_require__(3);
		var _status_check_states = __webpack_require__(1721);
		var StatusCheckStates = _interopRequireWildcard(_status_check_states);
		var _react3 = __webpack_require__(8);

		function _interopRequireWildcard(obj)
		{
			if (obj && obj.__esModule) return obj;
			var newObj = {};
			if (null != obj)
				for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
			newObj.default = obj;
			return newObj
		}

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var InstructionSetUi = function (_React$Component)
		{
			_inherits(InstructionSetUi, _React$Component);

			function InstructionSetUi(props)
			{
				_classCallCheck(this, InstructionSetUi);
				var _this = _possibleConstructorReturn(this, (InstructionSetUi.__proto__ || Object.getPrototypeOf(InstructionSetUi)).call(this, props));
				_this.handleToggleVisibility = function ()
				{
					_this.setState(function (prevState)
					{
						return {
							isParamFormVisible: !prevState.isParamFormVisible
						}
					})
				};
				_this.onSelectedTabChanged = function (id)
				{
					_this.setState(
					{
						selectedTabId: id
					})
				};
				_this.renderTabs = function ()
				{
					return _this.tabs.map(function (tab, index)
					{
						return _react2.default.createElement(_eui.EuiTab,
						{
							onClick: function onClick()
							{
								return _this.onSelectedTabChanged(tab.id)
							},
							isSelected: tab.id === _this.state.selectedTabId,
							key: index
						}, tab.name)
					})
				};
				_this.renderInstructions = function ()
				{
					var instructionVariant = _this.props.instructionVariants.find(function (variant)
					{
						return variant.id === _this.state.selectedTabId
					});
					if (!instructionVariant) return;
					var steps = instructionVariant.instructions.map(function (instruction, index)
					{
						var step = _react2.default.createElement(_instruction.Instruction,
						{
							commands: instruction.commands,
							paramValues: _this.props.paramValues,
							textPre: instruction.textPre,
							textPost: instruction.textPost,
							replaceTemplateStrings: _this.props.replaceTemplateStrings
						});
						return {
							title: instruction.title,
							children: step,
							key: index
						}
					});
					_this.props.statusCheckConfig && steps.push(_this.renderStatusCheck());
					return _react2.default.createElement(_eui.EuiSteps,
					{
						steps: steps,
						firstStepNumber: _this.props.offset
					})
				};
				_this.renderHeader = function ()
				{
					var paramsVisibilityToggle = void 0;
					if (_this.props.params)
					{
						var visibilityToggleClasses = (0, _classnames2.default)("kuiIcon kuiSideBarCollapsibleTitle__caret",
						{
							"fa-caret-right": !_this.state.isParamFormVisible,
							"fa-caret-down": _this.state.isParamFormVisible
						});
						var ariaLabel = _this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.instractionSet.toggleAriaLabel",
							defaultMessage: "toggle command parameters visibility"
						});
						paramsVisibilityToggle = _react2.default.createElement("div",
						{
							className: "kuiSideBarCollapsibleTitle",
							style:
							{
								cursor: "pointer"
							}
						}, _react2.default.createElement("div",
						{
							"aria-label": ariaLabel,
							className: "kuiSideBarCollapsibleTitle__label",
							onClick: _this.handleToggleVisibility
						}, _react2.default.createElement("span",
						{
							className: visibilityToggleClasses
						}), _react2.default.createElement("span",
						{
							className: "kuiSideBarCollapsibleTitle__text"
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.home.tutorial.instractionSet.customizeLabel",
							defaultMessage: "Customize your code snippets"
						}))))
					}
					return _react2.default.createElement(_components.KuiBar,
					{
						className: "kuiVerticalRhythm"
					}, _react2.default.createElement(_components.KuiBarSection, null, _react2.default.createElement("div",
					{
						className: "kuiTitle"
					}, _this.props.title)), _react2.default.createElement(_components.KuiBarSection, null, paramsVisibilityToggle))
				};
				_this.tabs = props.instructionVariants.map(function (variant)
				{
					return {
						id: variant.id,
						name: (0, _instruction_variant.getDisplayText)(variant.id)
					}
				});
				_this.state = {
					isParamFormVisible: false
				};
				_this.tabs.length > 0 && (_this.state.selectedTabId = _this.tabs[0].id);
				return _this
			}
			_createClass(InstructionSetUi, [
			{
				key: "renderStatusCheckMessage",
				value: function renderStatusCheckMessage()
				{
					var message = void 0;
					var color = void 0;
					switch (this.props.statusCheckState)
					{
					case StatusCheckStates.NOT_CHECKED:
					case StatusCheckStates.FETCHING:
						return null;
					case StatusCheckStates.HAS_DATA:
						message = this.props.statusCheckConfig.success ? this.props.statusCheckConfig.success : this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.instractionSet.successLabel",
							defaultMessage: "Success"
						});
						color = "success";
						break;
					case StatusCheckStates.ERROR:
					case StatusCheckStates.NO_DATA:
						message = this.props.statusCheckConfig.error ? this.props.statusCheckConfig.error : this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.instractionSet.noDataLabel",
							defaultMessage: "No data found"
						});
						color = "warning"
					}
					return _react2.default.createElement(_eui.EuiCallOut,
					{
						title: message,
						color: color
					})
				}
			},
			{
				key: "getStepStatus",
				value: function getStepStatus(statusCheckState)
				{
					switch (statusCheckState)
					{
					case void 0:
					case StatusCheckStates.NOT_CHECKED:
					case StatusCheckStates.FETCHING:
						return "incomplete";
					case StatusCheckStates.HAS_DATA:
						return "complete";
					case StatusCheckStates.NO_DATA:
						return "warning";
					case StatusCheckStates.ERROR:
						return "danger";
					default:
						throw new Error("Unexpected status check state " + statusCheckState)
					}
				}
			},
			{
				key: "renderStatusCheck",
				value: function renderStatusCheck()
				{
					var _props = this.props,
						statusCheckState = _props.statusCheckState,
						statusCheckConfig = _props.statusCheckConfig,
						onStatusCheck = _props.onStatusCheck;
					var checkStatusStep = _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "spaceBetween",
						alignItems: "center"
					}, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_content.Content,
					{
						text: statusCheckConfig.text
					})), _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiButton,
					{
						onClick: onStatusCheck,
						isLoading: statusCheckState === StatusCheckStates.FETCHING
					}, statusCheckConfig.btnLabel || _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.tutorial.instractionSet.checkStatusButtonLabel",
						defaultMessage: "Check status"
					})))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), this.renderStatusCheckMessage());
					return {
						title: statusCheckConfig.title || this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.instractionSet.statusCheckTitle",
							defaultMessage: "Status Check"
						}),
						status: this.getStepStatus(statusCheckState),
						children: checkStatusStep,
						key: "checkStatusStep"
					}
				}
			},
			{
				key: "render",
				value: function render()
				{
					var paramsForm = void 0;
					this.props.params && this.state.isParamFormVisible && (paramsForm = _react2.default.createElement(_parameter_form.ParameterForm,
					{
						params: this.props.params,
						paramValues: this.props.paramValues,
						setParameter: this.props.setParameter
					}));
					return _react2.default.createElement("div",
					{
						className: "kuiVerticalRhythmLarge"
					}, this.renderHeader(), paramsForm, _react2.default.createElement(_eui.EuiTabs,
					{
						className: "kuiVerticalRhythm"
					}, this.renderTabs()), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), this.renderInstructions())
				}
			}]);
			return InstructionSetUi
		}(_react2.default.Component);
		var instructionShape = _propTypes2.default.shape(
		{
			title: _propTypes2.default.string,
			textPre: _propTypes2.default.string,
			commands: _propTypes2.default.arrayOf(_propTypes2.default.string),
			textPost: _propTypes2.default.string
		});
		var instructionVariantShape = _propTypes2.default.shape(
		{
			id: _propTypes2.default.string.isRequired,
			instructions: _propTypes2.default.arrayOf(instructionShape).isRequired
		});
		var statusCheckConfigShape = _propTypes2.default.shape(
		{
			success: _propTypes2.default.string,
			error: _propTypes2.default.string,
			title: _propTypes2.default.string,
			text: _propTypes2.default.string,
			btnLabel: _propTypes2.default.string
		});
		InstructionSetUi.propTypes = {
			title: _propTypes2.default.string.isRequired,
			instructionVariants: _propTypes2.default.arrayOf(instructionVariantShape).isRequired,
			statusCheckConfig: statusCheckConfigShape,
			statusCheckState: _propTypes2.default.oneOf([StatusCheckStates.FETCHING, StatusCheckStates.NOT_CHECKED, StatusCheckStates.HAS_DATA, StatusCheckStates.NO_DATA, StatusCheckStates.ERROR]),
			onStatusCheck: _propTypes2.default.func.isRequired,
			offset: _propTypes2.default.number.isRequired,
			params: _propTypes2.default.array,
			paramValues: _propTypes2.default.object.isRequired,
			setParameter: _propTypes2.default.func,
			replaceTemplateStrings: _propTypes2.default.func.isRequired
		};
		exports.InstructionSet = (0, _react3.injectI18n)(InstructionSetUi)
	},
	5453: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Instruction = Instruction;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _content = __webpack_require__(962);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function Instruction(_ref)
		{
			var commands = _ref.commands,
				paramValues = _ref.paramValues,
				textPost = _ref.textPost,
				textPre = _ref.textPre,
				replaceTemplateStrings = _ref.replaceTemplateStrings;
			var pre = void 0;
			textPre && (pre = _react2.default.createElement(_content.Content,
			{
				text: replaceTemplateStrings(textPre)
			}));
			var post = void 0;
			textPost && (post = _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}), _react2.default.createElement(_content.Content,
			{
				text: replaceTemplateStrings(textPost)
			})));
			var copyButton = void 0;
			var commandBlock = void 0;
			if (commands)
			{
				var cmdText = commands.map(function (cmd)
				{
					return replaceTemplateStrings(cmd, paramValues)
				}).join("\n");
				copyButton = _react2.default.createElement(_eui.EuiCopy,
				{
					textToCopy: cmdText
				}, function (copy)
				{
					return _react2.default.createElement(_eui.EuiButton,
					{
						size: "s",
						onClick: copy
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.home.tutorial.instraction.copyButtonLabel",
						defaultMessage: "Copy snippet"
					}))
				});
				commandBlock = _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiSpacer,
				{
					size: "m"
				}), _react2.default.createElement(_eui.EuiCodeBlock,
				{
					language: "sh"
				}, cmdText))
			}
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "spaceBetween",
				alignItems: "flexEnd"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, pre), _react2.default.createElement(_eui.EuiFlexItem,
			{
				style:
				{
					minWidth: 114
				},
				grow: false
			}, copyButton)), commandBlock, post, _react2.default.createElement(_eui.EuiSpacer, null))
		}
		Instruction.propTypes = {
			commands: _propTypes2.default.array,
			paramValues: _propTypes2.default.object.isRequired,
			textPost: _propTypes2.default.string,
			textPre: _propTypes2.default.string,
			replaceTemplateStrings: _propTypes2.default.func.isRequired
		}
	},
	5454: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ParameterForm = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _number_parameter = __webpack_require__(5455);
		var _string_parameter = __webpack_require__(5456);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var ParameterForm = exports.ParameterForm = function (_React$Component)
		{
			_inherits(ParameterForm, _React$Component);

			function ParameterForm()
			{
				var _ref;
				var _temp, _this, _ret;
				_classCallCheck(this, ParameterForm);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParameterForm.__proto__ || Object.getPrototypeOf(ParameterForm)).call.apply(_ref, [this].concat(args))), _this), _this.renderInputs = function ()
				{
					return _this.props.params.map(function (param)
					{
						switch (param.type)
						{
						case "number":
							return _react2.default.createElement(_number_parameter.NumberParameter,
							{
								key: param.id,
								id: param.id,
								label: param.label,
								value: _this.props.paramValues[param.id],
								setParameter: _this.props.setParameter
							});
						case "string":
							return _react2.default.createElement(_string_parameter.StringParameter,
							{
								key: param.id,
								id: param.id,
								label: param.label,
								value: _this.props.paramValues[param.id],
								setParameter: _this.props.setParameter
							});
						default:
							throw new Error("Unhandled parameter type " + param.type)
						}
					})
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(ParameterForm, [
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement("div", null, _react2.default.createElement("div",
					{
						className: "kuiSideBarSection"
					}, this.renderInputs()))
				}
			}]);
			return ParameterForm
		}(_react2.default.Component);
		var paramsShape = _propTypes2.default.shape(
		{
			id: _propTypes2.default.string.isRequired,
			label: _propTypes2.default.string.isRequired,
			type: _propTypes2.default.string.isRequired
		});
		ParameterForm.propTypes = {
			params: _propTypes2.default.arrayOf(paramsShape).isRequired,
			paramValues: _propTypes2.default.object.isRequired,
			setParameter: _propTypes2.default.func.isRequired
		}
	},
	5455: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.NumberParameter = NumberParameter;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function NumberParameter(_ref)
		{
			var id = _ref.id,
				label = _ref.label,
				value = _ref.value,
				setParameter = _ref.setParameter;
			var handleChange = function handleChange(evt)
			{
				setParameter(id, parseFloat(evt.target.value))
			};
			return _react2.default.createElement("div",
			{
				className: "kuiSideBarFormRow"
			}, _react2.default.createElement("label",
			{
				className: "kuiSideBarFormRow__label"
			}, label), _react2.default.createElement("div",
			{
				className: "kuiSideBarFormRow__control kuiFieldGroupSection--wide"
			}, _react2.default.createElement("input",
			{
				className: "kuiTextInput",
				type: "number",
				value: value,
				onChange: handleChange
			})))
		}
		NumberParameter.propTypes = {
			id: _propTypes2.default.string.isRequired,
			label: _propTypes2.default.string.isRequired,
			value: _propTypes2.default.number.isRequired,
			setParameter: _propTypes2.default.func.isRequired
		}
	},
	5456: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.StringParameter = StringParameter;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function StringParameter(_ref)
		{
			var id = _ref.id,
				label = _ref.label,
				value = _ref.value,
				setParameter = _ref.setParameter;
			var handleChange = function handleChange(evt)
			{
				setParameter(id, evt.target.value)
			};
			return _react2.default.createElement("div",
			{
				className: "kuiSideBarFormRow"
			}, _react2.default.createElement("label",
			{
				className: "kuiSideBarFormRow__label"
			}, label), _react2.default.createElement("div",
			{
				className: "kuiSideBarFormRow__control kuiFieldGroupSection--wide"
			}, _react2.default.createElement("input",
			{
				className: "kuiTextInput",
				type: "text",
				value: value,
				onChange: handleChange
			})))
		}
		StringParameter.propTypes = {
			id: _propTypes2.default.string.isRequired,
			label: _propTypes2.default.string.isRequired,
			value: _propTypes2.default.string.isRequired,
			setParameter: _propTypes2.default.func.isRequired
		}
	},
	5457: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _DISPLAY_MAP;

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getDisplayText = getDisplayText;
		var INSTRUCTION_VARIANT = exports.INSTRUCTION_VARIANT = {
			OSX: "osx",
			DEB: "deb",
			RPM: "rpm",
			DOCKER: "docker",
			WINDOWS: "windows",
			NODE: "node",
			DJANGO: "django",
			FLASK: "flask",
			RAILS: "rails",
			RACK: "rack",
			JS: "js",
			GO: "go",
			JAVA: "java"
		};
		var DISPLAY_MAP = (_DISPLAY_MAP = {}, _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.OSX, "macOS"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.DEB, "DEB"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.RPM, "RPM"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.DOCKER, "Docker"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.WINDOWS, "Windows"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.NODE, "Node.js"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.DJANGO, "Django"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.FLASK, "Flask"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.RAILS, "Ruby on Rails"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.RACK, "Rack"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.JS, "RUM (JS)"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.GO, "Go"), _defineProperty(_DISPLAY_MAP, INSTRUCTION_VARIANT.JAVA, "Java"), _DISPLAY_MAP);

		function getDisplayText(id)
		{
			if (id in DISPLAY_MAP) return DISPLAY_MAP[id];
			return id
		}
	},
	5458: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.SavedObjectsInstaller = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(8);
		var _react2 = __webpack_require__(0);
		var _react3 = _interopRequireDefault(_react2);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var SavedObjectsInstallerUi = function (_React$Component)
		{
			_inherits(SavedObjectsInstallerUi, _React$Component);

			function SavedObjectsInstallerUi()
			{
				var _ref, _this2 = this;
				var _temp, _this, _ret;
				_classCallCheck(this, SavedObjectsInstallerUi);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SavedObjectsInstallerUi.__proto__ || Object.getPrototypeOf(SavedObjectsInstallerUi)).call.apply(_ref, [this].concat(args))), _this), _this.DEFAULT_BUTTON_LABEL = _this.props.intl.formatMessage(
				{
					id: "kbn.home.tutorial.savedObject.defaultButtonLabel",
					defaultMessage: "Load Kibana objects"
				}), _this.state = {
					isInstalling: false,
					isInstalled: false,
					overwrite: false,
					buttonLabel: _this.DEFAULT_BUTTON_LABEL
				}, _this.installSavedObjects = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var resp, errors, overwriteErrors, hasErrors, statusMsg;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_this.setState(
							{
								isInstalling: true
							});
							resp = void 0;
							_context.prev = 2;
							_context.next = 5;
							return _this.props.bulkCreate(_this.props.savedObjects,
							{
								overwrite: _this.state.overwrite
							});
						case 5:
							resp = _context.sent;
							_context.next = 14;
							break;
						case 8:
							_context.prev = 8;
							_context.t0 = _context["catch"](2);
							if (_this._isMounted)
							{
								_context.next = 12;
								break
							}
							return _context.abrupt("return");
						case 12:
							_this.setState(
							{
								isInstalling: false,
								installStatusMsg: _this.props.intl.formatMessage(
								{
									id: "kbn.home.tutorial.savedObject.requestFailedErrorMessage",
									defaultMessage: "Request failed, Error: {message}"
								},
								{
									message: _context.t0.message
								}),
								isInstalled: false,
								overwrite: false,
								buttonLabel: _this.DEFAULT_BUTTON_LABEL
							});
							return _context.abrupt("return");
						case 14:
							if (_this._isMounted)
							{
								_context.next = 16;
								break
							}
							return _context.abrupt("return");
						case 16:
							errors = resp.savedObjects.filter(function (savedObject)
							{
								return savedObject.hasOwnProperty("error")
							});
							overwriteErrors = errors.filter(function (savedObject)
							{
								return 409 === savedObject.error.statusCode
							});
							if (!(overwriteErrors.length > 0))
							{
								_context.next = 21;
								break
							}
							_this.setState(
							{
								isInstalling: false,
								installStatusMsg: _this.props.intl.formatMessage(
								{
									id: "kbn.home.tutorial.savedObject.installStatusLabel",
									defaultMessage: "{overwriteErrorsLength} of {savedObjectsLength} objects already exist. Click 'Confirm overwrite' to import and overwrite existing objects. Any changes to the objects will be lost."
								},
								{
									overwriteErrorsLength: overwriteErrors.length,
									savedObjectsLength: _this.props.savedObjects.length
								}),
								isInstalled: false,
								overwrite: true,
								buttonLabel: _this.props.intl.formatMessage(
								{
									id: "kbn.home.tutorial.savedObject.confirmButtonLabel",
									defaultMessage: "Confirm overwrite"
								})
							});
							return _context.abrupt("return");
						case 21:
							hasErrors = errors.length > 0;
							statusMsg = hasErrors ? _this.props.intl.formatMessage(
							{
								id: "kbn.home.tutorial.savedObject.unableToAddErrorMessage",
								defaultMessage: "Unable to add {errorsLength} of {savedObjectsLength} kibana objects, Error: {errorMessage}"
							},
							{
								errorsLength: errors.length,
								savedObjectsLength: _this.props.savedObjects.length,
								errorMessage: errors[0].error.message
							}) : _this.props.intl.formatMessage(
							{
								id: "kbn.home.tutorial.savedObject.addedLabel",
								defaultMessage: "{savedObjectsLength} saved objects successfully added"
							},
							{
								savedObjectsLength: _this.props.savedObjects.length
							});
							_this.setState(
							{
								isInstalling: false,
								installStatusMsg: statusMsg,
								isInstalled: !hasErrors,
								overwrite: false,
								buttonLabel: _this.DEFAULT_BUTTON_LABEL
							});
						case 24:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2, [
						[2, 8]
					])
				})), _this.renderInstallStep = function ()
				{
					var installMsg = _this.props.installMsg ? _this.props.installMsg : _this.props.intl.formatMessage(
					{
						id: "kbn.home.tutorial.savedObject.installLabel",
						defaultMessage: "Imports index pattern, visualizations and pre-defined dashboards."
					});
					var installStep = _react3.default.createElement(_react2.Fragment, null, _react3.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "spaceBetween",
						alignItems: "center"
					}, _react3.default.createElement(_eui.EuiFlexItem, null, _react3.default.createElement(_eui.EuiText, null, _react3.default.createElement("p", null, installMsg))), _react3.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react3.default.createElement(_eui.EuiButton,
					{
						onClick: _this.installSavedObjects,
						isLoading: _this.state.isInstalling,
						"data-test-subj": "loadSavedObjects"
					}, _this.state.buttonLabel))), _react3.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _this.renderInstallMessage());
					return {
						title: _this.props.intl.formatMessage(
						{
							id: "kbn.home.tutorial.savedObject.loadTitle",
							defaultMessage: "Load Kibana objects"
						}),
						status: _this.state.isInstalled ? "complete" : "incomplete",
						children: installStep,
						key: "installStep"
					}
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(SavedObjectsInstallerUi, [
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					this._isMounted = true
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this._isMounted = false
				}
			},
			{
				key: "renderInstallMessage",
				value: function renderInstallMessage()
				{
					if (!this.state.installStatusMsg) return;
					return _react3.default.createElement(_eui.EuiCallOut,
					{
						title: this.state.installStatusMsg,
						color: this.state.isInstalled ? "success" : "warning",
						"data-test-subj": this.state.isInstalled ? "loadSavedObjects_success" : "loadSavedObjects_failed"
					})
				}
			},
			{
				key: "render",
				value: function render()
				{
					return _react3.default.createElement(_eui.EuiSteps,
					{
						steps: [this.renderInstallStep()]
					})
				}
			}]);
			return SavedObjectsInstallerUi
		}(_react3.default.Component);
		var savedObjectShape = _propTypes2.default.shape(
		{
			id: _propTypes2.default.string.isRequired,
			type: _propTypes2.default.string.isRequired,
			attributes: _propTypes2.default.object.isRequired
		});
		SavedObjectsInstallerUi.propTypes = {
			bulkCreate: _propTypes2.default.func.isRequired,
			savedObjects: _propTypes2.default.arrayOf(savedObjectShape).isRequired,
			installMsg: _propTypes2.default.string
		};
		exports.SavedObjectsInstaller = (0, _react.injectI18n)(SavedObjectsInstallerUi)
	},
	5459: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.replaceTemplateStrings = replaceTemplateStrings;
		var _mustache = __webpack_require__(5460);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _metadata = __webpack_require__(268);
		var _documentation_links = __webpack_require__(447);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var TEMPLATE_TAGS = ["{", "}"];
		var mustacheWriter = new _mustache.Writer;
		mustacheWriter.escapedValue = function escapedValue(token, context)
		{
			var value = context.lookup(token[1]);
			if (null != value) return value
		};

		function replaceTemplateStrings(text)
		{
			var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
			{};
			var variables = {
				curlyOpen: "{",
				curlyClose: "}",
				config:
				{
					cloud:
					{
						id: _chrome2.default.getInjected("cloudId")
					},
					docs:
					{
						base_url: _documentation_links.ELASTIC_WEBSITE_URL,
						beats:
						{
							filebeat: _documentation_links.documentationLinks.filebeat.base,
							metricbeat: _documentation_links.documentationLinks.metricbeat.base,
							heartbeat: _documentation_links.documentationLinks.heartbeat.base
						},
						logstash: _documentation_links.documentationLinks.logstash.base,
						version: _documentation_links.DOC_LINK_VERSION
					},
					kibana:
					{
						version: _metadata.metadata.version
					}
				},
				params: params
			};
			mustacheWriter.parse(text, TEMPLATE_TAGS);
			return mustacheWriter.render(text, variables)
		}
	},
	5460: function (module, exports, __webpack_require__)
	{
		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
		/*!
		 * mustache.js - Logic-less {{mustache}} templates with JavaScript
		 * http://github.com/janl/mustache.js
		 */
		/*!
		 * mustache.js - Logic-less {{mustache}} templates with JavaScript
		 * http://github.com/janl/mustache.js
		 */
		(function defineMustache(global, factory)
		{
			if ("object" === typeof exports && exports && "string" !== typeof exports.nodeName) factory(exports);
			else
			{
				true;
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
			}
		})(0, function mustacheFactory(mustache)
		{
			var objectToString = Object.prototype.toString;
			var isArray = Array.isArray || function isArrayPolyfill(object)
			{
				return "[object Array]" === objectToString.call(object)
			};

			function isFunction(object)
			{
				return "function" === typeof object
			}

			function typeStr(obj)
			{
				return isArray(obj) ? "array" : typeof obj
			}

			function escapeRegExp(string)
			{
				return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}

			function hasProperty(obj, propName)
			{
				return null != obj && "object" === typeof obj && propName in obj
			}
			var regExpTest = RegExp.prototype.test;

			function testRegExp(re, string)
			{
				return regExpTest.call(re, string)
			}
			var nonSpaceRe = /\S/;

			function isWhitespace(string)
			{
				return !testRegExp(nonSpaceRe, string)
			}
			var entityMap = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
				"/": "&#x2F;",
				"`": "&#x60;",
				"=": "&#x3D;"
			};

			function escapeHtml(string)
			{
				return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s)
				{
					return entityMap[s]
				})
			}
			var whiteRe = /\s*/;
			var spaceRe = /\s+/;
			var equalsRe = /\s*=/;
			var curlyRe = /\s*\}/;
			var tagRe = /#|\^|\/|>|\{|&|=|!/;

			function parseTemplate(template, tags)
			{
				if (!template) return [];
				var sections = [];
				var tokens = [];
				var spaces = [];
				var hasTag = false;
				var nonSpace = false;

				function stripSpace()
				{
					if (hasTag && !nonSpace)
						while (spaces.length) delete tokens[spaces.pop()];
					else spaces = [];
					hasTag = false;
					nonSpace = false
				}
				var openingTagRe, closingTagRe, closingCurlyRe;

				function compileTags(tagsToCompile)
				{
					"string" === typeof tagsToCompile && (tagsToCompile = tagsToCompile.split(spaceRe, 2));
					if (!isArray(tagsToCompile) || 2 !== tagsToCompile.length) throw new Error("Invalid tags: " + tagsToCompile);
					openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
					closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
					closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
				}
				compileTags(tags || mustache.tags);
				var scanner = new Scanner(template);
				var start, type, value, chr, token, openSection;
				while (!scanner.eos())
				{
					start = scanner.pos;
					value = scanner.scanUntil(openingTagRe);
					if (value)
						for (var i = 0, valueLength = value.length; i < valueLength; ++i)
						{
							chr = value.charAt(i);
							isWhitespace(chr) ? spaces.push(tokens.length) : nonSpace = true;
							tokens.push(["text", chr, start, start + 1]);
							start += 1;
							"\n" === chr && stripSpace()
						}
					if (!scanner.scan(openingTagRe)) break;
					hasTag = true;
					type = scanner.scan(tagRe) || "name";
					scanner.scan(whiteRe);
					if ("=" === type)
					{
						value = scanner.scanUntil(equalsRe);
						scanner.scan(equalsRe);
						scanner.scanUntil(closingTagRe)
					}
					else if ("{" === type)
					{
						value = scanner.scanUntil(closingCurlyRe);
						scanner.scan(curlyRe);
						scanner.scanUntil(closingTagRe);
						type = "&"
					}
					else value = scanner.scanUntil(closingTagRe);
					if (!scanner.scan(closingTagRe)) throw new Error("Unclosed tag at " + scanner.pos);
					token = [type, value, start, scanner.pos];
					tokens.push(token);
					if ("#" === type || "^" === type) sections.push(token);
					else if ("/" === type)
					{
						openSection = sections.pop();
						if (!openSection) throw new Error('Unopened section "' + value + '" at ' + start);
						if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
					}
					else "name" === type || "{" === type || "&" === type ? nonSpace = true : "=" === type && compileTags(value)
				}
				openSection = sections.pop();
				if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
				return nestTokens(squashTokens(tokens))
			}

			function squashTokens(tokens)
			{
				var squashedTokens = [];
				var token, lastToken;
				for (var i = 0, numTokens = tokens.length; i < numTokens; ++i)
				{
					token = tokens[i];
					if (token)
						if ("text" === token[0] && lastToken && "text" === lastToken[0])
						{
							lastToken[1] += token[1];
							lastToken[3] = token[3]
						}
					else
					{
						squashedTokens.push(token);
						lastToken = token
					}
				}
				return squashedTokens
			}

			function nestTokens(tokens)
			{
				var nestedTokens = [];
				var collector = nestedTokens;
				var sections = [];
				var token, section;
				for (var i = 0, numTokens = tokens.length; i < numTokens; ++i)
				{
					token = tokens[i];
					switch (token[0])
					{
					case "#":
					case "^":
						collector.push(token);
						sections.push(token);
						collector = token[4] = [];
						break;
					case "/":
						section = sections.pop();
						section[5] = token[2];
						collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
						break;
					default:
						collector.push(token)
					}
				}
				return nestedTokens
			}

			function Scanner(string)
			{
				this.string = string;
				this.tail = string;
				this.pos = 0
			}
			Scanner.prototype.eos = function eos()
			{
				return "" === this.tail
			};
			Scanner.prototype.scan = function scan(re)
			{
				var match = this.tail.match(re);
				if (!match || 0 !== match.index) return "";
				var string = match[0];
				this.tail = this.tail.substring(string.length);
				this.pos += string.length;
				return string
			};
			Scanner.prototype.scanUntil = function scanUntil(re)
			{
				var match, index = this.tail.search(re);
				switch (index)
				{
				case -1:
					match = this.tail;
					this.tail = "";
					break;
				case 0:
					match = "";
					break;
				default:
					match = this.tail.substring(0, index);
					this.tail = this.tail.substring(index)
				}
				this.pos += match.length;
				return match
			};

			function Context(view, parentContext)
			{
				this.view = view;
				this.cache = {
					".": this.view
				};
				this.parent = parentContext
			}
			Context.prototype.push = function push(view)
			{
				return new Context(view, this)
			};
			Context.prototype.lookup = function lookup(name)
			{
				var cache = this.cache;
				var value;
				if (cache.hasOwnProperty(name)) value = cache[name];
				else
				{
					var names, index, context = this,
						lookupHit = false;
					while (context)
					{
						if (name.indexOf(".") > 0)
						{
							value = context.view;
							names = name.split(".");
							index = 0;
							while (null != value && index < names.length)
							{
								index === names.length - 1 && (lookupHit = hasProperty(value, names[index]));
								value = value[names[index++]]
							}
						}
						else
						{
							value = context.view[name];
							lookupHit = hasProperty(context.view, name)
						}
						if (lookupHit) break;
						context = context.parent
					}
					cache[name] = value
				}
				isFunction(value) && (value = value.call(this.view));
				return value
			};

			function Writer()
			{
				this.cache = {}
			}
			Writer.prototype.clearCache = function clearCache()
			{
				this.cache = {}
			};
			Writer.prototype.parse = function parse(template, tags)
			{
				var cache = this.cache;
				var tokens = cache[template];
				null == tokens && (tokens = cache[template] = parseTemplate(template, tags));
				return tokens
			};
			Writer.prototype.render = function render(template, view, partials)
			{
				var tokens = this.parse(template);
				var context = view instanceof Context ? view : new Context(view);
				return this.renderTokens(tokens, context, partials, template)
			};
			Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate)
			{
				var buffer = "";
				var token, symbol, value;
				for (var i = 0, numTokens = tokens.length; i < numTokens; ++i)
				{
					value = void 0;
					token = tokens[i];
					symbol = token[0];
					"#" === symbol ? value = this.renderSection(token, context, partials, originalTemplate) : "^" === symbol ? value = this.renderInverted(token, context, partials, originalTemplate) : ">" === symbol ? value = this.renderPartial(token, context, partials, originalTemplate) : "&" === symbol ? value = this.unescapedValue(token, context) : "name" === symbol ? value = this.escapedValue(token, context) : "text" === symbol && (value = this.rawValue(token));
					void 0 !== value && (buffer += value)
				}
				return buffer
			};
			Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate)
			{
				var self = this;
				var buffer = "";
				var value = context.lookup(token[1]);

				function subRender(template)
				{
					return self.render(template, context, partials)
				}
				if (!value) return;
				if (isArray(value))
					for (var j = 0, valueLength = value.length; j < valueLength; ++j) buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
				else if ("object" === typeof value || "string" === typeof value || "number" === typeof value) buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
				else if (isFunction(value))
				{
					if ("string" !== typeof originalTemplate) throw new Error("Cannot use higher-order sections without the original template");
					value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
					null != value && (buffer += value)
				}
				else buffer += this.renderTokens(token[4], context, partials, originalTemplate);
				return buffer
			};
			Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate)
			{
				var value = context.lookup(token[1]);
				if (!value || isArray(value) && 0 === value.length) return this.renderTokens(token[4], context, partials, originalTemplate)
			};
			Writer.prototype.renderPartial = function renderPartial(token, context, partials)
			{
				if (!partials) return;
				var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
				if (null != value) return this.renderTokens(this.parse(value), context, partials, value)
			};
			Writer.prototype.unescapedValue = function unescapedValue(token, context)
			{
				var value = context.lookup(token[1]);
				if (null != value) return value
			};
			Writer.prototype.escapedValue = function escapedValue(token, context)
			{
				var value = context.lookup(token[1]);
				if (null != value) return mustache.escape(value)
			};
			Writer.prototype.rawValue = function rawValue(token)
			{
				return token[1]
			};
			mustache.name = "mustache.js";
			mustache.version = "2.3.0";
			mustache.tags = ["{{", "}}"];
			var defaultWriter = new Writer;
			mustache.clearCache = function clearCache()
			{
				return defaultWriter.clearCache()
			};
			mustache.parse = function parse(template, tags)
			{
				return defaultWriter.parse(template, tags)
			};
			mustache.render = function render(template, view, partials)
			{
				if ("string" !== typeof template) throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
				return defaultWriter.render(template, view, partials)
			};
			mustache.to_html = function to_html(template, view, partials, send)
			{
				var result = mustache.render(template, view, partials);
				if (!isFunction(send)) return result;
				send(result)
			};
			mustache.escape = escapeHtml;
			mustache.Scanner = Scanner;
			mustache.Context = Context;
			mustache.Writer = Writer;
			return mustache
		})
	},
	5461: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(617);
		__webpack_require__(5462);
		__webpack_require__(952);
		__webpack_require__(1681);
		__webpack_require__(1682);
		__webpack_require__(883);
		var _feature_catalogue = __webpack_require__(79);
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "discover",
				title: "Discover",
				description: "Interactively explore your data by querying and filtering raw documents.",
				icon: "discoverApp",
				path: "/app/kibana#/discover",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.DATA
			}
		})
	},
	5462: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(440);
		var _modules = __webpack_require__(2);
		var _no_results = __webpack_require__(1679);
		var _unsupported_index_pattern = __webpack_require__(5463);
		__webpack_require__(1680);
		var app = _modules.uiModules.get("apps/discover", ["react"]);
		app.directive("discoverNoResults", function (reactDirective)
		{
			return reactDirective(_no_results.DiscoverNoResults)
		});
		app.directive("discoverUnsupportedIndexPattern", function (reactDirective)
		{
			return reactDirective(_unsupported_index_pattern.DiscoverUnsupportedIndexPattern, ["unsupportedType"])
		})
	},
	5463: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.DiscoverUnsupportedIndexPattern = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.DiscoverUnsupportedIndexPattern = function DiscoverUnsupportedIndexPattern(_ref)
		{
			var unsupportedType = _ref.unsupportedType;
			var message = "Index patterns based on " + unsupportedType + " indices require the " + unsupportedType + " plugin from X-Pack, which is not installed or disabled";
			return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "xl"
			}), _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "center"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false,
				className: "dscNoResults"
			}, _react2.default.createElement(_eui.EuiCallOut,
			{
				title: message,
				color: "danger",
				iconType: "alert"
			}))))
		}
	},
	5464: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5465);
		__webpack_require__(5468);
		__webpack_require__(5471);
		__webpack_require__(5481);
		__webpack_require__(5482);
		__webpack_require__(878);
		__webpack_require__(618);
		__webpack_require__(888);
		__webpack_require__(466);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _visualize_listing = __webpack_require__(5483);
		var _visualize_listing2 = _interopRequireDefault(_visualize_listing);
		var _visualize_listing3 = __webpack_require__(5484);
		var _visualize_constants = __webpack_require__(464);
		var _feature_catalogue = __webpack_require__(79);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_routes2.default.defaults(/visualize/,
		{
			requireDefaultIndex: true
		}).when(_visualize_constants.VisualizeConstants.LANDING_PAGE_PATH,
		{
			template: _visualize_listing2.default,
			controller: _visualize_listing3.VisualizeListingController,
			controllerAs: "listingController"
		});
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "visualize",
				title: "Visualize",
				description: "Create visualizations and aggregate data stores in your Elasticsearch indices.",
				icon: "visualizeApp",
				path: "/app/kibana#" + _visualize_constants.VisualizeConstants.LANDING_PAGE_PATH,
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.DATA
			}
		})
	},
	5465: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _slicedToArray = function ()
		{
			function sliceIterator(arr, i)
			{
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = void 0;
				try
				{
					for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true)
					{
						_arr.push(_s.value);
						if (i && _arr.length === i) break
					}
				}
				catch (err)
				{
					_d = true;
					_e = err
				}
				finally
				{
					try
					{
						!_n && _i["return"] && _i["return"]()
					}
					finally
					{
						if (_d) throw _e
					}
				}
				return _arr
			}
			return function (arr, i)
			{
				if (Array.isArray(arr)) return arr;
				if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		__webpack_require__(618);
		__webpack_require__(5466);
		__webpack_require__(1463);
		__webpack_require__(953);
		__webpack_require__(952);
		__webpack_require__(623);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _angular = __webpack_require__(22);
		var _angular2 = _interopRequireDefault(_angular);
		var _notify = __webpack_require__(10);
		var _vis_types = __webpack_require__(76);
		var _doc_title = __webpack_require__(381);
		var _query_filter = __webpack_require__(117);
		var _state_monitor_factory = __webpack_require__(626);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _editor = __webpack_require__(5467);
		var _editor2 = _interopRequireDefault(_editor);
		var _dashboard_constants = __webpack_require__(154);
		var _visualize_constants = __webpack_require__(464);
		var _kibana_parsed_url = __webpack_require__(1286);
		var _absolute_to_parsed_url = __webpack_require__(1285);
		var _migrateLegacyQuery = __webpack_require__(448);
		var _persisted_log = __webpack_require__(132);
		var _timefilter = __webpack_require__(27);
		var _loader = __webpack_require__(891);
		var _share = __webpack_require__(627);
		var _state_hashing = __webpack_require__(270);
		var _show_saved_object_save_modal = __webpack_require__(917);
		var _saved_object_save_modal = __webpack_require__(918);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		_routes2.default.when(_visualize_constants.VisualizeConstants.CREATE_PATH,
		{
			template: _editor2.default,
			resolve:
			{
				savedVis: function savedVis(savedVisualizations, redirectWhenMissing, $route, Private)
				{
					var visTypes = Private(_vis_types.VisTypesRegistryProvider);
					var visType = _lodash2.default.find(visTypes,
					{
						name: $route.current.params.type
					});
					var shouldHaveIndex = visType.requiresSearch && visType.options.showIndexSelection;
					var hasIndex = $route.current.params.indexPattern || $route.current.params.savedSearchId;
					if (shouldHaveIndex && !hasIndex) throw new Error("You must provide either an indexPattern or a savedSearchId");
					return savedVisualizations.get($route.current.params).catch(redirectWhenMissing(
					{
						"*": "/visualize"
					}))
				}
			}
		}).when(_visualize_constants.VisualizeConstants.EDIT_PATH + "/:id",
		{
			template: _editor2.default,
			resolve:
			{
				savedVis: function savedVis(savedVisualizations, redirectWhenMissing, $route)
				{
					return savedVisualizations.get($route.current.params.id).then(function (savedVis)
					{
						_persisted_log.recentlyAccessed.add(savedVis.getFullPath(), savedVis.title, savedVis.id);
						return savedVis
					}).catch(redirectWhenMissing(
					{
						visualization: "/visualize",
						search: "/management/kibana/objects/savedVisualizations/" + $route.current.params.id,
						"index-pattern": "/management/kibana/objects/savedVisualizations/" + $route.current.params.id,
						"index-pattern-field": "/management/kibana/objects/savedVisualizations/" + $route.current.params.id
					}))
				}
			}
		});
		_modules.uiModules.get("app/visualize", ["kibana/notify", "kibana/url"]).directive("visualizeApp", function ()
		{
			return {
				restrict: "E",
				controllerAs: "visualizeApp",
				controller: VisEditor
			}
		});

		function VisEditor($scope, $element, $route, AppState, $window, kbnUrl, redirectWhenMissing, Private, Promise, config, kbnBaseUrl, localStorage)
		{
			var _this = this;
			var docTitle = Private(_doc_title.DocTitleProvider);
			var queryFilter = Private(_query_filter.FilterBarQueryFilterProvider);
			var getUnhashableStates = Private(_state_hashing.getUnhashableStatesProvider);
			var shareContextMenuExtensions = Private(_share.ShareContextMenuExtensionsRegistryProvider);
			var savedVis = $route.current.locals.savedVis;
			var vis = savedVis.vis,
				searchSource = savedVis.searchSource;
			var getTopLevelSearchSource = function getTopLevelSearchSource(searchSource)
			{
				if (searchSource.getParent()) return getTopLevelSearchSource(searchSource.getParent());
				return searchSource
			};
			var topLevelSearchSource = getTopLevelSearchSource(searchSource);
			var globalFiltersSearchSource = searchSource.create();
			globalFiltersSearchSource.setField("index", searchSource.getField("index"));
			topLevelSearchSource.setParent(globalFiltersSearchSource);
			$scope.vis = vis;
			var $appStatus = this.appStatus = {
				dirty: !savedVis.id
			};
			$scope.topNavMenu = [
			{
				key: "save",
				description: "Save Visualization",
				testId: "visualizeSaveButton",
				disableButton: function disableButton()
				{
					return Boolean(vis.dirty)
				},
				tooltip: function tooltip()
				{
					if (vis.dirty) return "Apply or Discard your changes before saving"
				},
				run: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
					{
						var onSave, saveModal;
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								onSave = function onSave(_ref2)
								{
									var newTitle = _ref2.newTitle,
										newCopyOnSave = _ref2.newCopyOnSave,
										isTitleDuplicateConfirmed = _ref2.isTitleDuplicateConfirmed,
										onTitleDuplicate = _ref2.onTitleDuplicate;
									var currentTitle = savedVis.title;
									savedVis.title = newTitle;
									savedVis.copyOnSave = newCopyOnSave;
									var saveOptions = {
										confirmOverwrite: false,
										isTitleDuplicateConfirmed: isTitleDuplicateConfirmed,
										onTitleDuplicate: onTitleDuplicate
									};
									return doSave(saveOptions).then(function (_ref3)
									{
										var id = _ref3.id,
											error = _ref3.error;
										id && !error || (savedVis.title = currentTitle);
										return {
											id: id,
											error: error
										}
									})
								};
								saveModal = _react2.default.createElement(_saved_object_save_modal.SavedObjectSaveModal,
								{
									onSave: onSave,
									onClose: function onClose()
									{},
									title: savedVis.title,
									showCopyOnSave: !!savedVis.id,
									objectType: "visualization"
								});
								(0, _show_saved_object_save_modal.showSaveModal)(saveModal);
							case 3:
							case "end":
								return _context.stop()
							}
						}, _callee, _this)
					}));

					function run()
					{
						return _ref.apply(this, arguments)
					}
					return run
				}()
			},
			{
				key: "share",
				description: "Share Visualization",
				testId: "shareTopNavButton",
				run: function run(menuItem, navController, anchorElement)
				{
					var hasUnappliedChanges = vis.dirty;
					var hasUnsavedChanges = $appStatus.dirty;
					(0, _share.showShareContextMenu)(
					{
						anchorElement: anchorElement,
						allowEmbed: true,
						getUnhashableStates: getUnhashableStates,
						objectId: savedVis.id,
						objectType: "visualization",
						shareContextMenuExtensions: shareContextMenuExtensions,
						sharingData:
						{
							title: savedVis.title
						},
						isDirty: hasUnappliedChanges || hasUnsavedChanges
					})
				}
			},
			{
				key: "inspect",
				description: "Open Inspector for visualization",
				testId: "openInspectorButton",
				disableButton: function disableButton()
				{
					return !vis.hasInspector()
				},
				run: function run()
				{
					vis.openInspector().bindToAngularScope($scope)
				},
				tooltip: function tooltip()
				{
					if (!vis.hasInspector()) return "This visualization doesn't support any inspectors."
				}
			},
			{
				key: "refresh",
				description: "Refresh",
				run: function run()
				{
					vis.forceReload()
				},
				testId: "visualizeRefreshButton"
			}];
			var stateMonitor = void 0;
			savedVis.id && docTitle.change(savedVis.title);
			var savedVisState = vis.getState();
			var stateDefaults = {
				uiState: savedVis.uiStateJSON ? JSON.parse(savedVis.uiStateJSON) :
				{},
				linked: !!savedVis.savedSearchId,
				query: searchSource.getOwnField("query") ||
				{
					query: "",
					language: localStorage.get("kibana.userQueryLanguage") || config.get("search:queryLanguage")
				},
				filters: searchSource.getOwnField("filter") || [],
				vis: savedVisState
			};
			var $state = function initState()
			{
				var appState = new AppState(stateDefaults);
				_angular2.default.equals(appState.vis, savedVisState) || Promise.try(function ()
				{
					vis.setState(appState.vis)
				}).catch(redirectWhenMissing(
				{
					"index-pattern-field": "/visualize"
				}));
				return appState
			}();

			function init()
			{
				$scope.savedVis = savedVis;
				$scope.indexPattern = vis.indexPattern;
				$scope.searchSource = searchSource;
				$scope.state = $state;
				$scope.uiState = $state.makeStateful("uiState");
				$scope.appStatus = $appStatus;
				var addToDashMode = $route.current.params[_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM];
				kbnUrl.removeParam(_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM);
				$scope.isAddToDashMode = function ()
				{
					return addToDashMode
				};
				$scope.timeRange = _timefilter.timefilter.getTime();
				$scope.opts = _lodash2.default.pick($scope, "savedVis", "isAddToDashMode");
				stateMonitor = _state_monitor_factory.stateMonitorFactory.create($state, stateDefaults);
				stateMonitor.ignoreProps(["vis.listeners"]).onChange(function (status)
				{
					$appStatus.dirty = status.dirty || !savedVis.id
				});
				$scope.$watch("state.query", $scope.updateQueryAndFetch);
				$state.replace();
				$scope.getVisualizationTitle = function getVisualizationTitle()
				{
					return savedVis.lastSavedTitle || savedVis.title + " (unsaved)"
				};
				$scope.$watchMulti(['searchSource.getField("index")', "vis.type.options.showTimePicker"], function (_ref4)
				{
					var _ref5 = _slicedToArray(_ref4, 2),
						index = _ref5[0],
						requiresTimePicker = _ref5[1];
					var showTimeFilter = Boolean((!index || index.timeFieldName) && requiresTimePicker);
					showTimeFilter ? _timefilter.timefilter.enableTimeRangeSelector() : _timefilter.timefilter.disableTimeRangeSelector()
				});
				var updateTimeRange = function updateTimeRange()
				{
					$scope.timeRange = _timefilter.timefilter.getTime();
					$scope._handler && $scope._handler.update(
					{
						timeRange: $scope.timeRange
					})
				};
				_timefilter.timefilter.enableAutoRefreshSelector();
				$scope.$listenAndDigestAsync(_timefilter.timefilter, "timeUpdate", updateTimeRange);
				$scope.$listen(queryFilter, "update", function ()
				{
					$scope.fetch()
				});
				$scope.fetch = function ()
				{
					$state.save();
					var globalFilters = queryFilter.getGlobalFilters();
					savedVis.searchSource.setField("query", $state.query);
					savedVis.searchSource.setField("filter", $state.filters);
					globalFiltersSearchSource.setField("filter", globalFilters);
					$scope.vis.forceReload()
				};
				$scope.$on("$destroy", function ()
				{
					$scope._handler && $scope._handler.destroy();
					savedVis.destroy();
					stateMonitor.destroy()
				});
				$scope.chrome.getVisible() || (0, _loader.getVisualizeLoader)().then(function (loader)
				{
					$scope._handler = loader.embedVisualizationWithSavedObject($element.find(".visualize")[0], savedVis,
					{
						timeRange: $scope.timeRange,
						uiState: $scope.uiState,
						appState: $state,
						listenOnChange: false
					})
				})
			}
			$scope.updateQueryAndFetch = function (query)
			{
				$state.query = (0, _migrateLegacyQuery.migrateLegacyQuery)(query);
				$scope.fetch()
			};

			function doSave(saveOptions)
			{
				$state.vis.title = savedVis.title;
				$state.vis.type = savedVis.type || $state.vis.type;
				savedVis.visState = $state.vis;
				savedVis.uiStateJSON = _angular2.default.toJson($scope.uiState.getChanges());
				return savedVis.save(saveOptions).then(function (id)
				{
					$scope.$evalAsync(function ()
					{
						stateMonitor.setInitialState($state.toJSON());
						if (id)
						{
							_notify.toastNotifications.addSuccess(
							{
								title: "Saved '" + savedVis.title + "'",
								"data-test-subj": "saveVisualizationSuccess"
							});
							if ($scope.isAddToDashMode())
							{
								var savedVisualizationParsedUrl = new _kibana_parsed_url.KibanaParsedUrl(
								{
									basePath: _chrome2.default.getBasePath(),
									appId: kbnBaseUrl.slice("/app/".length),
									appPath: kbnUrl.eval(_visualize_constants.VisualizeConstants.EDIT_PATH + "/{{id}}",
									{
										id: savedVis.id
									})
								});
								$window.history.pushState(
								{}, "", savedVisualizationParsedUrl.getRootRelativePath());
								_chrome2.default.trackSubUrlForApp("kibana:visualize", savedVisualizationParsedUrl);
								var lastDashboardAbsoluteUrl = _chrome2.default.getNavLinkById("kibana:dashboard").lastSubUrl;
								var dashboardParsedUrl = (0, _absolute_to_parsed_url.absoluteToParsedUrl)(lastDashboardAbsoluteUrl, _chrome2.default.getBasePath());
								dashboardParsedUrl.addQueryParameter(_dashboard_constants.DashboardConstants.NEW_VISUALIZATION_ID_PARAM, savedVis.id);
								kbnUrl.change(dashboardParsedUrl.appPath)
							}
							else savedVis.id === $route.current.params.id ? docTitle.change(savedVis.lastSavedTitle) : kbnUrl.change(_visualize_constants.VisualizeConstants.EDIT_PATH + "/{{id}}",
							{
								id: savedVis.id
							})
						}
					});
					return {
						id: id
					}
				}, function (error)
				{
					console.error(error);
					_notify.toastNotifications.addDanger(
					{
						title: "Error on saving '" + savedVis.title + "'",
						text: error.message,
						"data-test-subj": "saveVisualizationError"
					});
					return {
						error: error
					}
				})
			}
			$scope.unlink = function ()
			{
				if (!$state.linked) return;
				$state.linked = false;
				var searchSourceParent = searchSource.getParent();
				var searchSourceGrandparent = searchSourceParent.getParent();
				delete savedVis.savedSearchId;
				searchSourceParent.setField("filter", _lodash2.default.union(searchSource.getOwnField("filter"), searchSourceParent.getOwnField("filter")));
				$state.query = searchSourceParent.getField("query");
				$state.filters = searchSourceParent.getField("filter");
				searchSource.setField("index", searchSourceParent.getField("index"));
				searchSource.setParent(searchSourceGrandparent);
				_notify.toastNotifications.addSuccess("Unlinked from saved search '" + savedVis.savedSearch.title + "'");
				$scope.fetch()
			};
			$scope.getAdditionalMessage = function ()
			{
				return '<i class="kuiIcon fa-flask"></i> This visualization is marked as experimental. ' + vis.type.feedbackMessage
			};
			init()
		}
	},
	5466: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _modules = __webpack_require__(2);
		__webpack_require__(576);
		var _vis_editor_types = __webpack_require__(1485);
		_modules.uiModules.get("kibana/directive", ["ngSanitize"]).directive("visualizationEditor", function (Private, $timeout, getAppState)
		{
			var editorTypes = Private(_vis_editor_types.VisEditorTypesRegistryProvider);
			return {
				restrict: "E",
				scope:
				{
					savedObj: "=",
					uiState: "=?",
					timeRange: "="
				},
				link: function link($scope, element)
				{
					var editorType = $scope.savedObj.vis.type.editor;
					var Editor = "function" === typeof editorType ? editorType : editorTypes.find(function (editor)
					{
						return editor.key === editorType
					});
					var editor = new Editor(element[0], $scope.savedObj);
					$scope.renderFunction = function ()
					{
						editor.render(
						{
							uiState: $scope.uiState,
							timeRange: $scope.timeRange,
							appState: getAppState()
						})
					};
					$scope.$on("render", function (event)
					{
						event.preventDefault();
						$timeout(function ()
						{
							$scope.renderFunction()
						})
					});
					$scope.$on("$destroy", function ()
					{
						editor.destroy()
					});
					$scope.$watch("timeRange", $scope.renderFunction)
				}
			}
		})
	},
	5467: function (module, exports)
	{
		module.exports = '<visualize-app class="app-container visEditor visEditor--{{ vis.type.name }}">\n  <!-- Local nav. -->\n  <kbn-top-nav name="visualize" config="topNavMenu">\n    <!-- Transcluded elements. -->\n    <div data-transclude-slots>\n      <!-- Breadcrumbs. -->\n      <bread-crumbs\n        data-transclude-slot="topLeftCorner"\n        page-title="getVisualizationTitle()"\n        use-links="true"\n        omit-current-page="true"\n        omit-pages="[\'edit\']"\n      ></bread-crumbs>\n\n      <!-- Search. -->\n      <div\n        data-transclude-slot="bottomRow"\n        ng-show="chrome.getVisible()"\n        class="fullWidth"\n      >\n        <div ng-if="vis.type.requiresSearch && state.linked">\n          Linked to Saved Search\n          <a\n            href="#/discover/{{savedVis.savedSearch.id}}"\n          >\n            {{ savedVis.savedSearch.title }}\n          </a>\n          &nbsp;\n          <a\n            data-test-subj="unlinkSavedSearch"\n            href=""\n            ng-dblclick="unlink()"\n            tooltip="Double click to unlink from Saved Search"\n          >\n            <span aria-hidden="true" class="kuiIcon fa-chain-broken"></span>\n          </a>\n        </div>\n\n        <div ng-if="vis.type.requiresSearch && vis.type.options.showQueryBar" class="fullWidth">\n          <query-bar\n            query="state.query"\n            app-name="\'visualize\'"\n            on-submit="updateQueryAndFetch"\n            disable-auto-focus="true"\n            index-patterns="[indexPattern]"\n          ></query-bar>\n        </div>\n      </div>\n    </div>\n  </kbn-top-nav>\n\n  <!-- Filters. -->\n  <filter-bar\n    ng-if="vis.type.options.showFilterBar"\n    state="state"\n    index-patterns="[indexPattern]"\n  ></filter-bar>\n\n  <div\n    class="euiCallOut euiCallOut--primary euiCallOut--small hide-for-sharing"\n    ng-if="vis.type.shouldMarkAsExperimentalInUI()"\n    data-test-subj="experimentalVisInfo"\n  >\n    <div class="euiText">\n      <p ng-bind-html="getAdditionalMessage()"></p>\n    </div>\n  </div>\n\n  <div class="visualize" ng-if="!chrome.getVisible()"/>\n\n  <visualization-editor\n    ng-if="chrome.getVisible()"\n    saved-obj="savedVis"\n    ui-state="uiState"\n    time-range="timeRange"\n    class="visEditor__content"\n  />\n\n</visualize-app>\n'
	},
	5468: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(618);
		__webpack_require__(1534);
		__webpack_require__(1533);
		__webpack_require__(617);
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _vis_category = __webpack_require__(57);
		var _dashboard_constants = __webpack_require__(154);
		var _visualize_constants = __webpack_require__(464);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _vis_types = __webpack_require__(76);
		var _modules = __webpack_require__(2);
		var _step_ = __webpack_require__(5469);
		var _step_2 = _interopRequireDefault(_step_);
		var _step_3 = __webpack_require__(5470);
		var _step_4 = _interopRequireDefault(_step_3);
		var _saved_objects = __webpack_require__(54);
		var _timefilter = __webpack_require__(27);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var _module = _modules.uiModules.get("app/visualize", ["kibana/courier"]);
		_routes2.default.when("/visualize/step/1",
		{
			redirectTo: _visualize_constants.VisualizeConstants.WIZARD_STEP_1_PAGE_PATH
		});
		_routes2.default.when(_visualize_constants.VisualizeConstants.WIZARD_STEP_1_PAGE_PATH,
		{
			template: _step_2.default,
			controller: "VisualizeWizardStep1"
		});
		_module.controller("VisualizeWizardStep1", function ($scope, $route, kbnUrl, Private, config)
		{
			_timefilter.timefilter.disableAutoRefreshSelector();
			_timefilter.timefilter.disableTimeRangeSelector();
			var addToDashMode = $route.current.params[_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM];
			kbnUrl.removeParam(_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM);
			var visTypes = Private(_vis_types.VisTypesRegistryProvider);
			var isLabsEnabled = config.get("visualize:enableLabs");
			$scope.toggleLabView = function ()
			{
				$route.current.params.lab = !$route.current.params.lab;
				$route.updateParams($route.current.params);
				$route.reload()
			};
			var categoryToVisTypesMap = {};
			visTypes.forEach(function (visType)
			{
				var categoryName = visType.category;
				if (categoryName === _vis_category.CATEGORY.HIDDEN) return;
				if (!isLabsEnabled && "lab" === visType.stage) return;
				_vis_category.CATEGORY_DISPLAY_NAMES[categoryName] || (categoryName = _vis_category.CATEGORY.OTHER);
				categoryToVisTypesMap[categoryName] || (categoryToVisTypesMap[categoryName] = {
					label: _vis_category.CATEGORY_DISPLAY_NAMES[categoryName],
					list: []
				});
				var categoryVisTypes = categoryToVisTypesMap[categoryName];
				categoryVisTypes.list = _lodash2.default.sortBy(categoryVisTypes.list.concat(visType), function (type)
				{
					return type.title
				})
			});
			var sortedVisTypeCategories = Object.values(categoryToVisTypesMap).sort(function (a, b)
			{
				var other = _vis_category.CATEGORY.OTHER.toLowerCase();
				var labelA = a.label.toLowerCase();
				if (labelA === other) return 1;
				var labelB = b.label.toLowerCase();
				if (labelB === other) return -1;
				if (labelA < labelB) return -1;
				if (labelA > labelB) return 1;
				return 0
			});
			$scope.searchTerm = "";
			$scope.filteredVisTypeCategories = [];
			$scope.$watch("searchTerm", function ()
			{
				function getVisTypeCategories()
				{
					var normalizedSearchTerm = $scope.searchTerm.toLowerCase().trim();
					var filteredVisTypeCategories = sortedVisTypeCategories.map(function (category)
					{
						if (category.label.toLowerCase().includes(normalizedSearchTerm)) return category;
						var filteredVisTypes = category.list.filter(function (visType)
						{
							return visType.title.toLowerCase().includes(normalizedSearchTerm)
						});
						return {
							label: category.label,
							list: filteredVisTypes
						}
					});
					return filteredVisTypeCategories.filter(function (category)
					{
						return category.list.length
					})
				}
				$scope.filteredVisTypeCategories = getVisTypeCategories()
			});
			$scope.getVisTypeId = function (type)
			{
				return _lodash2.default.camelCase(type.name)
			};
			$scope.getVisTypeTooltip = function (type)
			{
				var prefix = "";
				"lab" === type.stage ? prefix = "(Lab)" : "experimental" === type.stage && (prefix = "(Experimental)");
				return prefix + " " + type.description
			};
			$scope.getVisTypeTooltipPosition = function (index)
			{
				if (index === $scope.filteredVisTypeCategories.length - 1) return "top";
				return "bottom"
			};
			$scope.getVisTypeUrl = function (visType)
			{
				var baseUrl = visType.requiresSearch && visType.options.showIndexSelection ? "#" + _visualize_constants.VisualizeConstants.WIZARD_STEP_2_PAGE_PATH + "?" : "#" + _visualize_constants.VisualizeConstants.CREATE_PATH + "?";
				var params = ["type=" + encodeURIComponent(visType.name)];
				addToDashMode && params.push(_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM);
				return baseUrl + params.join("&")
			}
		});
		_routes2.default.when("/visualize/step/2",
		{
			redirectTo: _visualize_constants.VisualizeConstants.WIZARD_STEP_1_PAGE_PATH
		});
		_routes2.default.when(_visualize_constants.VisualizeConstants.WIZARD_STEP_2_PAGE_PATH,
		{
			template: _step_4.default,
			controller: "VisualizeWizardStep2",
			resolve:
			{
				indexPatterns: function indexPatterns(Private)
				{
					var savedObjectsClient = Private(_saved_objects.SavedObjectsClientProvider);
					return savedObjectsClient.find(
					{
						type: "index-pattern",
						fields: ["title"],
						perPage: 1e4
					}).then(function (response)
					{
						return response.savedObjects
					})
				}
			}
		});
		_module.controller("VisualizeWizardStep2", function ($route, $scope, kbnUrl)
		{
			var type = $route.current.params.type;
			var addToDashMode = $route.current.params[_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM];
			kbnUrl.removeParam(_dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM);
			$scope.step2WithSearchUrl = function (hit)
			{
				if (addToDashMode) return kbnUrl.eval("#" + _visualize_constants.VisualizeConstants.CREATE_PATH + "?type={{type}}&savedSearchId={{id}}&" + _dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM,
				{
					type: type,
					id: hit.id
				});
				return kbnUrl.eval("#" + _visualize_constants.VisualizeConstants.CREATE_PATH + "?type={{type}}&savedSearchId={{id}}",
				{
					type: type,
					id: hit.id
				})
			};
			_timefilter.timefilter.disableAutoRefreshSelector();
			_timefilter.timefilter.disableTimeRangeSelector();
			$scope.indexPattern = {
				selection: null,
				list: $route.current.locals.indexPatterns
			};
			$scope.makeUrl = function (pattern)
			{
				if (!pattern) return;
				if (addToDashMode) return "#" + _visualize_constants.VisualizeConstants.CREATE_PATH + "?" + _dashboard_constants.DashboardConstants.ADD_VISUALIZATION_TO_DASHBOARD_MODE_PARAM + "&type=" + type + "&indexPattern=" + pattern.id;
				return "#" + _visualize_constants.VisualizeConstants.CREATE_PATH + "?type=" + type + "&indexPattern=" + pattern.id
			}
		})
	},
	5469: function (module, exports)
	{
		module.exports = '<!-- Local nav. -->\n<kbn-top-nav name="visualize">\n  <!-- Transcluded elements. -->\n  <div data-transclude-slots>\n    <!-- Breadcrumbs. -->\n    <bread-crumbs\n      data-transclude-slot="topLeftCorner"\n      use-links="true"\n      omit-current-page="true"\n      page-title="\'New\'"\n    ></bread-crumbs>\n  </div>\n</kbn-top-nav>\n\n<div class="kuiViewContent kuiViewContent--constrainedWidth kuiViewContentItem" data-test-subj="visualizeSelectTypePage">\n  <div class="kuiViewContentItem">\n    <!-- Header -->\n    <div class="visualizeViewContentHeader kuiVerticalRhythm kuiVerticalRhythm--medium">\n      <h1 class="kuiTitle">\n        Select visualization type\n      </h1>\n    </div>\n\n    <!-- Search -->\n    <div class="kuiSearchInput kuiVerticalRhythm kuiVerticalRhythm--medium fullWidth" role="search">\n      <icon class="kuiSearchInput__icon kuiIcon fa-search"></icon>\n      <input\n        class="kuiSearchInput__input"\n        type="text"\n        placeholder="Search visualization types..."\n        ng-model="searchTerm"\n      >\n    </div>\n    <div\n      class="kuiVerticalRhythm kuiVerticalRhythm--medium"\n      ng-repeat="category in filteredVisTypeCategories"\n    >\n\n      <!-- Title for each category -->\n      <h2 class="kuiSubTitle kuiVerticalRhythm">\n        {{ category.label }}\n      </h2>\n\n      <!-- Gallery of buttons for each vis type -->\n      <div class="kuiGallery kuiVerticalRhythm">\n        <a\n          class="kuiGalleryItem"\n          ng-repeat="type in category.list"\n          ng-href="{{ getVisTypeUrl(type) }}"\n          tooltip="{{ getVisTypeTooltip(type) }}"\n          tooltip-placement="{{ getVisTypeTooltipPosition($parent.$index) }}"\n          aria-describedby="visDescription_{{ ::getVisTypeId(type) }}"\n          data-test-subj="visType-{{::type.name}}"\n        >\n          <div class="kuiGalleryItem__image">\n            <img\n              class="visWizard__visTypeImage"\n              ng-if="type.image"\n              aria-hidden="true"\n              ng-src="{{ type.image }}"\n            />\n\n            <!-- Allowing legacyIcon to hold a CSS name, will be removed in 7.0 -->\n            <span\n              ng-if="!type.image && !type.icon"\n              aria-hidden="true"\n              class="kuiIcon visWizard__visTypeIcon"\n              ng-class="type.legacyIcon"\n            ></span>\n\n            <!-- If there\'s no image, default to an icon, for BWC. -->\n            <icon\n              ng-if="!type.image && type.icon"\n              aria-hidden="true"\n              class="kuiIcon visWizard__visTypeIcon"\n              type="type.icon"\n              size="\'xxl\'"\n            ></icon>\n          </div>\n\n          <div\n            class="kuiGalleryItem__label"\n            data-test-subj="visualizeWizardChartTypeTitle"\n          >\n            {{ type.title }}\n          </div>\n\n          <div\n            class="kuiGalleryItem__icon kuiIcon fa-flask"\n            ng-if="type.shouldMarkAsExperimentalInUI()"\n          ></div>\n\n          <span\n            class="euiScreenReaderOnly"\n            aria-hidden="true"\n            id="visDescription_{{ ::getVisTypeId(type) }}"\n          >{{::getVisTypeTooltip(type)}}</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n'
	},
	5470: function (module, exports)
	{
		module.exports = '<!-- Local nav. -->\n<kbn-top-nav name="visualize">\n  <!-- Transcluded elements. -->\n  <div data-transclude-slots>\n    <!-- Breadcrumbs. -->\n    <bread-crumbs\n      data-transclude-slot="topLeftCorner"\n      use-links="true"\n      omit-current-page="true"\n      page-title="\'Choose search source\'"\n    ></bread-crumbs>\n  </div>\n</kbn-top-nav>\n\n<div class="kuiViewContent kuiViewContent--constrainedWidth kuiViewContentItem" data-test-subj="visualizeSelectSearch">\n  <div class="visWizard kuiViewContentItem">\n    <div class="visWizard__column visWizard__column--small">\n      <h2 class="kuiTitle kuiVerticalRhythm">\n        From a New Search, Select Index\n      </h2>\n\n      <paginated-selectable-list\n        per-page="20"\n        list="indexPattern.list"\n        list-property="attributes.title"\n        user-make-url="makeUrl"\n        class="visWizard__row visWizard__list--paginated--selectable kuiVerticalRhythm"\n        disable-auto-focus="true"\n      ></paginated-selectable-list>\n    </div>\n\n    <div class="visWizard__column visWizard__column--large">\n      <h2 class="kuiTitle kuiVerticalRhythm">\n        Or, From a Saved Search\n      </h2>\n\n      <!-- Saved searches -->\n      <saved-object-finder\n        type="searches"\n        class="visWizard__row visWizard__savedObjectFinder kuiVerticalRhythm"\n        make-url="step2WithSearchUrl"\n        disable-auto-focus="true"\n      ></saved-object-finder>\n    </div>\n  </div>\n</div>\n'
	},
	5471: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _dragula = __webpack_require__(5472);
		var _dragula2 = _interopRequireDefault(_dragula);
		var _modules = __webpack_require__(2);
		var _collection = __webpack_require__(367);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_modules.uiModules.get("kibana").directive("draggableContainer", function ()
		{
			var $scopes = new WeakMap;
			return {
				restrict: "A",
				scope: true,
				controllerAs: "draggableContainerCtrl",
				controller: function controller($scope, $attrs, $parse, $element)
				{
					$scopes.set($element.get(0), $scope);
					this.linkDraggableItem = function (el, $scope)
					{
						$scopes.set(el, $scope)
					};
					this.getList = function ()
					{
						return $parse($attrs.draggableContainer)($scope)
					}
				},
				link: function link($scope, $el)
				{
					var drake = (0, _dragula2.default)(
					{
						containers: $el.toArray(),
						moves: function moves(el, source, handle)
						{
							var itemScope = $scopes.get(el);
							if (!itemScope || !("draggableItemCtrl" in itemScope)) return;
							return itemScope.draggableItemCtrl.moves(handle)
						}
					});
					var drakeEvents = ["cancel", "cloned", "drag", "dragend", "drop", "out", "over", "remove", "shadow"];
					var prettifiedDrakeEvents = {
						drag: "start",
						dragend: "end"
					};
					drakeEvents.forEach(function (type)
					{
						drake.on(type, function (el)
						{
							for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
							return forwardEvent.apply(void 0, [type, el].concat(args))
						})
					});
					drake.on("drag", markDragging(true));
					drake.on("dragend", markDragging(false));
					drake.on("drop", drop);
					$scope.$on("$destroy", drake.destroy);
					$scope.drake = drake;

					function markDragging(isDragging)
					{
						return function (el)
						{
							var scope = $scopes.get(el);
							if (!scope) return;
							scope.isDragging = isDragging;
							scope.$apply()
						}
					}

					function forwardEvent(type, el)
					{
						var name = "drag-" + (prettifiedDrakeEvents[type] || type);
						var scope = $scopes.get(el);
						if (!scope) return;
						for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) args[_key2 - 2] = arguments[_key2];
						scope.$broadcast.apply(scope, [name, el].concat(args))
					}

					function drop(el, target, source, sibling)
					{
						var list = $scope.draggableContainerCtrl.getList();
						var itemScope = $scopes.get(el);
						if (!itemScope) return;
						var item = itemScope.draggableItemCtrl.getItem();
						var fromIndex = list.indexOf(item);
						var siblingIndex = getItemIndexFromElement(list, sibling);
						var toIndex = getTargetIndex(list, fromIndex, siblingIndex);
						(0, _collection.move)(list, item, toIndex)
					}

					function getTargetIndex(list, fromIndex, siblingIndex)
					{
						if (-1 === siblingIndex) return list.length - 1;
						if (fromIndex < siblingIndex) return siblingIndex - 1;
						return siblingIndex
					}

					function getItemIndexFromElement(list, element)
					{
						if (!element) return -1;
						var scope = $scopes.get(element);
						if (!scope) return;
						var item = scope.draggableItemCtrl.getItem();
						var index = list.indexOf(item);
						return index
					}
				}
			}
		})
	},
	5472: function (module, exports, __webpack_require__)
	{
		"use strict";
		(function (global)
		{
			var emitter = __webpack_require__(5473);
			var crossvent = __webpack_require__(5477);
			var classes = __webpack_require__(5480);
			var doc = document;
			var documentElement = doc.documentElement;

			function dragula(initialContainers, options)
			{
				var len = arguments.length;
				if (1 === len && false === Array.isArray(initialContainers))
				{
					options = initialContainers;
					initialContainers = []
				}
				var _mirror;
				var _source;
				var _item;
				var _offsetX;
				var _offsetY;
				var _moveX;
				var _moveY;
				var _initialSibling;
				var _currentSibling;
				var _copy;
				var _renderTimer;
				var _lastDropTarget = null;
				var _grabbed;
				var o = options ||
				{};
				void 0 === o.moves && (o.moves = always);
				void 0 === o.accepts && (o.accepts = always);
				void 0 === o.invalid && (o.invalid = invalidTarget);
				void 0 === o.containers && (o.containers = initialContainers || []);
				void 0 === o.isContainer && (o.isContainer = never);
				void 0 === o.copy && (o.copy = false);
				void 0 === o.copySortSource && (o.copySortSource = false);
				void 0 === o.revertOnSpill && (o.revertOnSpill = false);
				void 0 === o.removeOnSpill && (o.removeOnSpill = false);
				void 0 === o.direction && (o.direction = "vertical");
				void 0 === o.ignoreInputTextSelection && (o.ignoreInputTextSelection = true);
				void 0 === o.mirrorContainer && (o.mirrorContainer = doc.body);
				var drake = emitter(
				{
					containers: o.containers,
					start: manualStart,
					end: end,
					cancel: cancel,
					remove: remove,
					destroy: destroy,
					canMove: canMove,
					dragging: false
				});
				true === o.removeOnSpill && drake.on("over", spillOver).on("out", spillOut);
				events();
				return drake;

				function isContainer(el)
				{
					return -1 !== drake.containers.indexOf(el) || o.isContainer(el)
				}

				function events(remove)
				{
					var op = remove ? "remove" : "add";
					touchy(documentElement, op, "mousedown", grab);
					touchy(documentElement, op, "mouseup", release)
				}

				function eventualMovements(remove)
				{
					var op = remove ? "remove" : "add";
					touchy(documentElement, op, "mousemove", startBecauseMouseMoved)
				}

				function movements(remove)
				{
					var op = remove ? "remove" : "add";
					crossvent[op](documentElement, "selectstart", preventGrabbed);
					crossvent[op](documentElement, "click", preventGrabbed)
				}

				function destroy()
				{
					events(true);
					release(
					{})
				}

				function preventGrabbed(e)
				{
					_grabbed && e.preventDefault()
				}

				function grab(e)
				{
					_moveX = e.clientX;
					_moveY = e.clientY;
					var ignore = 1 !== whichMouseButton(e) || e.metaKey || e.ctrlKey;
					if (ignore) return;
					var item = e.target;
					var context = canStart(item);
					if (!context) return;
					_grabbed = context;
					eventualMovements();
					"mousedown" === e.type && (isInput(item) ? item.focus() : e.preventDefault())
				}

				function startBecauseMouseMoved(e)
				{
					if (!_grabbed) return;
					if (0 === whichMouseButton(e))
					{
						release(
						{});
						return
					}
					if (void 0 !== e.clientX && e.clientX === _moveX && void 0 !== e.clientY && e.clientY === _moveY) return;
					if (o.ignoreInputTextSelection)
					{
						var clientX = getCoord("clientX", e);
						var clientY = getCoord("clientY", e);
						var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
						if (isInput(elementBehindCursor)) return
					}
					var grabbed = _grabbed;
					eventualMovements(true);
					movements();
					end();
					start(grabbed);
					var offset = getOffset(_item);
					_offsetX = getCoord("pageX", e) - offset.left;
					_offsetY = getCoord("pageY", e) - offset.top;
					classes.add(_copy || _item, "gu-transit");
					renderMirrorImage();
					drag(e)
				}

				function canStart(item)
				{
					if (drake.dragging && _mirror) return;
					if (isContainer(item)) return;
					var handle = item;
					while (getParent(item) && false === isContainer(getParent(item)))
					{
						if (o.invalid(item, handle)) return;
						item = getParent(item);
						if (!item) return
					}
					var source = getParent(item);
					if (!source) return;
					if (o.invalid(item, handle)) return;
					var movable = o.moves(item, source, handle, nextEl(item));
					if (!movable) return;
					return {
						item: item,
						source: source
					}
				}

				function canMove(item)
				{
					return !!canStart(item)
				}

				function manualStart(item)
				{
					var context = canStart(item);
					context && start(context)
				}

				function start(context)
				{
					if (isCopy(context.item, context.source))
					{
						_copy = context.item.cloneNode(true);
						drake.emit("cloned", _copy, context.item, "copy")
					}
					_source = context.source;
					_item = context.item;
					_initialSibling = _currentSibling = nextEl(context.item);
					drake.dragging = true;
					drake.emit("drag", _item, _source)
				}

				function invalidTarget()
				{
					return false
				}

				function end()
				{
					if (!drake.dragging) return;
					var item = _copy || _item;
					drop(item, getParent(item))
				}

				function ungrab()
				{
					_grabbed = false;
					eventualMovements(true);
					movements(true)
				}

				function release(e)
				{
					ungrab();
					if (!drake.dragging) return;
					var item = _copy || _item;
					var clientX = getCoord("clientX", e);
					var clientY = getCoord("clientY", e);
					var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
					var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
					dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source) ? drop(item, dropTarget) : o.removeOnSpill ? remove() : cancel()
				}

				function drop(item, target)
				{
					var parent = getParent(item);
					_copy && o.copySortSource && target === _source && parent.removeChild(_item);
					isInitialPlacement(target) ? drake.emit("cancel", item, _source, _source) : drake.emit("drop", item, target, _source, _currentSibling);
					cleanup()
				}

				function remove()
				{
					if (!drake.dragging) return;
					var item = _copy || _item;
					var parent = getParent(item);
					parent && parent.removeChild(item);
					drake.emit(_copy ? "cancel" : "remove", item, parent, _source);
					cleanup()
				}

				function cancel(revert)
				{
					if (!drake.dragging) return;
					var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
					var item = _copy || _item;
					var parent = getParent(item);
					var initial = isInitialPlacement(parent);
					false === initial && reverts && (_copy ? parent.removeChild(_copy) : _source.insertBefore(item, _initialSibling));
					initial || reverts ? drake.emit("cancel", item, _source, _source) : drake.emit("drop", item, parent, _source, _currentSibling);
					cleanup()
				}

				function cleanup()
				{
					var item = _copy || _item;
					ungrab();
					removeMirrorImage();
					item && classes.rm(item, "gu-transit");
					_renderTimer && clearTimeout(_renderTimer);
					drake.dragging = false;
					_lastDropTarget && drake.emit("out", item, _lastDropTarget, _source);
					drake.emit("dragend", item);
					_source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null
				}

				function isInitialPlacement(target, s)
				{
					var sibling;
					sibling = void 0 !== s ? s : _mirror ? _currentSibling : nextEl(_copy || _item);
					return target === _source && sibling === _initialSibling
				}

				function findDropTarget(elementBehindCursor, clientX, clientY)
				{
					var target = elementBehindCursor;
					while (target && !accepted()) target = getParent(target);
					return target;

					function accepted()
					{
						var droppable = isContainer(target);
						if (false === droppable) return false;
						var immediate = getImmediateChild(target, elementBehindCursor);
						var reference = getReference(target, immediate, clientX, clientY);
						var initial = isInitialPlacement(target, reference);
						if (initial) return true;
						return o.accepts(_item, target, _source, reference)
					}
				}

				function drag(e)
				{
					if (!_mirror) return;
					e.preventDefault();
					var clientX = getCoord("clientX", e);
					var clientY = getCoord("clientY", e);
					var x = clientX - _offsetX;
					var y = clientY - _offsetY;
					_mirror.style.left = x + "px";
					_mirror.style.top = y + "px";
					var item = _copy || _item;
					var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
					var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
					var changed = null !== dropTarget && dropTarget !== _lastDropTarget;
					if (changed || null === dropTarget)
					{
						out();
						_lastDropTarget = dropTarget;
						over()
					}
					var parent = getParent(item);
					if (dropTarget === _source && _copy && !o.copySortSource)
					{
						parent && parent.removeChild(item);
						return
					}
					var reference;
					var immediate = getImmediateChild(dropTarget, elementBehindCursor);
					if (null !== immediate) reference = getReference(dropTarget, immediate, clientX, clientY);
					else
					{
						if (true !== o.revertOnSpill || _copy)
						{
							_copy && parent && parent.removeChild(item);
							return
						}
						reference = _initialSibling;
						dropTarget = _source
					}
					if (null === reference && changed || reference !== item && reference !== nextEl(item))
					{
						_currentSibling = reference;
						dropTarget.insertBefore(item, reference);
						drake.emit("shadow", item, dropTarget, _source)
					}

					function moved(type)
					{
						drake.emit(type, item, _lastDropTarget, _source)
					}

					function over()
					{
						changed && moved("over")
					}

					function out()
					{
						_lastDropTarget && moved("out")
					}
				}

				function spillOver(el)
				{
					classes.rm(el, "gu-hide")
				}

				function spillOut(el)
				{
					drake.dragging && classes.add(el, "gu-hide")
				}

				function renderMirrorImage()
				{
					if (_mirror) return;
					var rect = _item.getBoundingClientRect();
					_mirror = _item.cloneNode(true);
					_mirror.style.width = getRectWidth(rect) + "px";
					_mirror.style.height = getRectHeight(rect) + "px";
					classes.rm(_mirror, "gu-transit");
					classes.add(_mirror, "gu-mirror");
					o.mirrorContainer.appendChild(_mirror);
					touchy(documentElement, "add", "mousemove", drag);
					classes.add(o.mirrorContainer, "gu-unselectable");
					drake.emit("cloned", _mirror, _item, "mirror")
				}

				function removeMirrorImage()
				{
					if (_mirror)
					{
						classes.rm(o.mirrorContainer, "gu-unselectable");
						touchy(documentElement, "remove", "mousemove", drag);
						getParent(_mirror).removeChild(_mirror);
						_mirror = null
					}
				}

				function getImmediateChild(dropTarget, target)
				{
					var immediate = target;
					while (immediate !== dropTarget && getParent(immediate) !== dropTarget) immediate = getParent(immediate);
					if (immediate === documentElement) return null;
					return immediate
				}

				function getReference(dropTarget, target, x, y)
				{
					var horizontal = "horizontal" === o.direction;
					var reference = target !== dropTarget ? inside() : outside();
					return reference;

					function outside()
					{
						var len = dropTarget.children.length;
						var i;
						var el;
						var rect;
						for (i = 0; i < len; i++)
						{
							el = dropTarget.children[i];
							rect = el.getBoundingClientRect();
							if (horizontal && rect.left + rect.width / 2 > x) return el;
							if (!horizontal && rect.top + rect.height / 2 > y) return el
						}
						return null
					}

					function inside()
					{
						var rect = target.getBoundingClientRect();
						if (horizontal) return resolve(x > rect.left + getRectWidth(rect) / 2);
						return resolve(y > rect.top + getRectHeight(rect) / 2)
					}

					function resolve(after)
					{
						return after ? nextEl(target) : target
					}
				}

				function isCopy(item, container)
				{
					return "boolean" === typeof o.copy ? o.copy : o.copy(item, container)
				}
			}

			function touchy(el, op, type, fn)
			{
				var touch = {
					mouseup: "touchend",
					mousedown: "touchstart",
					mousemove: "touchmove"
				};
				var pointers = {
					mouseup: "pointerup",
					mousedown: "pointerdown",
					mousemove: "pointermove"
				};
				var microsoft = {
					mouseup: "MSPointerUp",
					mousedown: "MSPointerDown",
					mousemove: "MSPointerMove"
				};
				if (global.navigator.pointerEnabled) crossvent[op](el, pointers[type], fn);
				else if (global.navigator.msPointerEnabled) crossvent[op](el, microsoft[type], fn);
				else
				{
					crossvent[op](el, touch[type], fn);
					crossvent[op](el, type, fn)
				}
			}

			function whichMouseButton(e)
			{
				if (void 0 !== e.touches) return e.touches.length;
				if (void 0 !== e.which && 0 !== e.which) return e.which;
				if (void 0 !== e.buttons) return e.buttons;
				var button = e.button;
				if (void 0 !== button) return 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0
			}

			function getOffset(el)
			{
				var rect = el.getBoundingClientRect();
				return {
					left: rect.left + getScroll("scrollLeft", "pageXOffset"),
					top: rect.top + getScroll("scrollTop", "pageYOffset")
				}
			}

			function getScroll(scrollProp, offsetProp)
			{
				if ("undefined" !== typeof global[offsetProp]) return global[offsetProp];
				if (documentElement.clientHeight) return documentElement[scrollProp];
				return doc.body[scrollProp]
			}

			function getElementBehindPoint(point, x, y)
			{
				var p = point ||
				{};
				var state = p.className;
				var el;
				p.className += " gu-hide";
				el = doc.elementFromPoint(x, y);
				p.className = state;
				return el
			}

			function never()
			{
				return false
			}

			function always()
			{
				return true
			}

			function getRectWidth(rect)
			{
				return rect.width || rect.right - rect.left
			}

			function getRectHeight(rect)
			{
				return rect.height || rect.bottom - rect.top
			}

			function getParent(el)
			{
				return el.parentNode === doc ? null : el.parentNode
			}

			function isInput(el)
			{
				return "INPUT" === el.tagName || "TEXTAREA" === el.tagName || "SELECT" === el.tagName || isEditable(el)
			}

			function isEditable(el)
			{
				if (!el) return false;
				if ("false" === el.contentEditable) return false;
				if ("true" === el.contentEditable) return true;
				return isEditable(getParent(el))
			}

			function nextEl(el)
			{
				return el.nextElementSibling || manually();

				function manually()
				{
					var sibling = el;
					do {
						sibling = sibling.nextSibling
					} while (sibling && 1 !== sibling.nodeType);
					return sibling
				}
			}

			function getEventHost(e)
			{
				if (e.targetTouches && e.targetTouches.length) return e.targetTouches[0];
				if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
				return e
			}

			function getCoord(coord, e)
			{
				var host = getEventHost(e);
				var missMap = {
					pageX: "clientX",
					pageY: "clientY"
				};
				coord in missMap && !(coord in host) && missMap[coord] in host && (coord = missMap[coord]);
				return host[coord]
			}
			module.exports = dragula
		}).call(exports, __webpack_require__(24))
	},
	5473: function (module, exports, __webpack_require__)
	{
		"use strict";
		var atoa = __webpack_require__(5474);
		var debounce = __webpack_require__(5475);
		module.exports = function emitter(thing, options)
		{
			var opts = options ||
			{};
			var evt = {};
			void 0 === thing && (thing = {});
			thing.on = function (type, fn)
			{
				evt[type] ? evt[type].push(fn) : evt[type] = [fn];
				return thing
			};
			thing.once = function (type, fn)
			{
				fn._once = true;
				thing.on(type, fn);
				return thing
			};
			thing.off = function (type, fn)
			{
				var c = arguments.length;
				if (1 === c) delete evt[type];
				else if (0 === c) evt = {};
				else
				{
					var et = evt[type];
					if (!et) return thing;
					et.splice(et.indexOf(fn), 1)
				}
				return thing
			};
			thing.emit = function ()
			{
				var args = atoa(arguments);
				return thing.emitterSnapshot(args.shift()).apply(this, args)
			};
			thing.emitterSnapshot = function (type)
			{
				var et = (evt[type] || []).slice(0);
				return function ()
				{
					var args = atoa(arguments);
					var ctx = this || thing;
					if ("error" === type && false !== opts.throws && !et.length) throw 1 === args.length ? args[0] : args;
					et.forEach(function emitter(listen)
					{
						opts.async ? debounce(listen, args, ctx) : listen.apply(ctx, args);
						listen._once && thing.off(type, listen)
					});
					return thing
				}
			};
			return thing
		}
	},
	5474: function (module, exports)
	{
		module.exports = function atoa(a, n)
		{
			return Array.prototype.slice.call(a, n)
		}
	},
	5475: function (module, exports, __webpack_require__)
	{
		"use strict";
		var ticky = __webpack_require__(5476);
		module.exports = function debounce(fn, args, ctx)
		{
			if (!fn) return;
			ticky(function run()
			{
				fn.apply(ctx || null, args || [])
			})
		}
	},
	5476: function (module, exports, __webpack_require__)
	{
		(function (setImmediate)
		{
			var tick, si = "function" === typeof setImmediate;
			tick = si ? function (fn)
			{
				setImmediate(fn)
			} : function (fn)
			{
				setTimeout(fn, 0)
			};
			module.exports = tick
		}).call(exports, __webpack_require__(572).setImmediate)
	},
	5477: function (module, exports, __webpack_require__)
	{
		"use strict";
		(function (global)
		{
			var customEvent = __webpack_require__(5478);
			var eventmap = __webpack_require__(5479);
			var doc = global.document;
			var addEvent = addEventEasy;
			var removeEvent = removeEventEasy;
			var hardCache = [];
			if (!global.addEventListener)
			{
				addEvent = addEventHard;
				removeEvent = removeEventHard
			}
			module.exports = {
				add: addEvent,
				remove: removeEvent,
				fabricate: fabricateEvent
			};

			function addEventEasy(el, type, fn, capturing)
			{
				return el.addEventListener(type, fn, capturing)
			}

			function addEventHard(el, type, fn)
			{
				return el.attachEvent("on" + type, wrap(el, type, fn))
			}

			function removeEventEasy(el, type, fn, capturing)
			{
				return el.removeEventListener(type, fn, capturing)
			}

			function removeEventHard(el, type, fn)
			{
				var listener = unwrap(el, type, fn);
				if (listener) return el.detachEvent("on" + type, listener)
			}

			function fabricateEvent(el, type, model)
			{
				var e = -1 === eventmap.indexOf(type) ? makeCustomEvent() : makeClassicEvent();
				el.dispatchEvent ? el.dispatchEvent(e) : el.fireEvent("on" + type, e);

				function makeClassicEvent()
				{
					var e;
					if (doc.createEvent)
					{
						e = doc.createEvent("Event");
						e.initEvent(type, true, true)
					}
					else doc.createEventObject && (e = doc.createEventObject());
					return e
				}

				function makeCustomEvent()
				{
					return new customEvent(type,
					{
						detail: model
					})
				}
			}

			function wrapperFactory(el, type, fn)
			{
				return function wrapper(originalEvent)
				{
					var e = originalEvent || global.event;
					e.target = e.target || e.srcElement;
					e.preventDefault = e.preventDefault || function preventDefault()
					{
						e.returnValue = false
					};
					e.stopPropagation = e.stopPropagation || function stopPropagation()
					{
						e.cancelBubble = true
					};
					e.which = e.which || e.keyCode;
					fn.call(el, e)
				}
			}

			function wrap(el, type, fn)
			{
				var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
				hardCache.push(
				{
					wrapper: wrapper,
					element: el,
					type: type,
					fn: fn
				});
				return wrapper
			}

			function unwrap(el, type, fn)
			{
				var i = find(el, type, fn);
				if (i)
				{
					var wrapper = hardCache[i].wrapper;
					hardCache.splice(i, 1);
					return wrapper
				}
			}

			function find(el, type, fn)
			{
				var i, item;
				for (i = 0; i < hardCache.length; i++)
				{
					item = hardCache[i];
					if (item.element === el && item.type === type && item.fn === fn) return i
				}
			}
		}).call(exports, __webpack_require__(24))
	},
	5478: function (module, exports, __webpack_require__)
	{
		(function (global)
		{
			var NativeCustomEvent = global.CustomEvent;

			function useNative()
			{
				try
				{
					var p = new NativeCustomEvent("cat",
					{
						detail:
						{
							foo: "bar"
						}
					});
					return "cat" === p.type && "bar" === p.detail.foo
				}
				catch (e)
				{}
				return false
			}
			module.exports = useNative() ? NativeCustomEvent : "function" === typeof document.createEvent ? function CustomEvent(type, params)
			{
				var e = document.createEvent("CustomEvent");
				params ? e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail) : e.initCustomEvent(type, false, false, void 0);
				return e
			} : function CustomEvent(type, params)
			{
				var e = document.createEventObject();
				e.type = type;
				if (params)
				{
					e.bubbles = Boolean(params.bubbles);
					e.cancelable = Boolean(params.cancelable);
					e.detail = params.detail
				}
				else
				{
					e.bubbles = false;
					e.cancelable = false;
					e.detail = void 0
				}
				return e
			}
		}).call(exports, __webpack_require__(24))
	},
	5479: function (module, exports, __webpack_require__)
	{
		"use strict";
		(function (global)
		{
			var eventmap = [];
			var eventname = "";
			var ron = /^on/;
			for (eventname in global) ron.test(eventname) && eventmap.push(eventname.slice(2));
			module.exports = eventmap
		}).call(exports, __webpack_require__(24))
	},
	5480: function (module, exports, __webpack_require__)
	{
		"use strict";
		var cache = {};
		var start = "(?:^|\\s)";
		var end = "(?:\\s|$)";

		function lookupClass(className)
		{
			var cached = cache[className];
			cached ? cached.lastIndex = 0 : cache[className] = cached = new RegExp(start + className + end, "g");
			return cached
		}

		function addClass(el, className)
		{
			var current = el.className;
			current.length ? lookupClass(className).test(current) || (el.className += " " + className) : el.className = className
		}

		function rmClass(el, className)
		{
			el.className = el.className.replace(lookupClass(className), " ").trim()
		}
		module.exports = {
			add: addClass,
			rm: rmClass
		}
	},
	5481: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _jquery = __webpack_require__(16);
		var _jquery2 = _interopRequireDefault(_jquery);
		var _modules = __webpack_require__(2);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}
		_modules.uiModules.get("kibana").directive("draggableItem", function ()
		{
			return {
				restrict: "A",
				require: "^draggableContainer",
				scope: true,
				controllerAs: "draggableItemCtrl",
				controller: function controller($scope, $attrs, $parse)
				{
					var dragHandles = (0, _jquery2.default)();
					this.getItem = function ()
					{
						return $parse($attrs.draggableItem)($scope)
					};
					this.registerHandle = function ($el)
					{
						dragHandles.push.apply(dragHandles, _toConsumableArray($el))
					};
					this.moves = function (handle)
					{
						var $handle = (0, _jquery2.default)(handle);
						var $anywhereInParentChain = $handle.parents().addBack();
						var movable = dragHandles.is($anywhereInParentChain);
						return movable
					}
				},
				link: function link($scope, $el, attr, draggableController)
				{
					draggableController.linkDraggableItem($el.get(0), $scope)
				}
			}
		})
	},
	5482: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _modules = __webpack_require__(2);
		_modules.uiModules.get("kibana").directive("draggableHandle", function ()
		{
			return {
				restrict: "A",
				require: "^draggableItem",
				link: function link($scope, $el, attr, ctrl)
				{
					ctrl.registerHandle($el);
					$el.addClass("gu-handle")
				}
			}
		})
	},
	5483: function (module, exports)
	{
		module.exports = '<!-- Local nav. -->\n<kbn-top-nav name="visualize">\n  <!-- Transcluded elements. -->\n  <div data-transclude-slots>\n    <!-- Title. -->\n    <div\n      data-transclude-slot="topLeftCorner"\n    >\n      <div\n        class="kuiLocalTitle"\n        role="heading"\n        aria-level="1"\n        ng-if="listingController.showPluginBreadcrumbs">\n        Visualize\n      </div>\n    </div>\n  </div>\n</kbn-top-nav>\n\n<div class="kuiViewContent kuiViewContent--constrainedWidth kuiViewContentItem"\n     data-test-subj="visualizeLandingPage"\n>\n  <div class="kuiViewContentItem kuiVerticalRhythm" ng-if="listingController.showLimitError">\n    <div class="kuiInfoPanel kuiInfoPanel--warning">\n      <div class="kuiInfoPanelBody">\n        <div class="kuiInfoPanelBody__message">\n          You have {{ listingController.totalItems }} visualizations, but your "listingLimit" setting prevents the table below from displaying more than {{ listingController.listingLimit }}. You can change this setting under <a kbn-href="#/management/kibana/settings" class="kuiLink">Advanced Settings</a>.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <visualize-listing-table\n    fetch-items="listingController.fetchItems"\n    delete-selected-items="listingController.deleteSelectedItems"\n  ></visualize-listing-table>\n\n</div>\n'
	},
	5484: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.VisualizeListingController = VisualizeListingController;
		var _saved_object_registry = __webpack_require__(271);
		__webpack_require__(472);
		__webpack_require__(386);
		var _modules = __webpack_require__(2);
		var _timefilter = __webpack_require__(27);
		var _visualize_listing_table = __webpack_require__(5485);
		var app = _modules.uiModules.get("app/visualize", ["ngRoute", "react"]);
		app.directive("visualizeListingTable", function (reactDirective)
		{
			return reactDirective(_visualize_listing_table.VisualizeListingTable)
		});

		function VisualizeListingController($injector)
		{
			var _this = this;
			var Notifier = $injector.get("Notifier");
			var Private = $injector.get("Private");
			var config = $injector.get("config");
			var breadcrumbState = $injector.get("breadcrumbState");
			_timefilter.timefilter.disableAutoRefreshSelector();
			_timefilter.timefilter.disableTimeRangeSelector();
			var services = Private(_saved_object_registry.SavedObjectRegistryProvider).byLoaderPropertiesName;
			var visualizationService = services.visualizations;
			var notify = new Notifier(
			{
				location: "Visualize"
			});
			this.fetchItems = function (filter)
			{
				var isLabsEnabled = config.get("visualize:enableLabs");
				return visualizationService.find(filter, config.get("savedObjects:listingLimit")).then(function (result)
				{
					_this.totalItems = result.total;
					_this.showLimitError = result.total > config.get("savedObjects:listingLimit");
					_this.listingLimit = config.get("savedObjects:listingLimit");
					return result.hits.filter(function (result)
					{
						return isLabsEnabled || "lab" !== result.type.stage
					})
				})
			};
			this.deleteSelectedItems = function deleteSelectedItems(selectedIds)
			{
				return visualizationService.delete(selectedIds).catch(function (error)
				{
					return notify.error(error)
				})
			};
			breadcrumbState.set([
			{
				text: "Visualize"
			}]);
			config.watch("k7design", function (val)
			{
				return _this.showPluginBreadcrumbs = !val
			})
		}
	},
	5485: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.VisualizeListingTable = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _pager = __webpack_require__(386);
		var _no_visualizations_prompt = __webpack_require__(5486);
		var _components = __webpack_require__(322);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var VisualizeListingTable = exports.VisualizeListingTable = function (_Component)
		{
			_inherits(VisualizeListingTable, _Component);

			function VisualizeListingTable(props)
			{
				_classCallCheck(this, VisualizeListingTable);
				var _this = _possibleConstructorReturn(this, (VisualizeListingTable.__proto__ || Object.getPrototypeOf(VisualizeListingTable)).call(this, props));
				_this.calculateItemsOnPage = function ()
				{
					_this.items = _this.sortableProperties.sortItems(_this.items);
					_this.pager.setTotalItems(_this.items.length);
					var pageOfItems = _this.items.slice(_this.pager.startIndex, _this.pager.startIndex + _this.pager.pageSize);
					_this.setState(
					{
						pageOfItems: pageOfItems,
						pageStartNumber: _this.pager.startItem
					})
				};
				_this.deselectAll = function ()
				{
					_this.setState(
					{
						selectedRowIds: []
					})
				};
				_this.isAscending = function (name)
				{
					return _this.sortableProperties.isAscendingByName(name)
				};
				_this.getSortedProperty = function ()
				{
					return _this.sortableProperties.getSortedProperty()
				};
				_this.sortOn = function sortOn(propertyName)
				{
					this.sortableProperties.sortOn(propertyName);
					this.setState(
					{
						selectedRowIds: [],
						sortedColumn: this.sortableProperties.getSortedProperty().name
					});
					this.calculateItemsOnPage()
				};
				_this.fetchItems = function (filter)
				{
					_this.setState(
					{
						isFetchingItems: true,
						filter: filter
					});
					_this.debouncedFetch(filter)
				};
				_this.onNextPage = function ()
				{
					_this.deselectAll();
					_this.pager.nextPage();
					_this.calculateItemsOnPage()
				};
				_this.onPreviousPage = function ()
				{
					_this.deselectAll();
					_this.pager.previousPage();
					_this.calculateItemsOnPage()
				};
				_this.sortByTitle = function ()
				{
					return _this.sortOn("title")
				};
				_this.sortByType = function ()
				{
					return _this.sortOn("type")
				};
				_this.closeModal = function ()
				{
					_this.setState(
					{
						showDeleteModal: false
					})
				};
				_this.onDelete = function ()
				{
					_this.setState(
					{
						showDeleteModal: true
					})
				};
				_this.deleteSelectedItems = function ()
				{
					_this.props.deleteSelectedItems(_this.state.selectedRowIds).then(function ()
					{
						return _this.fetchItems(_this.state.filter)
					}).catch(function () {}).then(function ()
					{
						return _this.deselectAll()
					}).then(function ()
					{
						return _this.closeModal()
					})
				};
				_this.onItemSelectionChanged = function (newSelectedIds)
				{
					_this.setState(
					{
						selectedRowIds: newSelectedIds
					})
				};
				_this.state = {
					selectedRowIds: [],
					pageOfItems: [],
					showDeleteModal: false,
					filter: "",
					sortedColumn: "title",
					pageStartNumber: 1,
					isFetchingItems: false
				};
				_this.sortableProperties = new _eui.SortableProperties([
				{
					name: "title",
					getValue: function getValue(item)
					{
						return item.title.toLowerCase()
					},
					isAscending: true
				},
				{
					name: "type",
					getValue: function getValue(item)
					{
						return item.type.title.toLowerCase()
					},
					isAscending: true
				}], _this.state.sortedColumn);
				_this.items = [];
				_this.pager = new _pager.Pager(_this.items.length, 20, 1);
				_this.debouncedFetch = _lodash2.default.debounce(function (filter)
				{
					_this.props.fetchItems(filter).then(function (items)
					{
						if (filter === _this.state.filter)
						{
							_this.setState(
							{
								isFetchingItems: false,
								selectedRowIds: []
							});
							_this.items = items;
							_this.calculateItemsOnPage()
						}
					})
				}, 300);
				return _this
			}
			_createClass(VisualizeListingTable, [
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount()
				{
					this.debouncedFetch.cancel()
				}
			},
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					this.fetchItems(this.state.filter)
				}
			},
			{
				key: "getUrlForItem",
				value: function getUrlForItem(item)
				{
					return "#/visualize/edit/" + item.id
				}
			},
			{
				key: "renderItemTypeIcon",
				value: function renderItemTypeIcon(item)
				{
					var icon = void 0;
					icon = item.type.image ? _react2.default.createElement("img",
					{
						className: "visListingTable__typeImage",
						"aria-hidden": "true",
						src: item.type.image
					}) : item.type.image || item.type.icon ? _react2.default.createElement(_eui.EuiIcon,
					{
						className: "visListingTable__typeIcon",
						"aria-hidden": "true",
						type: item.icon,
						size: "m"
					}) : _react2.default.createElement("span",
					{
						"aria-hidden": "true",
						className: "kuiStatusText__icon kuiIcon " + item.type.legacyIcon
					});
					return icon
				}
			},
			{
				key: "renderHeader",
				value: function renderHeader()
				{
					return [
					{
						content: "Title",
						onSort: this.sortByTitle,
						isSorted: "title" === this.state.sortedColumn,
						isSortAscending: this.sortableProperties.isAscendingByName("title")
					},
					{
						content: "Type",
						onSort: this.sortByType,
						isSorted: "type" === this.state.sortedColumn,
						isSortAscending: this.sortableProperties.isAscendingByName("type")
					}]
				}
			},
			{
				key: "renderRowCells",
				value: function renderRowCells(item)
				{
					var flaskHolder = void 0;
					flaskHolder = item.type.shouldMarkAsExperimentalInUI() ? _react2.default.createElement("span",
					{
						className: "kuiIcon fa-flask ng-scope"
					}, " ") : _react2.default.createElement("span", null);
					return [_react2.default.createElement("span", null, flaskHolder, _react2.default.createElement("a",
					{
						className: "kuiLink",
						href: this.getUrlForItem(item)
					}, item.title)), _react2.default.createElement("span",
					{
						className: "kuiStatusText"
					}, this.renderItemTypeIcon(item), item.type.title)]
				}
			},
			{
				key: "createRows",
				value: function createRows()
				{
					var _this2 = this;
					return this.state.pageOfItems.map(function (item)
					{
						return {
							id: item.id,
							cells: _this2.renderRowCells(item)
						}
					})
				}
			},
			{
				key: "renderConfirmDeleteModal",
				value: function renderConfirmDeleteModal()
				{
					return _react2.default.createElement(_eui.EuiOverlayMask, null, _react2.default.createElement(_eui.EuiConfirmModal,
					{
						title: "Delete selected visualizations?",
						onCancel: this.closeModal,
						onConfirm: this.deleteSelectedItems,
						cancelButtonText: "Cancel",
						confirmButtonText: "Delete"
					}, _react2.default.createElement("p", null, "You can't recover deleted visualizations.")))
				}
			},
			{
				key: "onCreate",
				value: function onCreate()
				{
					window.location = "#/visualize/new"
				}
			},
			{
				key: "renderToolBarActions",
				value: function renderToolBarActions()
				{
					return this.state.selectedRowIds.length > 0 ? _react2.default.createElement(_components.KuiListingTableDeleteButton,
					{
						onDelete: this.onDelete,
						"aria-label": "Delete selected visualizations"
					}) : _react2.default.createElement(_components.KuiListingTableCreateButton,
					{
						onCreate: this.onCreate,
						"aria-label": "Create new visualization"
					})
				}
			},
			{
				key: "renderPager",
				value: function renderPager()
				{
					return _react2.default.createElement(_components.KuiPager,
					{
						startNumber: this.state.pageStartNumber,
						hasNextPage: this.pager.hasNextPage,
						hasPreviousPage: this.pager.hasPreviousPage,
						endNumber: this.pager.endItem,
						totalItems: this.items.length,
						onNextPage: this.onNextPage,
						onPreviousPage: this.onPreviousPage
					})
				}
			},
			{
				key: "renderPrompt",
				value: function renderPrompt()
				{
					if (this.state.isFetchingItems) return _react2.default.createElement(_components.KuiListingTableLoadingPrompt, null);
					if (0 === this.items.length)
					{
						if (this.state.filter) return _react2.default.createElement(_components.KuiListingTableNoMatchesPrompt, null);
						return _react2.default.createElement(_no_visualizations_prompt.NoVisualizationsPrompt, null)
					}
					return null
				}
			},
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement("div", null, this.state.showDeleteModal && this.renderConfirmDeleteModal(), _react2.default.createElement(_components.KuiListingTable,
					{
						pager: this.renderPager(),
						toolBarActions: this.renderToolBarActions(),
						selectedRowIds: this.state.selectedRowIds,
						rows: this.createRows(),
						header: this.renderHeader(),
						onFilter: this.fetchItems,
						filter: this.state.filter,
						prompt: this.renderPrompt(),
						onItemSelectionChanged: this.onItemSelectionChanged
					}))
				}
			}]);
			return VisualizeListingTable
		}(_react.Component);
		VisualizeListingTable.propTypes = {
			deleteSelectedItems: _propTypes2.default.func,
			fetchItems: _propTypes2.default.func
		}
	},
	5486: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.NoVisualizationsPrompt = NoVisualizationsPrompt;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _components = __webpack_require__(322);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function NoVisualizationsPrompt()
		{
			return _react2.default.createElement(_components.KuiEmptyTablePromptPanel, null, _react2.default.createElement(_components.KuiEmptyTablePrompt,
			{
				actions: _react2.default.createElement(_components.KuiLinkButton,
				{
					href: "#/visualize/new",
					buttonType: "primary",
					icon: _react2.default.createElement(_components.KuiButtonIcon,
					{
						type: "create"
					})
				}, "Create a visualization"),
				message: "Looks like you don't have any visualizations. Let's create some!"
			}))
		}
	},
	5487: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5488);
		__webpack_require__(1535);
		__webpack_require__(1726);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _app = __webpack_require__(5616);
		var _app2 = _interopRequireDefault(_app);
		var _landing = __webpack_require__(5617);
		var _landing2 = _interopRequireDefault(_landing);
		var _management = __webpack_require__(63);
		var _feature_catalogue = __webpack_require__(79);
		var _timefilter = __webpack_require__(27);
		__webpack_require__(898);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_routes2.default.when("/management",
		{
			template: _landing2.default
		});
		_routes2.default.when("/management/:section",
		{
			redirectTo: "/management"
		});
		__webpack_require__(5618)(
		{
			whenMissingRedirectTo: "/management/kibana/index"
		});
		_modules.uiModules.get("apps/management").directive("kbnManagementApp", function (Private, $location)
		{
			return {
				restrict: "E",
				template: _app2.default,
				transclude: true,
				scope:
				{
					sectionName: "@section",
					omitPages: "@omitBreadcrumbPages",
					pageTitle: "="
				},
				link: function link($scope)
				{
					_timefilter.timefilter.disableAutoRefreshSelector();
					_timefilter.timefilter.disableTimeRangeSelector();
					$scope.sections = _management.management.items.inOrder;
					$scope.section = _management.management.getSection($scope.sectionName) || _management.management;
					$scope.section && $scope.section.items.forEach(function (item)
					{
						item.active = ("#" + $location.path()).indexOf(item.url) > -1
					})
				}
			}
		});
		_modules.uiModules.get("apps/management").directive("kbnManagementLanding", function (kbnVersion)
		{
			return {
				restrict: "E",
				link: function link($scope)
				{
					$scope.sections = _management.management.items.inOrder;
					$scope.kbnVersion = kbnVersion
				}
			}
		});
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "management",
				title: "Management",
				description: "Your center console for managing the Elastic Stack.",
				icon: "managementApp",
				path: "/app/kibana#/management",
				showOnHomePage: false,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5488: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5489);
		__webpack_require__(5499);
		__webpack_require__(5521)
	},
	5489: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _management = __webpack_require__(63);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _index = __webpack_require__(5490);
		var _index2 = _interopRequireDefault(_index);
		var _feature_catalogue = __webpack_require__(79);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _reactDom = __webpack_require__(17);
		var _advanced_settings = __webpack_require__(5491);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var REACT_ADVANCED_SETTINGS_DOM_ELEMENT_ID = "reactAdvancedSettings";

		function updateAdvancedSettings($scope, config, query)
		{
			$scope.$$postDigest(function ()
			{
				var node = document.getElementById(REACT_ADVANCED_SETTINGS_DOM_ELEMENT_ID);
				if (!node) return;
				(0, _reactDom.render)(_react2.default.createElement(_advanced_settings.AdvancedSettings,
				{
					config: config,
					query: query
				}), node)
			})
		}

		function destroyAdvancedSettings()
		{
			var node = document.getElementById(REACT_ADVANCED_SETTINGS_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		}
		_routes2.default.when("/management/kibana/settings/:setting?",
		{
			template: _index2.default
		});
		_modules.uiModules.get("apps/management").directive("kbnManagementAdvanced", function (config, $route)
		{
			return {
				restrict: "E",
				link: function link($scope)
				{
					config.watchAll(function ()
					{
						updateAdvancedSettings($scope, config, $route.current.params.setting || "")
					}, $scope);
					$scope.$on("$destroy", function ()
					{
						destroyAdvancedSettings()
					});
					$route.updateParams(
					{
						setting: null
					})
				}
			}
		});
		_management.management.getSection("kibana").register("settings",
		{
			display: _i18n.i18n.translate("kbn.management.settings.sectionLabel",
			{
				defaultMessage: "Advanced Settings"
			}),
			order: 20,
			url: "#/management/kibana/settings"
		});
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "advanced_settings",
				title: "Advanced Settings",
				description: "Directly edit settings that control behavior in Kibana.",
				icon: "advancedSettingsApp",
				path: "/app/kibana#/management/kibana/settings",
				showOnHomePage: false,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5490: function (module, exports)
	{
		module.exports = '<kbn-management-app section="kibana">\n  <kbn-management-advanced>\n    <div id="reactAdvancedSettings"></div>\n  </kbn-management-advanced>\n</kbn-management-app>\n'
	},
	5491: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.AdvancedSettings = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _call_outs = __webpack_require__(5492);
		var _search = __webpack_require__(5494);
		var _form = __webpack_require__(5496);
		var _lib = __webpack_require__(580);
		var _default_component_registry = __webpack_require__(1306);
		var _component_registry = __webpack_require__(809);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var AdvancedSettings = exports.AdvancedSettings = function (_Component)
		{
			_inherits(AdvancedSettings, _Component);

			function AdvancedSettings(props)
			{
				_classCallCheck(this, AdvancedSettings);
				var _this = _possibleConstructorReturn(this, (AdvancedSettings.__proto__ || Object.getPrototypeOf(AdvancedSettings)).call(this, props));
				_initialiseProps.call(_this);
				var _this$props = _this.props,
					config = _this$props.config,
					query = _this$props.query;
				var parsedQuery = _eui.Query.parse(query ? 'ariaName:"' + (0, _lib.getAriaName)(query) + '"' : "");
				_this.init(config);
				_this.state = {
					query: parsedQuery,
					footerQueryMatched: false,
					filteredSettings: _this.mapSettings(_eui.Query.execute(parsedQuery, _this.settings))
				};
				(0, _default_component_registry.registerDefaultComponents)();
				return _this
			}
			_createClass(AdvancedSettings, [
			{
				key: "init",
				value: function init(config)
				{
					var _this2 = this;
					this.settings = this.mapConfig(config);
					this.groupedSettings = this.mapSettings(this.settings);
					this.categories = Object.keys(this.groupedSettings).sort(function (a, b)
					{
						if (a === _lib.DEFAULT_CATEGORY) return -1;
						if (b === _lib.DEFAULT_CATEGORY) return 1;
						if (a > b) return 1;
						return a === b ? 0 : -1
					});
					this.categoryCounts = Object.keys(this.groupedSettings).reduce(function (counts, category)
					{
						counts[category] = _this2.groupedSettings[category].length;
						return counts
					},
					{})
				}
			},
			{
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps)
				{
					var config = nextProps.config;
					var query = this.state.query;
					this.init(config);
					this.setState(
					{
						filteredSettings: this.mapSettings(_eui.Query.execute(query, this.settings))
					})
				}
			},
			{
				key: "mapConfig",
				value: function mapConfig(config)
				{
					var all = config.getAll();
					return Object.entries(all).map(function (setting)
					{
						return (0, _lib.toEditableConfig)(
						{
							def: setting[1],
							name: setting[0],
							value: setting[1].userValue,
							isCustom: config.isCustom(setting[0]),
							isOverridden: config.isOverridden(setting[0])
						})
					}).filter(function (c)
					{
						return !c.readonly
					}).sort(_eui.Comparators.property("name", _eui.Comparators.default("asc")))
				}
			},
			{
				key: "mapSettings",
				value: function mapSettings(settings)
				{
					return settings.reduce(function (groupedSettings, setting)
					{
						var category = setting.category[0];
						(groupedSettings[category] = groupedSettings[category] || []).push(setting);
						return groupedSettings
					},
					{})
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _state = this.state,
						filteredSettings = _state.filteredSettings,
						query = _state.query,
						footerQueryMatched = _state.footerQueryMatched;
					var PageTitle = (0, _component_registry.getSettingsComponent)(_default_component_registry.PAGE_TITLE_COMPONENT);
					var PageSubtitle = (0, _component_registry.getSettingsComponent)(_default_component_registry.PAGE_SUBTITLE_COMPONENT);
					var PageFooter = (0, _component_registry.getSettingsComponent)(_default_component_registry.PAGE_FOOTER_COMPONENT);
					return _react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_eui.EuiPage,
					{
						restrictWidth: true
					}, _react2.default.createElement("div",
					{
						className: "mgtAdvancedSettings"
					}, _react2.default.createElement(_eui.EuiFlexGroup,
					{
						gutterSize: "none"
					}, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(PageTitle, null)), _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_search.Search,
					{
						query: query,
						categories: this.categories,
						onQueryChange: this.onQueryChange
					}))), _react2.default.createElement(PageSubtitle, null), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_call_outs.CallOuts, null), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_form.Form,
					{
						settings: filteredSettings,
						categories: this.categories,
						categoryCounts: this.categoryCounts,
						clearQuery: this.clearQuery,
						save: this.saveConfig,
						clear: this.clearConfig,
						showNoResultsMessage: !footerQueryMatched
					}), _react2.default.createElement(PageFooter,
					{
						query: query,
						onQueryMatchChange: this.onFooterQueryMatchChange
					}))))
				}
			}]);
			return AdvancedSettings
		}(_react.Component);
		AdvancedSettings.propTypes = {
			config: _propTypes2.default.object.isRequired,
			query: _propTypes2.default.string
		};
		var _initialiseProps = function _initialiseProps()
		{
			var _this3 = this;
			this.saveConfig = function (name, value)
			{
				return _this3.props.config.set(name, value)
			};
			this.clearConfig = function (name)
			{
				return _this3.props.config.remove(name)
			};
			this.onQueryChange = function (_ref)
			{
				var query = _ref.query;
				_this3.setState(
				{
					query: query,
					filteredSettings: _this3.mapSettings(_eui.Query.execute(query, _this3.settings))
				})
			};
			this.clearQuery = function ()
			{
				_this3.setState(
				{
					query: _eui.Query.parse(""),
					footerQueryMatched: false,
					filteredSettings: _this3.groupedSettings
				})
			};
			this.onFooterQueryMatchChange = function (matched)
			{
				_this3.setState(
				{
					footerQueryMatched: matched
				})
			}
		}
	},
	5492: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _call_outs = __webpack_require__(5493);
		Object.defineProperty(exports, "CallOuts",
		{
			enumerable: true,
			get: function get()
			{
				return _call_outs.CallOuts
			}
		})
	},
	5493: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.CallOuts = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.CallOuts = function CallOuts()
		{
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiCallOut,
			{
				title: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.settings.callOutCautionTitle",
					defaultMessage: "Caution: You can break stuff here"
				}),
				color: "warning",
				iconType: "bolt"
			}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.settings.callOutCautionDescription",
				defaultMessage: "Be careful in here, these settings are for very advanced users only. Tweaks you make here can break large portions of Kibana. Some of these settings may be undocumented, unsupported or experimental. If a field has a default value, blanking the field will reset it to its default which may be unacceptable given other configuration directives. Deleting a custom setting will permanently remove it from Kibana's config."
			}))))
		}
	},
	5494: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _search = __webpack_require__(5495);
		Object.defineProperty(exports, "Search",
		{
			enumerable: true,
			get: function get()
			{
				return _search.Search
			}
		})
	},
	5495: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Search = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _react3 = __webpack_require__(8);
		var _eui = __webpack_require__(3);
		var _lib = __webpack_require__(580);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var SearchUI = function (_PureComponent)
		{
			_inherits(SearchUI, _PureComponent);

			function SearchUI(props)
			{
				_classCallCheck(this, SearchUI);
				var _this = _possibleConstructorReturn(this, (SearchUI.__proto__ || Object.getPrototypeOf(SearchUI)).call(this, props));
				_this.state = {
					isSearchTextValid: true,
					parseErrorMessage: null
				};
				_this.onChange = function (_ref)
				{
					var query = _ref.query,
						error = _ref.error;
					if (error)
					{
						_this.setState(
						{
							isSearchTextValid: false,
							parseErrorMessage: error.message
						});
						return
					}
					_this.setState(
					{
						isSearchTextValid: true,
						parseErrorMessage: null
					});
					_this.props.onQueryChange(
					{
						query: query
					})
				};
				var categories = props.categories;
				_this.categories = categories.map(function (category)
				{
					return {
						value: category,
						name: (0, _lib.getCategoryName)(category)
					}
				});
				return _this
			}
			_createClass(SearchUI, [
			{
				key: "render",
				value: function render()
				{
					var _props = this.props,
						query = _props.query,
						intl = _props.intl;
					var box = {
						incremental: true,
						"data-test-subj": "settingsSearchBar",
						"aria-label": intl.formatMessage(
						{
							id: "kbn.management.settings.searchBarAriaLabel",
							defaultMessage: "Search advanced settings"
						})
					};
					var filters = [
					{
						type: "field_value_selection",
						field: "category",
						name: intl.formatMessage(
						{
							id: "kbn.management.settings.categorySearchLabel",
							defaultMessage: "Category"
						}),
						multiSelect: "or",
						options: this.categories
					}];
					var queryParseError = void 0;
					if (!this.state.isSearchTextValid)
					{
						var parseErrorMsg = intl.formatMessage(
						{
							id: "kbn.management.settings.searchBar.unableToParseQueryErrorMessage",
							defaultMessage: "Unable to parse query"
						});
						queryParseError = _react2.default.createElement(_eui.EuiFormErrorText, null, parseErrorMsg + ". " + this.state.parseErrorMessage)
					}
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSearchBar,
					{
						box: box,
						filters: filters,
						onChange: this.onChange,
						query: query
					}), queryParseError)
				}
			}]);
			return SearchUI
		}(_react.PureComponent);
		SearchUI.propTypes = {
			categories: _propTypes2.default.array.isRequired,
			query: _propTypes2.default.object.isRequired,
			onQueryChange: _propTypes2.default.func.isRequired
		};
		exports.Search = (0, _react3.injectI18n)(SearchUI)
	},
	5496: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _form = __webpack_require__(5497);
		Object.defineProperty(exports, "Form",
		{
			enumerable: true,
			get: function get()
			{
				return _form.Form
			}
		})
	},
	5497: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Form = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _lib = __webpack_require__(580);
		var _field = __webpack_require__(5498);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var FormUI = function (_PureComponent)
		{
			_inherits(FormUI, _PureComponent);

			function FormUI()
			{
				_classCallCheck(this, FormUI);
				return _possibleConstructorReturn(this, (FormUI.__proto__ || Object.getPrototypeOf(FormUI)).apply(this, arguments))
			}
			_createClass(FormUI, [
			{
				key: "renderClearQueryLink",
				value: function renderClearQueryLink(totalSettings, currentSettings)
				{
					var clearQuery = this.props.clearQuery;
					if (totalSettings !== currentSettings) return _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement("em", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.settings.form.searchResultText",
						defaultMessage: "Search terms are hiding {settingsCount} settings {clearSearch}",
						values:
						{
							settingsCount: totalSettings - currentSettings,
							clearSearch: _react2.default.createElement(_eui.EuiLink,
							{
								onClick: clearQuery
							}, _react2.default.createElement("em", null, _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.settings.form.clearSearchResultText",
								defaultMessage: "(clear search)"
							})))
						}
					})));
					return null
				}
			},
			{
				key: "renderCategory",
				value: function renderCategory(category, settings, totalSettings)
				{
					var _this2 = this;
					return _react2.default.createElement(_react.Fragment,
					{
						key: category
					}, _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, _react2.default.createElement(_eui.EuiForm, null, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement(_eui.EuiFlexGroup,
					{
						alignItems: "baseline"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement("h2", null, (0, _lib.getCategoryName)(category))), this.renderClearQueryLink(totalSettings, settings.length))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), settings.map(function (setting)
					{
						return _react2.default.createElement(_field.Field,
						{
							key: setting.name,
							setting: setting,
							save: _this2.props.save,
							clear: _this2.props.clear
						})
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					}))
				}
			},
			{
				key: "maybeRenderNoSettings",
				value: function maybeRenderNoSettings(clearQuery)
				{
					if (this.props.showNoResultsMessage) return _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.settings.form.noSearchResultText",
						defaultMessage: "No settings found {clearSearch}",
						values:
						{
							clearSearch: _react2.default.createElement(_eui.EuiLink,
							{
								onClick: clearQuery
							}, _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.settings.form.clearNoSearchResultText",
								defaultMessage: "(clear search)"
							}))
						}
					}));
					return null
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _this3 = this;
					var _props = this.props,
						settings = _props.settings,
						categories = _props.categories,
						categoryCounts = _props.categoryCounts,
						clearQuery = _props.clearQuery;
					var currentCategories = [];
					categories.forEach(function (category)
					{
						settings[category] && settings[category].length && currentCategories.push(category)
					});
					return _react2.default.createElement(_react.Fragment, null, currentCategories.length ? currentCategories.map(function (category)
					{
						return _this3.renderCategory(category, settings[category], categoryCounts[category])
					}) : this.maybeRenderNoSettings(clearQuery))
				}
			}]);
			return FormUI
		}(_react.PureComponent);
		FormUI.propTypes = {
			settings: _propTypes2.default.object.isRequired,
			categories: _propTypes2.default.array.isRequired,
			categoryCounts: _propTypes2.default.object.isRequired,
			clearQuery: _propTypes2.default.func.isRequired,
			save: _propTypes2.default.func.isRequired,
			clear: _propTypes2.default.func.isRequired,
			showNoResultsMessage: _propTypes2.default.bool.isRequired
		};
		exports.Form = (0, _react3.injectI18n)(FormUI)
	},
	5498: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _field = __webpack_require__(1309);
		Object.defineProperty(exports, "Field",
		{
			enumerable: true,
			get: function get()
			{
				return _field.Field
			}
		})
	},
	5499: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _i18n = __webpack_require__(12);
		var _management = __webpack_require__(63);
		__webpack_require__(5500);
		__webpack_require__(5502);
		__webpack_require__(282);
		__webpack_require__(1532);
		var _modules = __webpack_require__(2);
		var _feature_catalogue = __webpack_require__(79);
		_modules.uiModules.get("apps/management");
		/*
		_management.management.getSection("kibana").register("objects",
		{
			display: _i18n.i18n.translate("kbn.management.objects.savedObjectsSectionLabel",
			{
				defaultMessage: "Saved Objects"
			}),
			order: 10,
			url: "#/management/kibana/objects"
		});
		*/
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "saved_objects",
				title: _i18n.i18n.translate("kbn.management.objects.savedObjectsTitle",
				{
					defaultMessage: "Saved Objects"
				}),
				description: _i18n.i18n.translate("kbn.management.objects.savedObjectsDescription",
				{
					defaultMessage: "Import, export, and manage your saved searches, visualizations, and dashboards."
				}),
				icon: "savedObjectsApp",
				path: "/app/kibana#/management/kibana/objects",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5500: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _angular = __webpack_require__(22);
		var _angular2 = _interopRequireDefault(_angular);
		var _risonNode = __webpack_require__(162);
		var _risonNode2 = _interopRequireDefault(_risonNode);
		var _saved_object_registry = __webpack_require__(327);
		var _view = __webpack_require__(5501);
		var _view2 = _interopRequireDefault(_view);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _notify = __webpack_require__(10);
		__webpack_require__(864);
		var _utils = __webpack_require__(433);
		var _saved_objects = __webpack_require__(54);
		var _numeric = __webpack_require__(836);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var location = "SavedObject view";
		_routes2.default.when("/management/kibana/objects/:service/:id",
		{
			template: _view2.default
		});
		_modules.uiModules.get("apps/management").directive("kbnManagementObjectsView", function (kbnIndex, confirmModal, i18n)
		{
			return {
				restrict: "E",
				controller: function controller($scope, $injector, $routeParams, $location, $window, $rootScope, Private)
				{
					var serviceObj = _saved_object_registry.savedObjectManagementRegistry.get($routeParams.service);
					var service = $injector.get(serviceObj.service);
					var savedObjectsClient = Private(_saved_objects.SavedObjectsClientProvider);
					var createField = function createField(memo, val, key, collection, parents)
					{
						Array.isArray(parents) ? parents.push(key) : parents = [key];
						var field = {
							type: "text",
							name: parents.join("."),
							value: val
						};
						if (_lodash2.default.isString(field.value)) try
						{
							field.value = _angular2.default.toJson(JSON.parse(field.value), true);
							field.type = "json"
						}
						catch (err)
						{
							field.value = field.value
						}
						else if ((0, _numeric.isNumeric)(field.value)) field.type = "number";
						else if (Array.isArray(field.value))
						{
							field.type = "array";
							field.value = _angular2.default.toJson(field.value, true)
						}
						else if (_lodash2.default.isBoolean(field.value))
						{
							field.type = "boolean";
							field.value = field.value
						}
						else if (_lodash2.default.isPlainObject(field.value)) return _lodash2.default.reduce(field.value, _lodash2.default.partialRight(createField, parents), memo);
						memo.push(field);
						parents.pop();
						return memo
					};
					var readObjectClass = function readObjectClass(fields, Class)
					{
						var fieldMap = _lodash2.default.indexBy(fields, "name");
						_lodash2.default.forOwn(Class.mapping, function (esType, name)
						{
							if (fieldMap[name]) return;
							fields.push(
							{
								name: name,
								type: function ()
								{
									switch ((0, _utils.castEsToKbnFieldTypeName)(esType))
									{
									case "string":
										return "text";
									case "number":
										return "number";
									case "boolean":
										return "boolean";
									default:
										return "json"
									}
								}()
							})
						});
						Class.searchSource && !fieldMap["kibanaSavedObjectMeta.searchSourceJSON"] && fields.push(
						{
							name: "kibanaSavedObjectMeta.searchSourceJSON",
							type: "json",
							value: "{}"
						})
					};
					$scope.notFound = $routeParams.notFound;
					$scope.title = service.type;
					savedObjectsClient.get(service.type, $routeParams.id).then(function (obj)
					{
						$scope.obj = obj;
						$scope.link = service.urlFor(obj.id);
						var fields = _lodash2.default.reduce(obj.attributes, createField, []);
						service.Class && readObjectClass(fields, service.Class);
						var nameSortedFields = _lodash2.default.sortBy(fields, "name");
						$scope.fields = _lodash2.default.sortBy(nameSortedFields, function (field)
						{
							var orderIndex = service.Class.fieldOrder ? service.Class.fieldOrder.indexOf(field.name) : -1;
							return orderIndex > -1 ? orderIndex : Infinity
						})
					}).catch(function (error)
					{
						return (0, _notify.fatalError)(error, location)
					});
					var loadedEditors = [];
					$scope.aceInvalidEditors = [];
					$scope.aceLoaded = function (editor)
					{
						if (_lodash2.default.contains(loadedEditors, editor)) return;
						loadedEditors.push(editor);
						editor.$blockScrolling = Infinity;
						var session = editor.getSession();
						var fieldName = editor.container.id;
						session.setTabSize(2);
						session.setUseSoftTabs(true);
						session.on("changeAnnotation", function ()
						{
							var annotations = session.getAnnotations();
							_lodash2.default.some(annotations,
							{
								type: "error"
							}) ? _lodash2.default.contains($scope.aceInvalidEditors, fieldName) || $scope.aceInvalidEditors.push(fieldName) : $scope.aceInvalidEditors = _lodash2.default.without($scope.aceInvalidEditors, fieldName);
							$rootScope.$$phase || $scope.$apply()
						})
					};
					$scope.cancel = function ()
					{
						$window.history.back();
						return false
					};
					$scope.delete = function ()
					{
						function doDelete()
						{
							savedObjectsClient.delete(service.type, $routeParams.id).then(function ()
							{
								return redirectHandler("deleted")
							}).catch(function (error)
							{
								return (0, _notify.fatalError)(error, location)
							})
						}
						var confirmModalOptions = {
							onConfirm: doDelete,
							confirmButtonText: i18n("kbn.management.objects.confirmModalOptions.deleteButtonLabel",
							{
								defaultMessage: "Delete"
							}),
							title: i18n("kbn.management.objects.confirmModalOptions.modalTitle",
							{
								defaultMessage: "Delete saved Kibana object?"
							})
						};
						confirmModal(i18n("kbn.management.objects.confirmModalOptions.modalDescription",
						{
							defaultMessage: "You can't recover deleted objects"
						}), confirmModalOptions)
					};
					$scope.submit = function ()
					{
						var source = _lodash2.default.cloneDeep($scope.obj.attributes);
						_lodash2.default.each($scope.fields, function (field)
						{
							var value = field.value;
							"number" === field.type && (value = Number(field.value));
							"array" === field.type && (value = JSON.parse(field.value));
							_lodash2.default.set(source, field.name, value)
						});
						savedObjectsClient.update(service.type, $routeParams.id, source).then(function ()
						{
							return redirectHandler("updated")
						}).catch(function (error)
						{
							return (0, _notify.fatalError)(error, location)
						})
					};

					function redirectHandler(action)
					{
						$location.path("/management/kibana/objects").search(
						{
							_a: _risonNode2.default.encode(
							{
								tab: serviceObj.title
							})
						});
						_notify.toastNotifications.addSuccess(_lodash2.default.capitalize(action) + " '" + $scope.obj.attributes.title + "' " + $scope.title.toLowerCase() + " object")
					}
				}
			}
		})
	},
	5501: function (module, exports)
	{
		module.exports = '<kbn-management-app section="kibana" class="kuiView">\n  <kbn-management-objects-view class="kuiViewContent kuiViewContent--constrainedWidth">\n    <!-- Header -->\n    <div class="kuiViewContentItem kuiBar kuiVerticalRhythm">\n      <div class="kuiBarSection">\n        <h1\n          class="kuiTitle"\n          i18n-id="kbn.management.objects.view.editItemTitle"\n          i18n-default-message="Edit {title}"\n          i18n-values="{ title }"\n        ></h1>\n      </div>\n\n      <div class="kuiBarSection">\n        <a\n          class="kuiButton kuiButton--basic kuiButton--iconText"\n          href="{{ link }}"\n        >\n          <span class="kuiButton__inner">\n            <span class="kuiButton__icon kuiIcon fa-eye"></span>\n            <span\n              i18n-id="kbn.management.objects.view.viewItemButtonLabel"\n              i18n-default-message="View {title}"\n              i18n-values="{ title }"\n            ></span>\n          </span>\n        </a>\n\n        <button\n          class="kuiButton kuiButton--danger kuiButton--iconText"\n          ng-click="delete()"\n        >\n          <span class="kuiButton__inner">\n            <span class="kuiButton__icon kuiIcon fa-trash-o"></span>\n            <span\n              i18n-id="kbn.management.objects.view.deleteItemButtonLabel"\n              i18n-default-message="Delete {title}"\n              i18n-values="{ title }"\n              ></span>\n          </span>\n        </button>\n      </div>\n    </div>\n\n    <!-- Errors -->\n    <div\n      class="kuiViewContentItem kuiVerticalRhythm"\n      ng-if="notFound"\n    >\n      <div class="kuiInfoPanel kuiInfoPanel--error">\n        <div class="kuiInfoPanelHeader">\n          <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--error fa-warning"></span>\n          <span\n            class="kuiInfoPanelHeader__title"\n            i18n-id="kbn.management.objects.view.savedObjectProblemErrorMessage"\n            i18n-default-message="There is a problem with this saved object"\n            ></span>\n        </div>\n\n        <div class="kuiInfoPanelBody">\n          <div\n            class="kuiInfoPanelBody__message"\n            ng-if="notFound === \'search\'"\n            i18n-id="kbn.management.objects.view.savedSearchDoesNotExistErrorMessage"\n            i18n-default-message="The saved search associated with this object no longer exists."\n          ></div>\n\n          <div\n            class="kuiInfoPanelBody__message"\n            ng-if="notFound === \'index-pattern\'"\n            i18n-id="kbn.management.objects.view.indexPatternDoesNotExistErrorMessage"\n            i18n-default-message="The index pattern associated with this object no longer exists."\n          ></div>\n\n          <div\n            class="kuiInfoPanelBody__message"\n            ng-if="notFound === \'index-pattern-field\'"\n            i18n-id="kbn.management.objects.view.fieldDoesNotExistErrorMessage"\n            i18n-default-message="A field associated with this object no longer exists in the index pattern."\n          ></div>\n\n          <div\n            class="kuiInfoPanelBody__message"\n            i18n-id="kbn.management.objects.view.howToFixErrorDescription"\n            i18n-default-message="If you know what this error means, go ahead and fix it &mdash; otherwise click the delete button above."\n          ></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Intro -->\n    <div class="kuiViewContentItem kuiVerticalRhythm">\n      <div class="kuiInfoPanel kuiInfoPanel--warning">\n        <div class="kuiInfoPanelHeader">\n          <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--warning fa-bolt"></span>\n          <span\n            class="kuiInfoPanelHeader__title"\n            i18n-id="kbn.management.objects.view.howToModifyObjectTitle"\n            i18n-default-message="Proceed with caution!"\n          ></span>\n        </div>\n\n        <div class="kuiInfoPanelBody">\n          <div\n            class="kuiInfoPanelBody__message"\n            i18n-id="kbn.management.objects.view.howToModifyObjectDescription"\n            i18n-default-message=" Modifying objects is for advanced users only. Object properties are not validated and invalid objects could cause errors, data loss, or worse. Unless someone with intimate knowledge of the code told you to be in here, you probably shouldn&rsquo;t be."\n          >\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="kuiViewContentItem kuiVerticalRhythm">\n      <!-- Form -->\n      <form\n        role="form"\n        name="objectForm"\n        ng-submit="submit()"\n      >\n        <div class="kuiFormSection" ng-repeat="field in fields">\n          <label for="{{ field.name }}" class="kuiFormLabel">\n            {{ field.name }}\n          </label>\n\n          <input\n            id="{{ field.name }}"\n            ng-if="field.type === \'number\'"\n            class="kuiTextInput"\n            type="number"\n            ng-model="field.value"\n          >\n\n          <textarea\n            id="{{ field.name }}"\n            ng-if="field.type === \'text\'"\n            class="kuiTextArea"\n            rows="1"\n            msd-elastic=" "\n            ng-model="field.value"\n          ></textarea>\n\n          <input\n            ng-if="field.type === \'boolean\'"\n            class="kuiCheckBox"\n            type="checkbox"\n            ng-model="field.value"\n            ng-checked="field.value"\n          >\n\n          <div\n            ng-if="field.type === \'json\' || field.type === \'array\'"\n            kbn-ui-ace-keyboard-mode\n            ui-ace="{ onLoad: aceLoaded, mode: \'json\' }"\n            id="{{field.name}}"\n            ng-model="field.value"\n            class="form-control"\n          ></div>\n        </div>\n      </form>\n\n      <!-- Actions -->\n      <div class="kuiButtonGroup">\n        <button\n          class="kuiButton kuiButton--primary"\n          aria-label="{{ \'kbn.management.objects.view.saveButtonAriaLabel\' | i18n: { defaultMessage: \'Save { title } Object\', values: { title } } }}"\n          ng-click="submit()"\n          ng-disabled="objectForm.$invalid || aceInvalidEditors.length !==0"\n          i18n-id="kbn.management.objects.view.saveButtonLabel"\n          i18n-default-message="Save { title } Object"\n          i18n-values="{ title }"\n        ></button>\n\n        <button\n          class="kuiButton kuiButton--basic"\n          aria-label="{{ \'kbn.management.objects.view.cancelButtonAriaLabel\' | i18n: { defaultMessage: \'Cancel\'} }}"\n          ng-click="cancel()"\n          i18n-id="kbn.management.objects.view.cancelButtonLabel"\n          i18n-default-message="Cancel"\n        ></button>\n      </div>\n    </div>\n  </kbn-management-objects-view>\n</kbn-management-app>\n'
	},
	5502: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _saved_object_registry = __webpack_require__(327);
		var _objects = __webpack_require__(5503);
		var _objects2 = _interopRequireDefault(_objects);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);
		var _notify = __webpack_require__(10);
		var _saved_objects = __webpack_require__(54);
		var _modules = __webpack_require__(2);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _reactDom = __webpack_require__(17);
		var _objects_table = __webpack_require__(5504);
		var _get_in_app_url = __webpack_require__(1725);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var REACT_OBJECTS_TABLE_DOM_ELEMENT_ID = "reactSavedObjectsTable";

		function updateObjectsTable($scope, $injector)
		{
			var Private = $injector.get("Private");
			var indexPatterns = $injector.get("indexPatterns");
			var $http = $injector.get("$http");
			var kbnUrl = $injector.get("kbnUrl");
			var config = $injector.get("config");
			var savedObjectsClient = Private(_saved_objects.SavedObjectsClientProvider);
			var services = _saved_object_registry.savedObjectManagementRegistry.all().map(function (obj)
			{
				return $injector.get(obj.service)
			});
			var allServices = _saved_object_registry.savedObjectManagementRegistry.all();
			var typeToServiceName = function typeToServiceName(type)
			{
				return allServices.reduce(function (serviceName, service)
				{
					return service.title.includes(type) ? service.service : serviceName
				}, null)
			};
			$scope.$$postDigest(function ()
			{
				var node = document.getElementById(REACT_OBJECTS_TABLE_DOM_ELEMENT_ID);
				if (!node) return;
				(0, _reactDom.render)(_react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_objects_table.ObjectsTable,
				{
					savedObjectsClient: savedObjectsClient,
					services: services,
					indexPatterns: indexPatterns,
					$http: $http,
					perPageConfig: config.get("savedObjects:perPage"),
					basePath: _chrome2.default.getBasePath(),
					newIndexPatternUrl: kbnUrl.eval("#/management/kibana/index"),
					getEditUrl: function getEditUrl(id, type)
					{
						if ("index-pattern" === type || "indexPatterns" === type) return kbnUrl.eval("#/management/kibana/indices/" + id);
						var serviceName = typeToServiceName(type);
						if (!serviceName)
						{
							_notify.toastNotifications.addWarning("Unknown saved object type: " + type);
							return null
						}
						return kbnUrl.eval("#/management/kibana/objects/" + serviceName + "/" + id)
					},
					goInApp: function goInApp(id, type)
					{
						kbnUrl.change((0, _get_in_app_url.getInAppUrl)(id, type));
						$scope.$apply()
					}
				})), node)
			})
		}

		function destroyObjectsTable()
		{
			var node = document.getElementById(REACT_OBJECTS_TABLE_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		}
		_routes2.default.when("/management/kibana/objects",
		{
			template: _objects2.default
		}).when("/management/kibana/objects/:service",
		{
			redirectTo: "/management/kibana/objects"
		});
		_modules.uiModules.get("apps/management").directive("kbnManagementObjects", function ()
		{
			return {
				restrict: "E",
				controllerAs: "managementObjectsController",
				controller: function controller($scope, $injector)
				{
					updateObjectsTable($scope, $injector);
					$scope.$on("$destroy", destroyObjectsTable)
				}
			}
		})
	},
	5503: function (module, exports)
	{
		module.exports = '<kbn-management-app section="kibana" class="kuiView">\n  <kbn-management-objects>\n    <div id="reactSavedObjectsTable"></div>\n  </kbn-management-objects>\n</kbn-management-app>\n'
	},
	5504: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _objects_table = __webpack_require__(1722);
		Object.defineProperty(exports, "ObjectsTable",
		{
			enumerable: true,
			get: function get()
			{
				return _objects_table.ObjectsTable
			}
		})
	},
	5505: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5506);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5506: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var Header = exports.Header = function Header(_ref)
		{
			var onExportAll = _ref.onExportAll,
				onImport = _ref.onImport,
				onRefresh = _ref.onRefresh,
				filteredCount = _ref.filteredCount;
			return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "spaceBetween",
				alignItems: "baseline"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h1", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.objects.objectsTable.header.savedObjectsTitle",
				defaultMessage: "Saved Objects"
			})))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiFlexGroup,
			{
				alignItems: "baseline",
				gutterSize: "m",
				responsive: false
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButtonEmpty,
			{
				size: "s",
				iconType: "exportAction",
				"data-test-subj": "exportAllObjects",
				onClick: onExportAll
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.objects.objectsTable.header.exportButtonLabel",
				defaultMessage: "Export {filteredCount, plural, one{# object} other {# objects}}",
				values:
				{
					filteredCount: filteredCount
				}
			}))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButtonEmpty,
			{
				size: "s",
				iconType: "importAction",
				"data-test-subj": "importObjects",
				onClick: onImport
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.objects.objectsTable.header.importButtonLabel",
				defaultMessage: "Import"
			}))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButtonEmpty,
			{
				size: "s",
				iconType: "refresh",
				onClick: onRefresh
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.objects.objectsTable.header.refreshButtonLabel",
				defaultMessage: "Refresh"
			})))))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.objects.objectsTable.howToDeleteSavedObjectsDescription",
				defaultMessage: "From here you can delete saved objects, such as saved searches. You can also edit the raw data of saved objects. Typically objects are only modified via their associated application, which is probably what you should use instead of this screen."
			})))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}))
		};
		Header.propTypes = {
			onExportAll: _propTypes2.default.func.isRequired,
			onImport: _propTypes2.default.func.isRequired,
			onRefresh: _propTypes2.default.func.isRequired,
			filteredCount: _propTypes2.default.number.isRequired
		}
	},
	5507: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _flyout = __webpack_require__(5508);
		Object.defineProperty(exports, "Flyout",
		{
			enumerable: true,
			get: function get()
			{
				return _flyout.Flyout
			}
		})
	},
	5508: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Flyout = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _slicedToArray = function ()
		{
			function sliceIterator(arr, i)
			{
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = void 0;
				try
				{
					for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true)
					{
						_arr.push(_s.value);
						if (i && _arr.length === i) break
					}
				}
				catch (err)
				{
					_d = true;
					_e = err
				}
				finally
				{
					try
					{
						!_n && _i["return"] && _i["return"]()
					}
					finally
					{
						if (_d) throw _e
					}
				}
				return _arr
			}
			return function (arr, i)
			{
				if (Array.isArray(arr)) return arr;
				if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _lodash = __webpack_require__(1);
		var _eui = __webpack_require__(3);
		var _import_file = __webpack_require__(1723);
		var _resolve_saved_objects = __webpack_require__(1724);
		var _objects_table = __webpack_require__(1722);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var FlyoutUI = function (_Component)
		{
			_inherits(FlyoutUI, _Component);

			function FlyoutUI(props)
			{
				var _this2 = this;
				_classCallCheck(this, FlyoutUI);
				var _this = _possibleConstructorReturn(this, (FlyoutUI.__proto__ || Object.getPrototypeOf(FlyoutUI)).call(this, props));
				_this.fetchIndexPatterns = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var indexPatterns;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_context.next = 2;
							return _this.props.indexPatterns.getFields(["id", "title"]);
						case 2:
							indexPatterns = _context.sent;
							_this.setState(
							{
								indexPatterns: indexPatterns
							});
						case 4:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2)
				}));
				_this.changeOverwriteAll = function ()
				{
					_this.setState(function (state)
					{
						return {
							isOverwriteAllChecked: !state.isOverwriteAllChecked
						}
					})
				};
				_this.setImportFile = function (_ref2)
				{
					var _ref3 = _slicedToArray(_ref2, 1),
						file = _ref3[0];
					_this.setState(
					{
						file: file
					})
				};
				_this.import = _asyncToGenerator(regeneratorRuntime.mark(function _callee2()
				{
					var _this$props, services, indexPatterns, intl, _this$state, file, isOverwriteAllChecked, contents, _ref5, conflictedIndexPatterns, conflictedSavedObjectsLinkedToSavedSearches, conflictedSearchDocs, importedObjectCount, failedImports, byId, conflicts;
					return regeneratorRuntime.wrap(function _callee2$(_context2)
					{
						while (1) switch (_context2.prev = _context2.next)
						{
						case 0:
							_this$props = _this.props, services = _this$props.services, indexPatterns = _this$props.indexPatterns, intl = _this$props.intl;
							_this$state = _this.state, file = _this$state.file, isOverwriteAllChecked = _this$state.isOverwriteAllChecked;
							_this.setState(
							{
								isLoading: true,
								error: void 0
							});
							contents = void 0;
							_context2.prev = 4;
							_context2.next = 7;
							return (0, _import_file.importFile)(file);
						case 7:
							contents = _context2.sent;
							_context2.next = 14;
							break;
						case 10:
							_context2.prev = 10;
							_context2.t0 = _context2["catch"](4);
							_this.setState(
							{
								isLoading: false,
								error: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.flyout.importFileErrorMessage",
									defaultMessage: "The file could not be processed."
								})
							});
							return _context2.abrupt("return");
						case 14:
							if (Array.isArray(contents))
							{
								_context2.next = 17;
								break
							}
							_this.setState(
							{
								isLoading: false,
								error: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.flyout.invalidFormatOfImportedFileErrorMessage",
									defaultMessage: "Saved objects file format is invalid and cannot be imported."
								})
							});
							return _context2.abrupt("return");
						case 17:
							contents = contents.filter(function (content)
							{
								return _objects_table.INCLUDED_TYPES.includes(content._type)
							}).map(function (doc)
							{
								return _extends(
								{}, doc,
								{
									_migrationVersion: doc._migrationVersion ||
									{}
								})
							});
							_context2.next = 20;
							return (0, _resolve_saved_objects.resolveSavedObjects)(contents, isOverwriteAllChecked, services, indexPatterns);
						case 20:
							_ref5 = _context2.sent;
							conflictedIndexPatterns = _ref5.conflictedIndexPatterns;
							conflictedSavedObjectsLinkedToSavedSearches = _ref5.conflictedSavedObjectsLinkedToSavedSearches;
							conflictedSearchDocs = _ref5.conflictedSearchDocs;
							importedObjectCount = _ref5.importedObjectCount;
							failedImports = _ref5.failedImports;
							byId = (0, _lodash.groupBy)(conflictedIndexPatterns, function (_ref6)
							{
								var obj = _ref6.obj;
								return obj.searchSource.getOwnField("index")
							});
							conflicts = Object.entries(byId).reduce(function (accum, _ref7)
							{
								var _ref8 = _slicedToArray(_ref7, 2),
									existingIndexPatternId = _ref8[0],
									list = _ref8[1];
								accum.push(
								{
									existingIndexPatternId: existingIndexPatternId,
									newIndexPatternId: void 0,
									list: list.map(function (_ref9)
									{
										var doc = _ref9.doc;
										return {
											id: existingIndexPatternId,
											type: doc._type,
											name: doc._source.title
										}
									})
								});
								return accum
							}, []);
							_this.setState(
							{
								conflictedIndexPatterns: conflictedIndexPatterns,
								conflictedSavedObjectsLinkedToSavedSearches: conflictedSavedObjectsLinkedToSavedSearches,
								conflictedSearchDocs: conflictedSearchDocs,
								failedImports: failedImports,
								conflicts: conflicts,
								importCount: importedObjectCount,
								isLoading: false,
								wasImportSuccessful: 0 === conflicts.length
							});
						case 29:
						case "end":
							return _context2.stop()
						}
					}, _callee2, _this2, [
						[4, 10]
					])
				}));
				_this.confirmImport = _asyncToGenerator(regeneratorRuntime.mark(function _callee3()
				{
					var _this$state2, conflictedIndexPatterns, isOverwriteAllChecked, conflictedSavedObjectsLinkedToSavedSearches, conflictedSearchDocs, failedImports, _this$props2, services, indexPatterns, intl, importCount, resolutions;
					return regeneratorRuntime.wrap(function _callee3$(_context3)
					{
						while (1) switch (_context3.prev = _context3.next)
						{
						case 0:
							_this$state2 = _this.state, conflictedIndexPatterns = _this$state2.conflictedIndexPatterns, isOverwriteAllChecked = _this$state2.isOverwriteAllChecked, conflictedSavedObjectsLinkedToSavedSearches = _this$state2.conflictedSavedObjectsLinkedToSavedSearches, conflictedSearchDocs = _this$state2.conflictedSearchDocs, failedImports = _this$state2.failedImports;
							_this$props2 = _this.props, services = _this$props2.services, indexPatterns = _this$props2.indexPatterns, intl = _this$props2.intl;
							_this.setState(
							{
								error: void 0,
								isLoading: true,
								loadingMessage: void 0
							});
							importCount = _this.state.importCount;
							if (!_this.hasConflicts)
							{
								_context3.next = 30;
								break
							}
							_context3.prev = 5;
							resolutions = _this.resolutions;
							_this.setState(
							{
								loadingMessage: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.flyout.confirmImport.resolvingConflictsLoadingMessage",
									defaultMessage: "Resolving conflicts…"
								})
							});
							if (!resolutions.length)
							{
								_context3.next = 12;
								break
							}
							_context3.next = 11;
							return (0, _resolve_saved_objects.resolveIndexPatternConflicts)(resolutions, conflictedIndexPatterns, isOverwriteAllChecked);
						case 11:
							importCount += _context3.sent;
						case 12:
							_this.setState(
							{
								loadingMessage: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.flyout.confirmImport.savingConflictsLoadingMessage",
									defaultMessage: "Saving conflicts…"
								})
							});
							_context3.next = 15;
							return (0, _resolve_saved_objects.saveObjects)(conflictedSavedObjectsLinkedToSavedSearches, isOverwriteAllChecked);
						case 15:
							importCount += _context3.sent;
							_this.setState(
							{
								loadingMessage: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.flyout.confirmImport.savedSearchAreLinkedProperlyLoadingMessage",
									defaultMessage: "Ensure saved searches are linked properly…"
								})
							});
							_context3.next = 19;
							return (0, _resolve_saved_objects.resolveSavedSearches)(conflictedSearchDocs, services, indexPatterns, isOverwriteAllChecked);
						case 19:
							importCount += _context3.sent;
							_this.setState(
							{
								loadingMessage: intl.formatMessage(
								{
									id: "kbn.management.objects.objectsTable.flyout.confirmImport.retryingFailedObjectsLoadingMessage",
									defaultMessage: "Retrying failed objects…"
								})
							});
							_context3.next = 23;
							return (0, _resolve_saved_objects.saveObjects)(failedImports.map(function (_ref11)
							{
								var obj = _ref11.obj;
								return obj
							}), isOverwriteAllChecked);
						case 23:
							importCount += _context3.sent;
							_context3.next = 30;
							break;
						case 26:
							_context3.prev = 26;
							_context3.t0 = _context3["catch"](5);
							_this.setState(
							{
								error: _context3.t0.message,
								isLoading: false,
								loadingMessage: void 0
							});
							return _context3.abrupt("return");
						case 30:
							_this.setState(
							{
								isLoading: false,
								wasImportSuccessful: true,
								importCount: importCount
							});
						case 31:
						case "end":
							return _context3.stop()
						}
					}, _callee3, _this2, [
						[5, 26]
					])
				}));
				_this.onIndexChanged = function (id, e)
				{
					var value = e.target.value;
					_this.setState(function (state)
					{
						var conflictIndex = state.conflicts.findIndex(function (conflict)
						{
							return conflict.existingIndexPatternId === id
						});
						if (-1 === conflictIndex) return state;
						return {
							conflicts: [].concat(_toConsumableArray(state.conflicts.slice(0, conflictIndex)), [_extends(
							{}, state.conflicts[conflictIndex],
							{
								newIndexPatternId: value
							})], _toConsumableArray(state.conflicts.slice(conflictIndex + 1)))
						}
					})
				};
				_this.state = {
					conflictedIndexPatterns: void 0,
					conflictedSavedObjectsLinkedToSavedSearches: void 0,
					conflictedSearchDocs: void 0,
					conflicts: void 0,
					error: void 0,
					file: void 0,
					importCount: 0,
					indexPatterns: void 0,
					isOverwriteAllChecked: true,
					isLoading: false,
					loadingMessage: void 0,
					wasImportSuccessful: false
				};
				return _this
			}
			_createClass(FlyoutUI, [
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					this.fetchIndexPatterns()
				}
			},
			{
				key: "renderConflicts",
				value: function renderConflicts()
				{
					var _this3 = this;
					var conflicts = this.state.conflicts;
					var intl = this.props.intl;
					if (!conflicts) return null;
					var columns = [
					{
						field: "existingIndexPatternId",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnIdName",
							defaultMessage: "ID"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnIdDescription",
							defaultMessage: "ID of the index pattern"
						}),
						sortable: true
					},
					{
						field: "list",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnCountName",
							defaultMessage: "Count"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnCountDescription",
							defaultMessage: "How many affected objects"
						}),
						render: function render(list)
						{
							return _react2.default.createElement(_react.Fragment, null, list.length)
						}
					},
					{
						field: "list",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnSampleOfAffectedObjectsName",
							defaultMessage: "Sample of affected objects"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnSampleOfAffectedObjectsDescription",
							defaultMessage: "Sample of affected objects"
						}),
						render: function render(list)
						{
							return _react2.default.createElement("ul",
							{
								style:
								{
									listStyle: "none"
								}
							}, (0, _lodash.take)(list, 3).map(function (obj, key)
							{
								return _react2.default.createElement("li",
								{
									key: key
								}, obj.name)
							}))
						}
					},
					{
						field: "existingIndexPatternId",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.flyout.renderConflicts.columnNewIndexPatternName",
							defaultMessage: "New index pattern"
						}),
						render: function render(id)
						{
							var options = _this3.state.indexPatterns.map(function (indexPattern)
							{
								return _defineProperty(
								{
									text: indexPattern.get("title"),
									value: indexPattern.id
								}, "data-test-subj", "indexPatternOption-" + indexPattern.get("title"))
							});
							options.unshift(
							{
								text: "-- Skip Import --",
								value: ""
							});
							return _react2.default.createElement(_eui.EuiSelect,
							{
								"data-test-subj": "managementChangeIndexSelection-" + id,
								onChange: function onChange(e)
								{
									return _this3.onIndexChanged(id, e)
								},
								options: options
							})
						}
					}];
					var pagination = {
						pageSizeOptions: [5, 10, 25]
					};
					return _react2.default.createElement(_eui.EuiInMemoryTable,
					{
						items: conflicts,
						columns: columns,
						pagination: pagination
					})
				}
			},
			{
				key: "renderError",
				value: function renderError()
				{
					var error = this.state.error;
					if (!error) return null;
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiCallOut,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.errorCalloutTitle",
							defaultMessage: "Sorry, there was an error"
						}),
						color: "danger",
						iconType: "cross"
					}, _react2.default.createElement("p", null, error)), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}))
				}
			},
			{
				key: "renderBody",
				value: function renderBody()
				{
					var _state = this.state,
						isLoading = _state.isLoading,
						loadingMessage = _state.loadingMessage,
						isOverwriteAllChecked = _state.isOverwriteAllChecked,
						wasImportSuccessful = _state.wasImportSuccessful,
						importCount = _state.importCount,
						_state$failedImports = _state.failedImports,
						failedImports = void 0 === _state$failedImports ? [] : _state$failedImports;
					if (isLoading) return _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "spaceAround"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiLoadingKibana,
					{
						size: "xl"
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, loadingMessage))));
					if (failedImports.length && !this.hasConflicts) return _react2.default.createElement(_eui.EuiCallOut,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.importFailedTitle",
							defaultMessage: "Import failed"
						}),
						color: "warning",
						iconType: "help"
					}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.importFailedDescription",
						defaultMessage: "Failed to import {failedImportCount} of {totalImportCount} objects.Import failed",
						values:
						{
							failedImportCount: failedImports.length,
							totalImportCount: importCount + failedImports.length
						}
					})), _react2.default.createElement("p", null, failedImports.map(function (_ref13)
					{
						var error = _ref13.error;
						return (0, _lodash.get)(error, "body.message", error.message || "")
					}).join(" ")));
					if (wasImportSuccessful)
					{
						if (0 === importCount) return _react2.default.createElement(_eui.EuiCallOut,
						{
							"data-test-subj": "importSavedObjectsSuccessNoneImported",
							title: _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.flyout.importSuccessfulCallout.noObjectsImportedTitle",
								defaultMessage: "No objects imported"
							}),
							color: "primary"
						});
						return _react2.default.createElement(_eui.EuiCallOut,
						{
							"data-test-subj": "importSavedObjectsSuccess",
							title: _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.flyout.importSuccessfulTitle",
								defaultMessage: "Import successful"
							}),
							color: "success",
							iconType: "check"
						}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.importSuccessfulDescription",
							defaultMessage: "Successfully imported {importCount} objects.",
							values:
							{
								importCount: importCount
							}
						})))
					}
					if (this.hasConflicts) return this.renderConflicts();
					return _react2.default.createElement(_eui.EuiForm, null, _react2.default.createElement(_eui.EuiFormRow,
					{
						label: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.selectFileToImportFormRowLabel",
							defaultMessage: "Please select a JSON file to import"
						})
					}, _react2.default.createElement(_eui.EuiFilePicker,
					{
						initialPromptText: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.importPromptText",
							defaultMessage: "Import"
						}),
						onChange: this.setImportFile
					})), _react2.default.createElement(_eui.EuiFormRow, null, _react2.default.createElement(_eui.EuiSwitch,
					{
						name: "overwriteAll",
						label: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.overwriteSavedObjectsLabel",
							defaultMessage: "Automatically overwrite all saved objects?"
						}),
						"data-test-subj": "importSavedObjectsOverwriteToggle",
						checked: isOverwriteAllChecked,
						onChange: this.changeOverwriteAll
					})))
				}
			},
			{
				key: "renderFooter",
				value: function renderFooter()
				{
					var _state2 = this.state,
						isLoading = _state2.isLoading,
						wasImportSuccessful = _state2.wasImportSuccessful;
					var _props = this.props,
						done = _props.done,
						close = _props.close;
					var confirmButton = void 0;
					confirmButton = wasImportSuccessful ? _react2.default.createElement(_eui.EuiButton,
					{
						onClick: done,
						size: "s",
						fill: true,
						"data-test-subj": "importSavedObjectsDoneBtn"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.importSuccessful.confirmButtonLabel",
						defaultMessage: "Done"
					})) : this.hasConflicts ? _react2.default.createElement(_eui.EuiButton,
					{
						onClick: this.confirmImport,
						size: "s",
						fill: true,
						isLoading: isLoading,
						"data-test-subj": "importSavedObjectsConfirmBtn"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.importSuccessful.confirmAllChangesButtonLabel",
						defaultMessage: "Confirm all changes"
					})) : _react2.default.createElement(_eui.EuiButton,
					{
						onClick: this.import,
						size: "s",
						fill: true,
						isLoading: isLoading,
						"data-test-subj": "importSavedObjectsImportBtn"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.import.confirmButtonLabel",
						defaultMessage: "Import"
					}));
					return _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "spaceBetween"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiButtonEmpty,
					{
						onClick: close,
						size: "s"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.import.cancelButtonLabel",
						defaultMessage: "Cancel"
					}))), _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, confirmButton))
				}
			},
			{
				key: "renderSubheader",
				value: function renderSubheader()
				{
					if (!this.hasConflicts || this.state.isLoading || this.state.wasImportSuccessful) return null;
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement(_eui.EuiCallOut,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.flyout.indexPatternConflictsTitle",
							defaultMessage: "Index Pattern Conflicts"
						}),
						color: "warning",
						iconType: "help"
					}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.indexPatternConflictsDescription",
						defaultMessage: "The following saved objects use index patterns that do not exist. Please select the index patterns you'd like re-associated with them. You can {indexPatternLink} if necessary.",
						values:
						{
							indexPatternLink: _react2.default.createElement(_eui.EuiLink,
							{
								href: this.props.newIndexPatternUrl
							}, _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.flyout.indexPatternConflictsCalloutLinkText",
								defaultMessage: "create a new index pattern"
							}))
						}
					}))))
				}
			},
			{
				key: "render",
				value: function render()
				{
					var close = this.props.close;
					return _react2.default.createElement(_eui.EuiFlyout,
					{
						onClose: close,
						size: "s"
					}, _react2.default.createElement(_eui.EuiFlyoutHeader, null, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h2", null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.objects.objectsTable.flyout.importSavedObjectTitle",
						defaultMessage: "Import saved objects"
					}))), this.renderSubheader()), _react2.default.createElement(_eui.EuiFlyoutBody, null, this.renderError(), this.renderBody()), _react2.default.createElement(_eui.EuiFlyoutFooter, null, this.renderFooter()))
				}
			},
			{
				key: "hasConflicts",
				get: function get()
				{
					return this.state.conflicts && this.state.conflicts.length > 0
				}
			},
			{
				key: "resolutions",
				get: function get()
				{
					return this.state.conflicts.reduce(function (accum, _ref14)
					{
						var existingIndexPatternId = _ref14.existingIndexPatternId,
							newIndexPatternId = _ref14.newIndexPatternId;
						newIndexPatternId && accum.push(
						{
							oldId: existingIndexPatternId,
							newId: newIndexPatternId
						});
						return accum
					}, [])
				}
			}]);
			return FlyoutUI
		}(_react.Component);
		FlyoutUI.propTypes = {
			close: _propTypes2.default.func.isRequired,
			done: _propTypes2.default.func.isRequired,
			services: _propTypes2.default.array.isRequired,
			newIndexPatternUrl: _propTypes2.default.string.isRequired,
			indexPatterns: _propTypes2.default.object.isRequired
		};
		exports.Flyout = (0, _react3.injectI18n)(FlyoutUI)
	},
	5509: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _relationships = __webpack_require__(5510);
		Object.defineProperty(exports, "Relationships",
		{
			enumerable: true,
			get: function get()
			{
				return _relationships.Relationships
			}
		})
	},
	5510: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Relationships = void 0;
		var _slicedToArray = function ()
		{
			function sliceIterator(arr, i)
			{
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = void 0;
				try
				{
					for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true)
					{
						_arr.push(_s.value);
						if (i && _arr.length === i) break
					}
				}
				catch (err)
				{
					_d = true;
					_e = err
				}
				finally
				{
					try
					{
						!_n && _i["return"] && _i["return"]()
					}
					finally
					{
						if (_d) throw _e
					}
				}
				return _arr
			}
			return function (arr, i)
			{
				if (Array.isArray(arr)) return arr;
				if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);
		var _lib = __webpack_require__(651);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var RelationshipsUI = function (_Component)
		{
			_inherits(RelationshipsUI, _Component);

			function RelationshipsUI(props)
			{
				_classCallCheck(this, RelationshipsUI);
				var _this = _possibleConstructorReturn(this, (RelationshipsUI.__proto__ || Object.getPrototypeOf(RelationshipsUI)).call(this, props));
				_this.state = {
					relationships: void 0,
					isLoading: false,
					error: void 0
				};
				return _this
			}
			_createClass(RelationshipsUI, [
			{
				key: "componentWillMount",
				value: function componentWillMount()
				{
					this.getRelationshipData()
				}
			},
			{
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps)
				{
					nextProps.id !== this.props.id && this.getRelationshipData()
				}
			},
			{
				key: "getRelationshipData",
				value: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
					{
						var _props, id, type, getRelationships, relationships;
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								_props = this.props, id = _props.id, type = _props.type, getRelationships = _props.getRelationships;
								this.setState(
								{
									isLoading: true
								});
								_context.prev = 2;
								_context.next = 5;
								return getRelationships(type, id);
							case 5:
								relationships = _context.sent;
								this.setState(
								{
									relationships: relationships,
									isLoading: false,
									error: void 0
								});
								_context.next = 12;
								break;
							case 9:
								_context.prev = 9;
								_context.t0 = _context["catch"](2);
								this.setState(
								{
									error: _context.t0.message,
									isLoading: false
								});
							case 12:
							case "end":
								return _context.stop()
							}
						}, _callee, this, [
							[2, 9]
						])
					}));

					function getRelationshipData()
					{
						return _ref.apply(this, arguments)
					}
					return getRelationshipData
				}()
			},
			{
				key: "renderError",
				value: function renderError()
				{
					var error = this.state.error;
					if (!error) return null;
					return _react2.default.createElement(_eui.EuiCallOut,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.relationships.renderErrorMessage",
							defaultMessage: "Error"
						}),
						color: "danger"
					}, error)
				}
			},
			{
				key: "renderRelationships",
				value: function renderRelationships()
				{
					var _this2 = this;
					var _props2 = this.props,
						getEditUrl = _props2.getEditUrl,
						goInApp = _props2.goInApp,
						intl = _props2.intl;
					var _state = this.state,
						relationships = _state.relationships,
						isLoading = _state.isLoading,
						error = _state.error;
					if (error) return this.renderError();
					if (isLoading) return _react2.default.createElement(_eui.EuiLoadingKibana,
					{
						size: "xl"
					});
					var items = [];
					var _loop = function _loop(type, list)
					{
						if (0 === list.length) items.push(_react2.default.createElement(_eui.EuiDescriptionListTitle,
						{
							key: type + "_not_found"
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.relationships.itemNotFoundText",
							defaultMessage: "No {type} found.",
							values:
							{
								type: type
							}
						})));
						else
						{
							var calloutTitle = _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.objects.objectsTable.relationships.warningTitle",
								defaultMessage: "Warning"
							});
							var calloutColor = "warning";
							var calloutText = void 0;
							switch (_this2.props.type)
							{
							case "dashboard":
								calloutColor = "success";
								calloutTitle = _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "kbn.management.objects.objectsTable.relationships.dashboard.calloutTitle",
									defaultMessage: "Dashboard"
								});
								calloutText = _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "kbn.management.objects.objectsTable.relationships.dashboard.calloutText",
									defaultMessage: "Here are some visualizations used on this dashboard. You can safely delete this dashboard and the visualizations will still work properly."
								});
								break;
							case "search":
								if ("visualizations" === type) calloutText = _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "kbn.management.objects.objectsTable.relationships.search.visualizations.calloutText",
									defaultMessage: "Here are some visualizations that use this saved search. If you delete this saved search, these visualizations will not longer work properly."
								});
								else
								{
									calloutColor = "success";
									calloutTitle = _react2.default.createElement(_react3.FormattedMessage,
									{
										id: "kbn.management.objects.objectsTable.relationships.search.calloutTitle",
										defaultMessage: "Saved Search"
									});
									calloutText = _react2.default.createElement(_react3.FormattedMessage,
									{
										id: "kbn.management.objects.objectsTable.relationships.search.calloutText",
										defaultMessage: "Here is the index pattern tied to this saved search."
									})
								}
								break;
							case "visualization":
								calloutText = _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "kbn.management.objects.objectsTable.relationships.visualization.calloutText",
									defaultMessage: "Here are some dashboards which contain this visualization. If you delete this visualization, these dashboards will no longer show them."
								});
								break;
							case "index-pattern":
								"visualizations" === type ? calloutText = _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "kbn.management.objects.objectsTable.relationships.indexPattern.visualizations.calloutText",
									defaultMessage: "Here are some visualizations that use this index pattern. If you delete this index pattern, these visualizations will not longer work properly."
								}) : "searches" === type && (calloutText = _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "kbn.management.objects.objectsTable.relationships.indexPattern.searches.calloutText",
									defaultMessage: "Here are some saved searches that use this index pattern. If you delete this index pattern, these saved searches will not longer work properly."
								}))
							}
							items.push(_react2.default.createElement(_react.Fragment,
							{
								key: type
							}, _react2.default.createElement(_eui.EuiDescriptionListTitle,
							{
								style:
								{
									marginBottom: "1rem"
								}
							}, _react2.default.createElement(_eui.EuiCallOut,
							{
								color: calloutColor,
								title: calloutTitle
							}, _react2.default.createElement("p", null, calloutText))), _react2.default.createElement(_eui.EuiInMemoryTable,
							{
								items: list,
								columns: [
								{
									width: 24,
									render: function render()
									{
										return _react2.default.createElement(_eui.EuiToolTip,
										{
											position: "top",
											content: (0, _lib.getSavedObjectLabel)(type)
										}, _react2.default.createElement(_eui.EuiIcon,
										{
											"aria-label": (0, _lib.getSavedObjectLabel)(type),
											size: "s",
											type: (0, _lib.getSavedObjectIcon)(type)
										}))
									}
								},
								{
									name: intl.formatMessage(
									{
										id: "kbn.management.objects.objectsTable.relationships.columnTitleName",
										defaultMessage: "Title"
									}),
									field: "title",
									render: function render(title, item)
									{
										return _react2.default.createElement(_eui.EuiLink,
										{
											href: "" + getEditUrl(item.id, type)
										}, title)
									}
								},
								{
									name: intl.formatMessage(
									{
										id: "kbn.management.objects.objectsTable.relationships.columnActionsName",
										defaultMessage: "Actions"
									}),
									actions: [
									{
										name: intl.formatMessage(
										{
											id: "kbn.management.objects.objectsTable.relationships.columnActions.inAppName",
											defaultMessage: "In app"
										}),
										description: intl.formatMessage(
										{
											id: "kbn.management.objects.objectsTable.relationships.columnActions.inAppDescription",
											defaultMessage: "View this saved object within Kibana"
										}),
										icon: "eye",
										onClick: function onClick(object)
										{
											return goInApp(object.id, type)
										}
									}]
								}],
								pagination: true
							})))
						}
					};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = void 0;
					try
					{
						for (var _step, _iterator = Object.entries(relationships)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)
						{
							var _ref2 = _step.value;
							var _ref3 = _slicedToArray(_ref2, 2);
							var type = _ref3[0];
							var list = _ref3[1];
							_loop(type, list)
						}
					}
					catch (err)
					{
						_didIteratorError = true;
						_iteratorError = err
					}
					finally
					{
						try
						{
							!_iteratorNormalCompletion && _iterator.return && _iterator.return()
						}
						finally
						{
							if (_didIteratorError) throw _iteratorError
						}
					}
					return _react2.default.createElement(_eui.EuiDescriptionList, null, items)
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _props3 = this.props,
						close = _props3.close,
						title = _props3.title,
						type = _props3.type;
					return _react2.default.createElement(_eui.EuiFlyout,
					{
						onClose: close
					}, _react2.default.createElement(_eui.EuiFlyoutHeader, null, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h2", null, _react2.default.createElement(_eui.EuiToolTip,
					{
						position: "top",
						content: (0, _lib.getSavedObjectLabel)(type)
					}, _react2.default.createElement(_eui.EuiIcon,
					{
						"aria-label": (0, _lib.getSavedObjectLabel)(type),
						size: "m",
						type: (0, _lib.getSavedObjectIcon)(type)
					})), "  ", title))), _react2.default.createElement(_eui.EuiFlyoutBody, null, this.renderRelationships()))
				}
			}]);
			return RelationshipsUI
		}(_react.Component);
		RelationshipsUI.propTypes = {
			getRelationships: _propTypes2.default.func.isRequired,
			id: _propTypes2.default.string.isRequired,
			type: _propTypes2.default.string.isRequired,
			title: _propTypes2.default.string.isRequired,
			close: _propTypes2.default.func.isRequired,
			getEditUrl: _propTypes2.default.func.isRequired,
			goInApp: _propTypes2.default.func.isRequired
		};
		exports.Relationships = (0, _react3.injectI18n)(RelationshipsUI)
	},
	5511: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getRelationships = void 0;
		exports.getRelationships = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(type, id, $http, basePath)
		{
			var url, options, response, respBody, err;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					url = basePath + "/api/kibana/management/saved_objects/relationships/" + type + "/" + id;
					options = {
						method: "GET",
						url: url
					};
					_context.prev = 2;
					_context.next = 5;
					return $http(options);
				case 5:
					response = _context.sent;
					return _context.abrupt("return", response ? response.data : void 0);
				case 9:
					_context.prev = 9;
					_context.t0 = _context["catch"](2);
					respBody = (0, _lodash.get)(_context.t0, "data",
					{});
					err = new Error(respBody.message || respBody.error || _context.t0.status + " Response");
					err.statusCode = respBody.statusCode || _context.t0.status;
					err.body = respBody;
					throw err;
				case 16:
				case "end":
					return _context.stop()
				}
			}, _callee, this, [
				[2, 9]
			])
		})), function getRelationships(_x, _x2, _x3, _x4)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var _lodash = __webpack_require__(1);

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
	},
	5512: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getSavedObjectCounts = void 0;
		exports.getSavedObjectCounts = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee($http, typesToInclude, searchString)
		{
			var results;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					_context.next = 2;
					return $http.post(apiBase + "/counts",
					{
						typesToInclude: typesToInclude,
						searchString: searchString
					});
				case 2:
					results = _context.sent;
					return _context.abrupt("return", results.data);
				case 4:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function getSavedObjectCounts(_x, _x2, _x3)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var apiBase = _chrome2.default.addBasePath("/api/kibana/management/saved_objects/scroll")
	},
	5513: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getSavedObjectIcon = getSavedObjectIcon;

		function getSavedObjectIcon(type)
		{
			switch (type)
			{
			case "search":
			case "searches":
				return "search";
			case "visualization":
			case "visualizations":
				return "visualizeApp";
			case "dashboard":
			case "dashboards":
				return "dashboardApp";
			case "index-pattern":
			case "index-patterns":
			case "indexPatterns":
				return "indexPatternApp";
			default:
				return "apps"
			}
		}
	},
	5514: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getSavedObjectLabel = getSavedObjectLabel;

		function getSavedObjectLabel(type)
		{
			switch (type)
			{
			case "index-pattern":
			case "index-patterns":
			case "indexPatterns":
				return "index patterns";
			default:
				return type
			}
		}
	},
	5515: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.parseQuery = parseQuery;

		function parseQuery(query)
		{
			var queryText = void 0;
			var visibleTypes = void 0;
			if (query)
			{
				query.ast.getTermClauses().length && (queryText = query.ast.getTermClauses().map(function (clause)
				{
					return clause.value
				}).join(" "));
				query.ast.getFieldClauses("type") && (visibleTypes = query.ast.getFieldClauses("type")[0].value)
			}
			return {
				queryText: queryText,
				visibleTypes: visibleTypes
			}
		}
	},
	5516: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.retrieveAndExportDocs = void 0;
		exports.retrieveAndExportDocs = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(objs, savedObjectsClient)
		{
			var response, objects;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					_context.next = 2;
					return savedObjectsClient.bulkGet(objs);
				case 2:
					response = _context.sent;
					objects = response.savedObjects.map(function (obj)
					{
						return {
							_id: obj.id,
							_type: obj.type,
							_source: obj.attributes,
							_migrationVersion: obj.migrationVersion
						}
					});
					(0, _.saveToFile)(JSON.stringify(objects, null, 2));
				case 5:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function retrieveAndExportDocs(_x, _x2)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var _ = __webpack_require__(651);

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
	},
	5517: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.saveToFile = saveToFile;
		var _filesaver = __webpack_require__(858);

		function saveToFile(resultsJson)
		{
			var blob = new Blob([resultsJson],
			{
				type: "application/json"
			});
			(0, _filesaver.saveAs)(blob, "export.json")
		}
	},
	5518: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.scanAllTypes = void 0;
		exports.scanAllTypes = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee($http, typesToInclude)
		{
			var results;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					_context.next = 2;
					return $http.post(apiBase + "/export",
					{
						typesToInclude: typesToInclude
					});
				case 2:
					results = _context.sent;
					return _context.abrupt("return", results.data);
				case 4:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function scanAllTypes(_x, _x2)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var apiBase = _chrome2.default.addBasePath("/api/kibana/management/saved_objects/scroll")
	},
	5519: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _table = __webpack_require__(5520);
		Object.defineProperty(exports, "Table",
		{
			enumerable: true,
			get: function get()
			{
				return _table.Table
			}
		})
	},
	5520: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Table = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _lib = __webpack_require__(651);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var TableUI = function (_PureComponent)
		{
			_inherits(TableUI, _PureComponent);

			function TableUI()
			{
				var _ref;
				var _temp, _this, _ret;
				_classCallCheck(this, TableUI);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableUI.__proto__ || Object.getPrototypeOf(TableUI)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
					isSearchTextValid: true,
					parseErrorMessage: null
				}, _this.onChange = function (_ref2)
				{
					var query = _ref2.query,
						error = _ref2.error;
					if (error)
					{
						_this.setState(
						{
							isSearchTextValid: false,
							parseErrorMessage: error.message
						});
						return
					}
					_this.setState(
					{
						isSearchTextValid: true,
						parseErrorMessage: null
					});
					_this.props.onQueryChange(
					{
						query: query
					})
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(TableUI, [
			{
				key: "render",
				value: function render()
				{
					var _props = this.props,
						pageIndex = _props.pageIndex,
						pageSize = _props.pageSize,
						itemId = _props.itemId,
						items = _props.items,
						totalItemCount = _props.totalItemCount,
						isSearching = _props.isSearching,
						filterOptions = _props.filterOptions,
						selection = _props.selectionConfig,
						onDelete = _props.onDelete,
						onExport = _props.onExport,
						selectedSavedObjects = _props.selectedSavedObjects,
						onTableChange = _props.onTableChange,
						goInApp = _props.goInApp,
						getEditUrl = _props.getEditUrl,
						onShowRelationships = _props.onShowRelationships,
						intl = _props.intl;
					var pagination = {
						pageIndex: pageIndex,
						pageSize: pageSize,
						totalItemCount: totalItemCount,
						pageSizeOptions: [5, 10, 20, 50]
					};
					var filters = [
					{
						type: "field_value_selection",
						field: "type",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.table.typeFilterName",
							defaultMessage: "Type"
						}),
						multiSelect: "or",
						options: filterOptions
					}];
					var columns = [
					{
						field: "type",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.table.columnTypeName",
							defaultMessage: "Type"
						}),
						width: "50px",
						align: "center",
						description: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.table.columnTypeDescription",
							defaultMessage: "Type of the saved object"
						}),
						sortable: false,
						render: function render(type)
						{
							return _react2.default.createElement(_eui.EuiToolTip,
							{
								position: "top",
								content: (0, _lib.getSavedObjectLabel)(type)
							}, _react2.default.createElement(_eui.EuiIcon,
							{
								"aria-label": (0, _lib.getSavedObjectLabel)(type),
								type: (0, _lib.getSavedObjectIcon)(type),
								size: "s"
							}))
						}
					},
					{
						field: "title",
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.table.columnTitleName",
							defaultMessage: "Title"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.table.columnTitleDescription",
							defaultMessage: "Title of the saved object"
						}),
						dataType: "string",
						sortable: false,
						render: function render(title, object)
						{
							return _react2.default.createElement(_eui.EuiLink,
							{
								href: getEditUrl(object.id, object.type)
							}, title)
						}
					},
					{
						name: intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.table.columnActionsName",
							defaultMessage: "Actions"
						}),
						actions: [
						{
							name: intl.formatMessage(
							{
								id: "kbn.management.objects.objectsTable.table.columnActions.viewInAppActionName",
								defaultMessage: "In app"
							}),
							description: intl.formatMessage(
							{
								id: "kbn.management.objects.objectsTable.table.columnActions.viewInAppActionDescription",
								defaultMessage: "View this saved object within Kibana"
							}),
							type: "icon",
							icon: "eye",
							onClick: function onClick(object)
							{
								return goInApp(object.id, object.type)
							}
						},
						{
							name: intl.formatMessage(
							{
								id: "kbn.management.objects.objectsTable.table.columnActions.viewRelationshipsActionName",
								defaultMessage: "Relationships"
							}),
							description: intl.formatMessage(
							{
								id: "kbn.management.objects.objectsTable.table.columnActions.viewRelationshipsActionDescription",
								defaultMessage: "View the relationships this saved object has to other saved objects"
							}),
							type: "icon",
							icon: "kqlSelector",
							onClick: function onClick(object)
							{
								return onShowRelationships(object.id, object.type, object.title)
							}
						}]
					}];
					var queryParseError = void 0;
					if (!this.state.isSearchTextValid)
					{
						var parseErrorMsg = intl.formatMessage(
						{
							id: "kbn.management.objects.objectsTable.searchBar.unableToParseQueryErrorMessage",
							defaultMessage: "Unable to parse query"
						});
						queryParseError = _react2.default.createElement(_eui.EuiFormErrorText, null, parseErrorMsg + ". " + this.state.parseErrorMessage)
					}
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSearchBar,
					{
						box:
						{
							"data-test-subj": "savedObjectSearchBar"
						},
						filters: filters,
						onChange: this.onChange,
						toolsRight: [_react2.default.createElement(_eui.EuiButton,
						{
							key: "deleteSO",
							iconType: "trash",
							color: "danger",
							onClick: onDelete,
							isDisabled: 0 === selectedSavedObjects.length
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.table.deleteButtonLabel",
							defaultMessage: "Delete"
						})), _react2.default.createElement(_eui.EuiButton,
						{
							key: "exportSO",
							iconType: "exportAction",
							onClick: onExport,
							isDisabled: 0 === selectedSavedObjects.length
						}, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.objects.objectsTable.table.exportButtonLabel",
							defaultMessage: "Export"
						}))]
					}), queryParseError, _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement("div",
					{
						"data-test-subj": "savedObjectsTable"
					}, _react2.default.createElement(_eui.EuiBasicTable,
					{
						loading: isSearching,
						itemId: itemId,
						items: items,
						columns: columns,
						pagination: pagination,
						selection: selection,
						onChange: onTableChange
					})))
				}
			}]);
			return TableUI
		}(_react.PureComponent);
		TableUI.propTypes = {
			selectedSavedObjects: _propTypes2.default.array.isRequired,
			selectionConfig: _propTypes2.default.shape(
			{
				selectable: _propTypes2.default.func,
				selectableMessage: _propTypes2.default.func,
				onSelectionChange: _propTypes2.default.func.isRequired
			}).isRequired,
			filterOptions: _propTypes2.default.array.isRequired,
			onDelete: _propTypes2.default.func.isRequired,
			onExport: _propTypes2.default.func.isRequired,
			getEditUrl: _propTypes2.default.func.isRequired,
			goInApp: _propTypes2.default.func.isRequired,
			pageIndex: _propTypes2.default.number.isRequired,
			pageSize: _propTypes2.default.number.isRequired,
			items: _propTypes2.default.array.isRequired,
			itemId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
			totalItemCount: _propTypes2.default.number.isRequired,
			onQueryChange: _propTypes2.default.func.isRequired,
			onTableChange: _propTypes2.default.func.isRequired,
			isSearching: _propTypes2.default.bool.isRequired,
			onShowRelationships: _propTypes2.default.func.isRequired
		};
		exports.Table = (0, _react3.injectI18n)(TableUI)
	},
	5521: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.destroyIndexPatternList = void 0;
		exports.updateIndexPatternList = updateIndexPatternList;
		var _management = __webpack_require__(63);
		var _index_pattern_list = __webpack_require__(650);
		var _index_pattern_creation = __webpack_require__(649);
		__webpack_require__(5522);
		__webpack_require__(5559);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _index = __webpack_require__(5607);
		var _index2 = _interopRequireDefault(_index);
		var _saved_objects = __webpack_require__(54);
		var _feature_catalogue = __webpack_require__(79);
		var _i18n = __webpack_require__(12);
		var _react = __webpack_require__(8);
		var _react2 = __webpack_require__(0);
		var _react3 = _interopRequireDefault(_react2);
		var _reactDom = __webpack_require__(17);
		var _index_pattern_list2 = __webpack_require__(5608);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var INDEX_PATTERN_LIST_DOM_ELEMENT_ID = "indexPatternListReact";

		function updateIndexPatternList($scope, indexPatternCreationOptions, defaultIndex, indexPatterns)
		{
			var node = document.getElementById(INDEX_PATTERN_LIST_DOM_ELEMENT_ID);
			if (!node) return;
			(0, _reactDom.render)(_react3.default.createElement(_react.I18nProvider, null, _react3.default.createElement(_index_pattern_list2.IndexPatternList,
			{
				indexPatternCreationOptions: indexPatternCreationOptions,
				defaultIndex: defaultIndex,
				indexPatterns: indexPatterns
			})), node)
		}
		var destroyIndexPatternList = exports.destroyIndexPatternList = function destroyIndexPatternList()
		{
			var node = document.getElementById(INDEX_PATTERN_LIST_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		};
		var indexPatternsResolutions = {
			indexPatterns: function indexPatterns(Private)
			{
				var savedObjectsClient = Private(_saved_objects.SavedObjectsClientProvider);
				return savedObjectsClient.find(
				{
					type: "index-pattern",
					fields: ["title", "type"],
					perPage: 1e4
				}).then(function (response)
				{
					return response.savedObjects
				})
			}
		};
		_routes2.default.defaults(/management\/kibana\/indices/,
		{
			resolve: indexPatternsResolutions
		});
		_routes2.default.defaults(/management\/kibana\/index/,
		{
			resolve: indexPatternsResolutions
		});
		_modules.uiModules.get("apps/management").directive("kbnManagementIndices", function ($route, config, kbnUrl, Private)
		{
			return {
				restrict: "E",
				transclude: true,
				template: _index2.default,
				link: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee($scope)
					{
						var indexPatternListProvider, indexPatternCreationProvider, indexPatternCreationOptions, renderList;
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								indexPatternListProvider = Private(_index_pattern_list.IndexPatternListFactory)();
								indexPatternCreationProvider = Private(_index_pattern_creation.IndexPatternCreationFactory)();
								_context.next = 4;
								return indexPatternCreationProvider.getIndexPatternCreationOptions(function (url)
								{
									$scope.$evalAsync(function ()
									{
										return kbnUrl.change(url)
									})
								});
							case 4:
								indexPatternCreationOptions = _context.sent;
								renderList = function renderList()
								{
									$scope.indexPatternList = $route.current.locals.indexPatterns.map(function (pattern)
									{
										var id = pattern.id;
										var tags = indexPatternListProvider.getIndexPatternTags(pattern, $scope.defaultIndex === id);
										return {
											id: id,
											title: pattern.get("title"),
											url: kbnUrl.eval("#/management/kibana/indices/{{id}}",
											{
												id: id
											}),
											active: $scope.editingId === id,
											default: $scope.defaultIndex === id,
											tag: tags && tags.length ? tags[0] : null
										}
									}).sort(function (a, b)
									{
										if (a.default) return -1;
										if (b.default) return 1;
										if (a.title < b.title) return -1;
										if (a.title > b.title) return 1;
										return 0
									}) || [];
									updateIndexPatternList($scope, indexPatternCreationOptions, $scope.defaultIndex, $scope.indexPatternList)
								};
								$scope.$on("$destroy", destroyIndexPatternList);
								$scope.editingId = $route.current.params.indexPatternId;
								$scope.$watch("defaultIndex", function ()
								{
									return renderList()
								});
								config.bindToScope($scope, "defaultIndex");
								$scope.$apply();
							case 11:
							case "end":
								return _context.stop()
							}
						}, _callee, this)
					}));

					function link(_x)
					{
						return _ref.apply(this, arguments)
					}
					return link
				}()
			}
		});
		/*
		_management.management.getSection("kibana").register("indices",
		{
			display: _i18n.i18n.translate("kbn.management.indexPattern.sectionsHeader",
			{
				defaultMessage: "Index Patterns"
			}),
			order: 0,
			url: "#/management/kibana/indices/"
		});
		*/
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "index_patterns",
				title: _i18n.i18n.translate("kbn.management.indexPatternHeader",
				{
					defaultMessage: "Index Patterns"
				}),
				description: _i18n.i18n.translate("kbn.management.indexPatternLabel",
				{
					defaultMessage: "Manage the index patterns that help retrieve your data from Elasticsearch."
				}),
				icon: "indexPatternApp",
				path: "/app/kibana#/management/kibana/indices",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5522: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _saved_objects = __webpack_require__(54);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _angular_template = __webpack_require__(5523);
		var _angular_template2 = _interopRequireDefault(_angular_template);
		__webpack_require__(151);
		var _index_pattern_creation = __webpack_require__(649);
		var _render = __webpack_require__(5524);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_routes2.default.when("/management/kibana/index",
		{
			template: _angular_template2.default,
			controller: function controller($scope, $injector)
			{
				var kbnUrl = $injector.get("kbnUrl");
				var Private = $injector.get("Private");
				$scope.$$postDigest(function ()
				{
					var $routeParams = $injector.get("$routeParams");
					var indexPatternCreationProvider = Private(_index_pattern_creation.IndexPatternCreationFactory)($routeParams.type);
					var indexPatternCreationType = indexPatternCreationProvider.getType();
					var services = {
						config: $injector.get("config"),
						es: $injector.get("es"),
						indexPatterns: $injector.get("indexPatterns"),
						savedObjectsClient: Private(_saved_objects.SavedObjectsClientProvider),
						indexPatternCreationType: indexPatternCreationType,
						changeUrl: function changeUrl(url)
						{
							$scope.$evalAsync(function ()
							{
								return kbnUrl.changePath(url)
							})
						}
					};
					var initialQuery = $routeParams.id ? decodeURIComponent($routeParams.id) : void 0;
					(0, _render.renderCreateIndexPatternWizard)(initialQuery, services)
				});
				$scope.$on("$destroy", _render.destroyCreateIndexPatternWizard)
			}
		})
	},
	5523: function (module, exports)
	{
		module.exports = '<kbn-management-app section="kibana">\n  <kbn-management-indices>\n    <div id="createIndexPatternReact"></div>\n  </kbn-management-indices>\n</kbn-management-app>\n'
	},
	5524: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.renderCreateIndexPatternWizard = renderCreateIndexPatternWizard;
		exports.destroyCreateIndexPatternWizard = destroyCreateIndexPatternWizard;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _reactDom = __webpack_require__(17);
		var _create_index_pattern_wizard = __webpack_require__(5525);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var CREATE_INDEX_PATTERN_DOM_ELEMENT_ID = "createIndexPatternReact";

		function renderCreateIndexPatternWizard(initialQuery, services)
		{
			var node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
			if (!node) return;
			(0, _reactDom.render)(_react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_create_index_pattern_wizard.CreateIndexPatternWizard,
			{
				initialQuery: initialQuery,
				services: services
			})), node)
		}

		function destroyCreateIndexPatternWizard()
		{
			var node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		}
	},
	5525: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.CreateIndexPatternWizard = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _step_index_pattern = __webpack_require__(5526);
		var _step_time_field = __webpack_require__(5542);
		var _header = __webpack_require__(5553);
		var _loading_state = __webpack_require__(5555);
		var _empty_state = __webpack_require__(5557);
		var _constants = __webpack_require__(652);
		var _lib = __webpack_require__(963);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var CreateIndexPatternWizard = exports.CreateIndexPatternWizard = function (_Component)
		{
			_inherits(CreateIndexPatternWizard, _Component);

			function CreateIndexPatternWizard(props)
			{
				var _this2 = this;
				_classCallCheck(this, CreateIndexPatternWizard);
				var _this = _possibleConstructorReturn(this, (CreateIndexPatternWizard.__proto__ || Object.getPrototypeOf(CreateIndexPatternWizard)).call(this, props));
				_this.fetchIndices = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var services, allIndices;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_this.setState(
							{
								allIndices: [],
								isInitiallyLoadingIndices: true
							});
							services = _this.props.services;
							_context.next = 4;
							return (0, _lib.ensureMinimumTime)((0, _lib.getIndices)(services.es, _this.indexPatternCreationType, "*", _constants.MAX_SEARCH_SIZE));
						case 4:
							allIndices = _context.sent;
							_this.setState(
							{
								allIndices: allIndices,
								isInitiallyLoadingIndices: false
							});
						case 6:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2)
				}));
				_this.createIndexPattern = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(timeFieldName, indexPatternId)
				{
					var services, indexPattern, emptyPattern, createdId;
					return regeneratorRuntime.wrap(function _callee2$(_context2)
					{
						while (1) switch (_context2.prev = _context2.next)
						{
						case 0:
							services = _this.props.services;
							indexPattern = _this.state.indexPattern;
							_context2.next = 4;
							return services.indexPatterns.get();
						case 4:
							emptyPattern = _context2.sent;
							Object.assign(emptyPattern, _extends(
							{
								id: indexPatternId,
								title: indexPattern,
								timeFieldName: timeFieldName
							}, _this.indexPatternCreationType.getIndexPatternMappings()));
							_context2.next = 8;
							return emptyPattern.create();
						case 8:
							createdId = _context2.sent;
							if (services.config.get("defaultIndex"))
							{
								_context2.next = 12;
								break
							}
							_context2.next = 12;
							return services.config.set("defaultIndex", createdId);
						case 12:
							services.indexPatterns.cache.clear(createdId);
							services.changeUrl("/management/kibana/indices/" + createdId);
						case 14:
						case "end":
							return _context2.stop()
						}
					}, _callee2, _this2)
				})), function (_x, _x2)
				{
					return _ref2.apply(this, arguments)
				});
				var _ref2;
				_this.goToTimeFieldStep = function (indexPattern)
				{
					_this.setState(
					{
						step: 2,
						indexPattern: indexPattern
					})
				};
				_this.goToIndexPatternStep = function ()
				{
					_this.setState(
					{
						step: 1
					})
				};
				_this.onChangeIncludingSystemIndices = function ()
				{
					_this.setState(function (state)
					{
						return {
							isIncludingSystemIndices: !state.isIncludingSystemIndices
						}
					})
				};
				_this.indexPatternCreationType = _this.props.services.indexPatternCreationType;
				_this.state = {
					step: 1,
					indexPattern: "",
					allIndices: [],
					isInitiallyLoadingIndices: true,
					isIncludingSystemIndices: false
				};
				return _this
			}
			_createClass(CreateIndexPatternWizard, [
			{
				key: "componentWillMount",
				value: function ()
				{
					var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3()
					{
						return regeneratorRuntime.wrap(function _callee3$(_context3)
						{
							while (1) switch (_context3.prev = _context3.next)
							{
							case 0:
								this.fetchIndices();
							case 1:
							case "end":
								return _context3.stop()
							}
						}, _callee3, this)
					}));

					function componentWillMount()
					{
						return _ref3.apply(this, arguments)
					}
					return componentWillMount
				}()
			},
			{
				key: "renderHeader",
				value: function renderHeader()
				{
					var isIncludingSystemIndices = this.state.isIncludingSystemIndices;
					return _react2.default.createElement(_header.Header,
					{
						prompt: this.indexPatternCreationType.renderPrompt(),
						showSystemIndices: this.indexPatternCreationType.getShowSystemIndices(),
						isIncludingSystemIndices: isIncludingSystemIndices,
						onChangeIncludingSystemIndices: this.onChangeIncludingSystemIndices,
						indexPatternName: this.indexPatternCreationType.getIndexPatternName(),
						isBeta: this.indexPatternCreationType.getIsBeta()
					})
				}
			},
			{
				key: "renderContent",
				value: function renderContent()
				{
					var _state = this.state,
						allIndices = _state.allIndices,
						isInitiallyLoadingIndices = _state.isInitiallyLoadingIndices,
						isIncludingSystemIndices = _state.isIncludingSystemIndices,
						step = _state.step,
						indexPattern = _state.indexPattern;
					if (isInitiallyLoadingIndices) return _react2.default.createElement(_loading_state.LoadingState, null);
					var hasDataIndices = allIndices.some(function (_ref4)
					{
						var name = _ref4.name;
						return !name.startsWith(".")
					});
					if (!hasDataIndices && !isIncludingSystemIndices) return _react2.default.createElement(_empty_state.EmptyState,
					{
						onRefresh: this.fetchIndices
					});
					if (1 === step)
					{
						var _props = this.props,
							services = _props.services,
							initialQuery = _props.initialQuery;
						return _react2.default.createElement(_step_index_pattern.StepIndexPattern,
						{
							allIndices: allIndices,
							initialQuery: indexPattern || initialQuery,
							isIncludingSystemIndices: isIncludingSystemIndices,
							esService: services.es,
							savedObjectsClient: services.savedObjectsClient,
							indexPatternCreationType: this.indexPatternCreationType,
							goToNextStep: this.goToTimeFieldStep
						})
					}
					if (2 === step)
					{
						var _services = this.props.services;
						return _react2.default.createElement(_step_time_field.StepTimeField,
						{
							indexPattern: indexPattern,
							indexPatternsService: _services.indexPatterns,
							goToPreviousStep: this.goToIndexPatternStep,
							createIndexPattern: this.createIndexPattern,
							indexPatternCreationType: this.indexPatternCreationType
						})
					}
					return null
				}
			},
			{
				key: "render",
				value: function render()
				{
					var header = this.renderHeader();
					var content = this.renderContent();
					return _react2.default.createElement("div", null, header, content)
				}
			}]);
			return CreateIndexPatternWizard
		}(_react.Component);
		CreateIndexPatternWizard.propTypes = {
			initialQuery: _propTypes2.default.string,
			services: _propTypes2.default.shape(
			{
				es: _propTypes2.default.object.isRequired,
				indexPatterns: _propTypes2.default.object.isRequired,
				savedObjectsClient: _propTypes2.default.object.isRequired,
				indexPatternCreationType: _propTypes2.default.object.isRequired,
				config: _propTypes2.default.object.isRequired,
				changeUrl: _propTypes2.default.func.isRequired
			}).isRequired
		}
	},
	5526: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _step_index_pattern = __webpack_require__(5527);
		Object.defineProperty(exports, "StepIndexPattern",
		{
			enumerable: true,
			get: function get()
			{
				return _step_index_pattern.StepIndexPattern
			}
		})
	},
	5527: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.StepIndexPattern = exports.StepIndexPatternComponent = void 0;
		var _slicedToArray = function ()
		{
			function sliceIterator(arr, i)
			{
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = void 0;
				try
				{
					for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true)
					{
						_arr.push(_s.value);
						if (i && _arr.length === i) break
					}
				}
				catch (err)
				{
					_d = true;
					_e = err
				}
				finally
				{
					try
					{
						!_n && _i["return"] && _i["return"]()
					}
					finally
					{
						if (_d) throw _e
					}
				}
				return _arr
			}
			return function (arr, i)
			{
				if (Array.isArray(arr)) return arr;
				if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _index_patterns = __webpack_require__(151);
		var _constants = __webpack_require__(652);
		var _lib = __webpack_require__(963);
		var _loading_indices = __webpack_require__(5534);
		var _status_message = __webpack_require__(5536);
		var _indices_list = __webpack_require__(5538);
		var _header = __webpack_require__(5540);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);
		var _chrome = __webpack_require__(9);
		var _chrome2 = _interopRequireDefault(_chrome);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var uiSettings = _chrome2.default.getUiSettingsClient();
		var StepIndexPatternComponent = exports.StepIndexPatternComponent = function (_Component)
		{
			_inherits(StepIndexPatternComponent, _Component);

			function StepIndexPatternComponent(props)
			{
				_classCallCheck(this, StepIndexPatternComponent);
				var _this = _possibleConstructorReturn(this, (StepIndexPatternComponent.__proto__ || Object.getPrototypeOf(StepIndexPatternComponent)).call(this, props));
				_initialiseProps.call(_this);
				var indexPatternCreationType = _this.props.indexPatternCreationType;
				_this.state = {
					partialMatchedIndices: [],
					exactMatchedIndices: [],
					isLoadingIndices: false,
					existingIndexPatterns: [],
					indexPatternExists: false,
					query: props.initialQuery,
					appendedWildcard: false,
					showingIndexPatternQueryErrors: false,
					indexPatternName: indexPatternCreationType.getIndexPatternName()
				};
				_this.ILLEGAL_CHARACTERS = [].concat(_toConsumableArray(_index_patterns.INDEX_PATTERN_ILLEGAL_CHARACTERS));
				_this.lastQuery = null;
				return _this
			}
			_createClass(StepIndexPatternComponent, [
			{
				key: "componentWillMount",
				value: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
					{
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								this.fetchExistingIndexPatterns();
								if (this.state.query)
								{
									this.lastQuery = this.state.query;
									this.fetchIndices(this.state.query)
								}
							case 2:
							case "end":
								return _context.stop()
							}
						}, _callee, this)
					}));

					function componentWillMount()
					{
						return _ref.apply(this, arguments)
					}
					return componentWillMount
				}()
			},
			{
				key: "renderLoadingState",
				value: function renderLoadingState()
				{
					var isLoadingIndices = this.state.isLoadingIndices;
					if (!isLoadingIndices) return null;
					return _react2.default.createElement(_loading_indices.LoadingIndices,
					{
						"data-test-subj": "createIndexPatternStep1Loading"
					})
				}
			},
			{
				key: "renderStatusMessage",
				value: function renderStatusMessage(matchedIndices)
				{
					var indexPatternCreationType = this.props.indexPatternCreationType;
					var _state = this.state,
						query = _state.query,
						isLoadingIndices = _state.isLoadingIndices,
						indexPatternExists = _state.indexPatternExists,
						isIncludingSystemIndices = _state.isIncludingSystemIndices;
					if (isLoadingIndices || indexPatternExists) return null;
					return _react2.default.createElement(_status_message.StatusMessage,
					{
						matchedIndices: matchedIndices,
						showSystemIndices: indexPatternCreationType.getShowSystemIndices(),
						isIncludingSystemIndices: isIncludingSystemIndices,
						query: query
					})
				}
			},
			{
				key: "renderList",
				value: function renderList(_ref2)
				{
					var visibleIndices = _ref2.visibleIndices,
						allIndices = _ref2.allIndices;
					var _state2 = this.state,
						query = _state2.query,
						isLoadingIndices = _state2.isLoadingIndices,
						indexPatternExists = _state2.indexPatternExists;
					if (isLoadingIndices || indexPatternExists) return null;
					var indicesToList = query.length ? visibleIndices : allIndices;
					return _react2.default.createElement(_indices_list.IndicesList,
					{
						"data-test-subj": "createIndexPatternStep1IndicesList",
						query: query,
						indices: indicesToList
					})
				}
			},
			{
				key: "renderIndexPatternExists",
				value: function renderIndexPatternExists()
				{
					var _state3 = this.state,
						indexPatternExists = _state3.indexPatternExists,
						query = _state3.query;
					if (!indexPatternExists) return null;
					return _react2.default.createElement(_eui.EuiCallOut,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.createIndexPattern.step.warningHeader",
							defaultMessage: "There's already an index pattern called {query}",
							values:
							{
								query: query
							}
						}),
						iconType: "help",
						color: "warning"
					})
				}
			},
			{
				key: "renderHeader",
				value: function renderHeader(_ref3)
				{
					var indices = _ref3.exactMatchedIndices;
					var _props = this.props,
						goToNextStep = _props.goToNextStep,
						indexPatternCreationType = _props.indexPatternCreationType,
						intl = _props.intl;
					var _state4 = this.state,
						query = _state4.query,
						showingIndexPatternQueryErrors = _state4.showingIndexPatternQueryErrors,
						indexPatternExists = _state4.indexPatternExists,
						indexPatternName = _state4.indexPatternName;
					var containsErrors = false;
					var errors = [];
					var characterList = this.ILLEGAL_CHARACTERS.slice(0, this.ILLEGAL_CHARACTERS.length - 1).join(", ");
					var checkIndices = indexPatternCreationType.checkIndicesForErrors(indices);
					if (query && query.length && "." !== query && ".." !== query)
					{
						if ((0, _lib.containsIllegalCharacters)(query, _index_patterns.INDEX_PATTERN_ILLEGAL_CHARACTERS))
						{
							var errorMessage = intl.formatMessage(
							{
								id: "kbn.management.createIndexPattern.step.invalidCharactersErrorMessage",
								defaultMessage: "A {indexPatternName} cannot contain spaces or the characters: {characterList}"
							},
							{
								characterList: characterList,
								indexPatternName: indexPatternName
							});
							errors.push(errorMessage);
							containsErrors = true
						}
						else if (checkIndices)
						{
							errors.push.apply(errors, _toConsumableArray(checkIndices));
							containsErrors = true
						}
					}
					else containsErrors = true;
					var isInputInvalid = showingIndexPatternQueryErrors && containsErrors && errors.length > 0;
					var isNextStepDisabled = containsErrors || 0 === indices.length || indexPatternExists;
					return _react2.default.createElement(_header.Header,
					{
						"data-test-subj": "createIndexPatternStep1Header",
						isInputInvalid: isInputInvalid,
						errors: errors,
						characterList: characterList,
						query: query,
						onQueryChanged: this.onQueryChanged,
						goToNextStep: goToNextStep,
						isNextStepDisabled: isNextStepDisabled
					})
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _props2 = this.props,
						isIncludingSystemIndices = _props2.isIncludingSystemIndices,
						allIndices = _props2.allIndices;
					var _state5 = this.state,
						query = _state5.query,
						partialMatchedIndices = _state5.partialMatchedIndices,
						exactMatchedIndices = _state5.exactMatchedIndices;
					var matchedIndices = (0, _lib.getMatchedIndices)(allIndices, partialMatchedIndices, exactMatchedIndices, query, isIncludingSystemIndices);
					return _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, this.renderHeader(matchedIndices), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), this.renderLoadingState(matchedIndices), this.renderIndexPatternExists(), this.renderStatusMessage(matchedIndices), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), this.renderList(matchedIndices))
				}
			}]);
			return StepIndexPatternComponent
		}(_react.Component);
		StepIndexPatternComponent.propTypes = {
			allIndices: _propTypes2.default.array.isRequired,
			isIncludingSystemIndices: _propTypes2.default.bool.isRequired,
			esService: _propTypes2.default.object.isRequired,
			savedObjectsClient: _propTypes2.default.object.isRequired,
			indexPatternCreationType: _propTypes2.default.object.isRequired,
			goToNextStep: _propTypes2.default.func.isRequired,
			initialQuery: _propTypes2.default.string
		};
		StepIndexPatternComponent.defaultProps = {
			initialQuery: uiSettings.get("indexPattern:placeholder")
		};
		var _initialiseProps = function _initialiseProps()
		{
			var _this2 = this;
			this.fetchExistingIndexPatterns = _asyncToGenerator(regeneratorRuntime.mark(function _callee2()
			{
				var _ref5, savedObjects, existingIndexPatterns;
				return regeneratorRuntime.wrap(function _callee2$(_context2)
				{
					while (1) switch (_context2.prev = _context2.next)
					{
					case 0:
						_context2.next = 2;
						return _this2.props.savedObjectsClient.find(
						{
							type: "index-pattern",
							fields: ["title"],
							perPage: 1e4
						});
					case 2:
						_ref5 = _context2.sent;
						savedObjects = _ref5.savedObjects;
						existingIndexPatterns = savedObjects.map(function (obj)
						{
							return obj && obj.attributes ? obj.attributes.title : ""
						});
						_this2.setState(
						{
							existingIndexPatterns: existingIndexPatterns
						});
					case 6:
					case "end":
						return _context2.stop()
					}
				}, _callee2, _this2)
			}));
			this.fetchIndices = (_ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(query)
			{
				var _props3, esService, indexPatternCreationType, existingIndexPatterns, _exactMatchedIndices, _ref7, _ref8, partialMatchedIndices, exactMatchedIndices;
				return regeneratorRuntime.wrap(function _callee3$(_context3)
				{
					while (1) switch (_context3.prev = _context3.next)
					{
					case 0:
						_props3 = _this2.props, esService = _props3.esService, indexPatternCreationType = _props3.indexPatternCreationType;
						existingIndexPatterns = _this2.state.existingIndexPatterns;
						if (!existingIndexPatterns.includes(query))
						{
							_context3.next = 5;
							break
						}
						_this2.setState(
						{
							indexPatternExists: true
						});
						return _context3.abrupt("return");
					case 5:
						_this2.setState(
						{
							isLoadingIndices: true,
							indexPatternExists: false
						});
						if (!query.endsWith("*"))
						{
							_context3.next = 14;
							break
						}
						_context3.next = 9;
						return (0, _lib.ensureMinimumTime)((0, _lib.getIndices)(esService, indexPatternCreationType, query, _constants.MAX_SEARCH_SIZE));
					case 9:
						_exactMatchedIndices = _context3.sent;
						if (!(query !== _this2.lastQuery))
						{
							_context3.next = 12;
							break
						}
						return _context3.abrupt("return");
					case 12:
						_this2.setState(
						{
							exactMatchedIndices: _exactMatchedIndices,
							isLoadingIndices: false
						});
						return _context3.abrupt("return");
					case 14:
						_context3.next = 16;
						return (0, _lib.ensureMinimumTime)([(0, _lib.getIndices)(esService, indexPatternCreationType, query + "*", _constants.MAX_SEARCH_SIZE), (0, _lib.getIndices)(esService, indexPatternCreationType, query, _constants.MAX_SEARCH_SIZE)]);
					case 16:
						_ref7 = _context3.sent;
						_ref8 = _slicedToArray(_ref7, 2);
						partialMatchedIndices = _ref8[0];
						exactMatchedIndices = _ref8[1];
						if (!(query !== _this2.lastQuery))
						{
							_context3.next = 22;
							break
						}
						return _context3.abrupt("return");
					case 22:
						_this2.setState(
						{
							partialMatchedIndices: partialMatchedIndices,
							exactMatchedIndices: exactMatchedIndices,
							isLoadingIndices: false
						});
					case 23:
					case "end":
						return _context3.stop()
					}
				}, _callee3, _this2)
			})), function (_x)
			{
				return _ref6.apply(this, arguments)
			});
			var _ref6;
			this.onQueryChanged = function (e)
			{
				var appendedWildcard = _this2.state.appendedWildcard;
				var target = e.target;
				var query = target.value;
				if (1 === query.length && (0, _lib.canAppendWildcard)(query))
				{
					query += "*";
					_this2.setState(
					{
						appendedWildcard: true
					});
					setTimeout(function ()
					{
						return target.setSelectionRange(1, 1)
					})
				}
				else if ("*" === query && appendedWildcard)
				{
					query = "";
					_this2.setState(
					{
						appendedWildcard: false
					})
				}
				_this2.lastQuery = query;
				_this2.setState(
				{
					query: query,
					showingIndexPatternQueryErrors: !!query.length
				});
				_this2.fetchIndices(query)
			}
		};
		exports.StepIndexPattern = (0, _react3.injectI18n)(StepIndexPatternComponent)
	},
	5528: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.canAppendWildcard = function canAppendWildcard(keyPressed)
		{
			if (!keyPressed || !/[a-z0-9]/i.test(keyPressed) || 1 !== keyPressed.length) return false;
			return true
		}
	},
	5529: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ensureMinimumTime = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(promiseOrPromises)
		{
			var minimumTimeMs = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DEFAULT_MINIMUM_TIME_MS;
			var returnValue, bufferedMinimumTimeMs, asyncActionStartTime, asyncActionCompletionTime, asyncActionDuration, additionalWaitingTime;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					returnValue = void 0;
					bufferedMinimumTimeMs = minimumTimeMs + 5;
					asyncActionStartTime = (new Date).getTime();
					if (!Array.isArray(promiseOrPromises))
					{
						_context.next = 9;
						break
					}
					_context.next = 6;
					return Promise.all(promiseOrPromises);
				case 6:
					returnValue = _context.sent;
					_context.next = 12;
					break;
				case 9:
					_context.next = 11;
					return promiseOrPromises;
				case 11:
					returnValue = _context.sent;
				case 12:
					asyncActionCompletionTime = (new Date).getTime();
					asyncActionDuration = asyncActionCompletionTime - asyncActionStartTime;
					if (!(asyncActionDuration < bufferedMinimumTimeMs))
					{
						_context.next = 18;
						break
					}
					additionalWaitingTime = bufferedMinimumTimeMs - (asyncActionCompletionTime - asyncActionStartTime);
					_context.next = 18;
					return new Promise(function (resolve)
					{
						return setTimeout(resolve, additionalWaitingTime)
					});
				case 18:
					return _context.abrupt("return", returnValue);
				case 19:
				case "end":
					return _context.stop()
				}
			}, _callee, this)
		})), function ensureMinimumTime(_x2)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var DEFAULT_MINIMUM_TIME_MS = exports.DEFAULT_MINIMUM_TIME_MS = 300
	},
	5530: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getIndices = void 0;
		exports.getIndices = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(es, indexPatternCreationType, rawPattern, limit)
		{
			var pattern, params, response, type;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					pattern = rawPattern.trim();
					if (!("*:" === pattern))
					{
						_context.next = 3;
						break
					}
					return _context.abrupt("return", []);
				case 3:
					if (!("" === pattern))
					{
						_context.next = 5;
						break
					}
					return _context.abrupt("return", []);
				case 5:
					if (!pattern.startsWith(","))
					{
						_context.next = 7;
						break
					}
					return _context.abrupt("return", []);
				case 7:
					if (limit)
					{
						_context.next = 9;
						break
					}
					throw new Error("`getIndices()` was called without the required `limit` parameter.");
				case 9:
					params = {
						index: pattern,
						ignore: [404],
						body:
						{
							size: 0,
							aggs:
							{
								indices:
								{
									terms:
									{
										field: "_index",
										size: limit
									}
								}
							}
						}
					};
					_context.prev = 10;
					_context.next = 13;
					return es.search(params);
				case 13:
					response = _context.sent;
					if (!(!response || response.error || !response.aggregations))
					{
						_context.next = 16;
						break
					}
					return _context.abrupt("return", []);
				case 16:
					return _context.abrupt("return", (0, _lodash.sortBy)(response.aggregations.indices.buckets.map(function (bucket)
					{
						return bucket.key
					}).map(function (indexName)
					{
						return {
							name: indexName,
							tags: indexPatternCreationType.getIndexTags(indexName)
						}
					}), "name"));
				case 19:
					_context.prev = 19;
					_context.t0 = _context["catch"](10);
					type = (0, _lodash.get)(_context.t0, "body.error.caused_by.type");
					if (!("index_not_found_exception" === type))
					{
						_context.next = 24;
						break
					}
					return _context.abrupt("return", []);
				case 24:
					throw _context.t0;
				case 25:
				case "end":
					return _context.stop()
				}
			}, _callee, this, [
				[10, 19]
			])
		})), function getIndices(_x, _x2, _x3, _x4)
		{
			return _ref.apply(this, arguments)
		});
		var _ref;
		var _lodash = __webpack_require__(1);

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
	},
	5531: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getMatchedIndices = getMatchedIndices;
		var _constants = __webpack_require__(652);

		function isSystemIndex(index)
		{
			if (index.startsWith(".")) return true;
			if (index.includes(":")) return index.split(":").reduce(function (isSystem, index)
			{
				return isSystem || isSystemIndex(index)
			}, false);
			return false
		}

		function filterSystemIndices(indices, isIncludingSystemIndices)
		{
			if (!indices) return indices;
			var acceptableIndices = isIncludingSystemIndices ? indices : indices.filter(function (index)
			{
				return !isSystemIndex(index.name)
			});
			return acceptableIndices.slice(0, _constants.MAX_NUMBER_OF_MATCHING_INDICES)
		}

		function getMatchedIndices(unfilteredAllIndices, unfilteredPartialMatchedIndices, unfilteredExactMatchedIndices, query, isIncludingSystemIndices)
		{
			var allIndices = filterSystemIndices(unfilteredAllIndices, isIncludingSystemIndices);
			var partialMatchedIndices = filterSystemIndices(unfilteredPartialMatchedIndices, isIncludingSystemIndices);
			var exactMatchedIndices = filterSystemIndices(unfilteredExactMatchedIndices, isIncludingSystemIndices);
			var visibleIndices = void 0;
			visibleIndices = exactMatchedIndices.length ? exactMatchedIndices : partialMatchedIndices.length ? partialMatchedIndices : allIndices;
			return {
				allIndices: allIndices,
				exactMatchedIndices: exactMatchedIndices,
				partialMatchedIndices: partialMatchedIndices,
				visibleIndices: visibleIndices
			}
		}
	},
	5532: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.containsIllegalCharacters = containsIllegalCharacters;

		function containsIllegalCharacters(pattern, illegalCharacters)
		{
			return illegalCharacters.some(function (char)
			{
				return pattern.includes(char)
			})
		}
	},
	5533: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.extractTimeFields = extractTimeFields;
		var _i18n = __webpack_require__(12);

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function extractTimeFields(fields)
		{
			var dateFields = fields.filter(function (field)
			{
				return "date" === field.type
			});
			var label = _i18n.i18n.translate("kbn.management.createIndexPattern.stepTime.noTimeFieldsLabel",
			{
				defaultMessage: "The indices which match this index pattern don't contain any time fields."
			});
			if (0 === dateFields.length) return [
			{
				display: label
			}];
			var disabledDividerOption = {
				isDisabled: true,
				display: "───",
				fieldName: ""
			};
			var noTimeFieldLabel = _i18n.i18n.translate("kbn.management.createIndexPattern.stepTime.noTimeFieldOptionLabel",
			{
				defaultMessage: "I don't want to use the Time Filter"
			});
			var noTimeFieldOption = {
				display: noTimeFieldLabel,
				fieldName: void 0
			};
			return [].concat(_toConsumableArray(dateFields.map(function (field)
			{
				return {
					display: field.name,
					fieldName: field.name
				}
			})), [disabledDividerOption, noTimeFieldOption])
		}
	},
	5534: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _loading_indices = __webpack_require__(5535);
		Object.defineProperty(exports, "LoadingIndices",
		{
			enumerable: true,
			get: function get()
			{
				return _loading_indices.LoadingIndices
			}
		})
	},
	5535: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.LoadingIndices = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _objectWithoutProperties(obj, keys)
		{
			var target = {};
			for (var i in obj)
			{
				if (keys.indexOf(i) >= 0) continue;
				if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
				target[i] = obj[i]
			}
			return target
		}
		var LoadingIndices = function LoadingIndices(_ref)
		{
			var rest = _objectWithoutProperties(_ref, []);
			return _react2.default.createElement(_eui.EuiFlexGroup, _extends(
			{
				justifyContent: "center",
				alignItems: "center"
			}, rest), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiLoadingSpinner,
			{
				size: "m"
			})), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.step.loadingHeader",
				defaultMessage: "Looking for matching indices..."
			}))), _react2.default.createElement(_eui.EuiText,
			{
				size: "s",
				style:
				{
					textAlign: "center"
				}
			}, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.step.loadingLabel",
				defaultMessage: "Just a sec..."
			})))))
		};
		exports.LoadingIndices = LoadingIndices
	},
	5536: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _status_message = __webpack_require__(5537);
		Object.defineProperty(exports, "StatusMessage",
		{
			enumerable: true,
			get: function get()
			{
				return _status_message.StatusMessage
			}
		})
	},
	5537: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.StatusMessage = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.StatusMessage = function StatusMessage(_ref)
		{
			var _ref$matchedIndices = _ref.matchedIndices,
				_ref$matchedIndices$a = _ref$matchedIndices.allIndices,
				allIndices = void 0 === _ref$matchedIndices$a ? [] : _ref$matchedIndices$a,
				_ref$matchedIndices$e = _ref$matchedIndices.exactMatchedIndices,
				exactMatchedIndices = void 0 === _ref$matchedIndices$e ? [] : _ref$matchedIndices$e,
				_ref$matchedIndices$p = _ref$matchedIndices.partialMatchedIndices,
				partialMatchedIndices = void 0 === _ref$matchedIndices$p ? [] : _ref$matchedIndices$p,
				isIncludingSystemIndices = _ref.isIncludingSystemIndices,
				query = _ref.query,
				showSystemIndicies = _ref.showSystemIndicies;
			var statusIcon = void 0;
			var statusMessage = void 0;
			var statusColor = void 0;
			var allIndicesLength = allIndices.length;
			if (0 === query.length)
			{
				statusIcon = null;
				statusColor = "default";
				statusMessage = allIndicesLength > 1 ? _react2.default.createElement("span", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.status.matchAnyLabel.matchAnyDetail",
					defaultMessage: "Your index pattern can match any of your {strongIndices}, below.",
					values:
					{
						strongIndices: _react2.default.createElement("strong", null, allIndicesLength, " indices")
					}
				})) : !isIncludingSystemIndices && showSystemIndicies ? _react2.default.createElement("span", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.status.noSystemIndicesWithPromptLabel",
					defaultMessage: "No Elasticsearch indices match your pattern. To view the matching system indices, toggle the switch in the upper right."
				})) : _react2.default.createElement("span", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.status.noSystemIndicesLabel",
					defaultMessage: "No Elasticsearch indices match your pattern."
				}))
			}
			else if (exactMatchedIndices.length)
			{
				statusIcon = "check";
				statusColor = "secondary";
				statusMessage = _react2.default.createElement("span", null, " ", _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.status.successLabel.successDetail",
					defaultMessage: "{strongSuccess} Your index pattern matches {strongIndices}.",
					values:
					{
						strongSuccess: _react2.default.createElement("strong", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.createIndexPattern.step.status.successLabel.strongSuccessLabel",
							defaultMessage: "Success!"
						})),
						strongIndices: _react2.default.createElement("strong", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.createIndexPattern.step.status.successLabel.strongIndicesLabel",
							defaultMessage: "{indicesLength, plural, one {# index} other {# indices}}",
							values:
							{
								indicesLength: exactMatchedIndices.length
							}
						}))
					}
				}))
			}
			else if (partialMatchedIndices.length)
			{
				statusIcon = null;
				statusColor = "default";
				statusMessage = _react2.default.createElement("span", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.status.partialMatchLabel.partialMatchDetail",
					defaultMessage: "Your index pattern doesn't match any indices, but you have {strongIndices} which {matchedIndicesLength, plural, one {looks} other {look}} similar.",
					values:
					{
						matchedIndicesLength: partialMatchedIndices.length,
						strongIndices: _react2.default.createElement("strong", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.createIndexPattern.step.status.partialMatchLabel.strongIndicesLabel",
							defaultMessage: "{matchedIndicesLength, plural, one {# index} other {# indices}}",
							values:
							{
								matchedIndicesLength: partialMatchedIndices.length
							}
						}))
					}
				}))
			}
			else if (allIndicesLength)
			{
				statusIcon = null;
				statusColor = "default";
				statusMessage = _react2.default.createElement("span", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.status.notMatchLabel.notMatchDetail",
					defaultMessage: "The index pattern you've entered doesn't match any indices. You can match {indicesLength, plural, one {your} other {any of your}} {strongIndices}, below.",
					values:
					{
						strongIndices: _react2.default.createElement("strong", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.createIndexPattern.step.status.notMatchLabel.allIndicesLabel",
							defaultMessage: "{indicesLength, plural, one {# index} other {# indices}}",
							values:
							{
								indicesLength: allIndicesLength
							}
						})),
						indicesLength: allIndicesLength
					}
				}))
			}
			return _react2.default.createElement(_eui.EuiText,
			{
				size: "s"
			}, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: statusColor
			}, statusIcon ? _react2.default.createElement(_eui.EuiIcon,
			{
				type: statusIcon
			}) : null, statusMessage))
		}
	},
	5538: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _indices_list = __webpack_require__(5539);
		Object.defineProperty(exports, "IndicesList",
		{
			enumerable: true,
			get: function get()
			{
				return _indices_list.IndicesList
			}
		})
	},
	5539: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndicesList = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _constants = __webpack_require__(652);
		var _eui = __webpack_require__(3);
		var _services = __webpack_require__(35);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _objectWithoutProperties(obj, keys)
		{
			var target = {};
			for (var i in obj)
			{
				if (keys.indexOf(i) >= 0) continue;
				if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
				target[i] = obj[i]
			}
			return target
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var IndicesList = exports.IndicesList = function (_Component)
		{
			_inherits(IndicesList, _Component);

			function IndicesList(props)
			{
				_classCallCheck(this, IndicesList);
				var _this = _possibleConstructorReturn(this, (IndicesList.__proto__ || Object.getPrototypeOf(IndicesList)).call(this, props));
				_this.resetPageTo0 = function ()
				{
					return _this.onChangePage(0)
				};
				_this.onChangePage = function (page)
				{
					_this.pager.goToPageIndex(page);
					_this.setState(
					{
						page: page
					})
				};
				_this.onChangePerPage = function (perPage)
				{
					_this.pager.setItemsPerPage(perPage);
					_this.setState(
					{
						perPage: perPage
					});
					_this.resetPageTo0();
					_this.closePerPageControl()
				};
				_this.openPerPageControl = function ()
				{
					_this.setState(
					{
						isPerPageControlOpen: true
					})
				};
				_this.closePerPageControl = function ()
				{
					_this.setState(
					{
						isPerPageControlOpen: false
					})
				};
				_this.state = {
					page: 0,
					perPage: _constants.PER_PAGE_INCREMENTS[1],
					isPerPageControlOpen: false
				};
				_this.pager = new _services.Pager(props.indices.length, _this.state.perPage, _this.state.page);
				return _this
			}
			_createClass(IndicesList, [
			{
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps)
				{
					if (nextProps.indices.length !== this.props.indices.length)
					{
						this.pager.setTotalItems(nextProps.indices.length);
						this.resetPageTo0()
					}
				}
			},
			{
				key: "renderPagination",
				value: function renderPagination()
				{
					var _this2 = this;
					var _state = this.state,
						perPage = _state.perPage,
						page = _state.page,
						isPerPageControlOpen = _state.isPerPageControlOpen;
					var button = _react2.default.createElement(_eui.EuiButtonEmpty,
					{
						size: "s",
						color: "text",
						iconType: "arrowDown",
						iconSide: "right",
						onClick: this.openPerPageControl
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.createIndexPattern.step.pagingLabel",
						defaultMessage: "Rows per page: {perPage}",
						values:
						{
							perPage: perPage
						}
					}));
					var items = _constants.PER_PAGE_INCREMENTS.map(function (increment)
					{
						return _react2.default.createElement(_eui.EuiContextMenuItem,
						{
							key: increment,
							icon: "empty",
							onClick: function onClick()
							{
								return _this2.onChangePerPage(increment)
							}
						}, increment)
					});
					var pageCount = this.pager.getTotalPages();
					var paginationControls = pageCount > 1 ? _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiPagination,
					{
						pageCount: pageCount,
						activePage: page,
						onPageClick: this.onChangePage
					})) : null;
					return _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "spaceBetween",
						alignItems: "center"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiPopover,
					{
						id: "customizablePagination",
						button: button,
						isOpen: isPerPageControlOpen,
						closePopover: this.closePerPageControl,
						panelPaddingSize: "none",
						withTitle: true
					}, _react2.default.createElement(_eui.EuiContextMenuPanel,
					{
						items: items
					}))), paginationControls)
				}
			},
			{
				key: "highlightIndexName",
				value: function highlightIndexName(indexName, query)
				{
					var queryIdx = indexName.indexOf(query);
					if (!query || -1 === queryIdx) return indexName;
					var preStr = indexName.substr(0, queryIdx);
					var postStr = indexName.substr(queryIdx + query.length);
					return _react2.default.createElement("span", null, preStr, _react2.default.createElement("strong", null, query), postStr)
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _this3 = this;
					var _props = this.props,
						indices = _props.indices,
						query = _props.query,
						rest = _objectWithoutProperties(_props, ["indices", "query"]);
					var queryWithoutWildcard = query.endsWith("*") ? query.substr(0, query.length - 1) : query;
					var paginatedIndices = indices.slice(this.pager.firstItemIndex, this.pager.lastItemIndex + 1);
					var rows = paginatedIndices.map(function (index, key)
					{
						return _react2.default.createElement(_eui.EuiTableRow,
						{
							key: key
						}, _react2.default.createElement(_eui.EuiTableRowCell, null, _this3.highlightIndexName(index.name, queryWithoutWildcard)), _react2.default.createElement(_eui.EuiTableRowCell, null, index.tags.map(function (tag)
						{
							return _react2.default.createElement(_eui.EuiBadge,
							{
								key: "index_" + key + "_tag_" + tag.key,
								color: "primary"
							}, tag.name)
						})))
					});
					return _react2.default.createElement("div", rest, _react2.default.createElement(_eui.EuiTable, null, _react2.default.createElement(_eui.EuiTableBody, null, rows)), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), this.renderPagination())
				}
			}]);
			return IndicesList
		}(_react.Component);
		IndicesList.propTypes = {
			indices: _propTypes2.default.array.isRequired,
			query: _propTypes2.default.string.isRequired
		}
	},
	5540: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5541);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5541: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = exports.HeaderComponent = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _objectWithoutProperties(obj, keys)
		{
			var target = {};
			for (var i in obj)
			{
				if (keys.indexOf(i) >= 0) continue;
				if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
				target[i] = obj[i]
			}
			return target
		}
		var HeaderComponent = function HeaderComponent(_ref)
		{
			var isInputInvalid = _ref.isInputInvalid,
				errors = _ref.errors,
				characterList = _ref.characterList,
				query = _ref.query,
				onQueryChanged = _ref.onQueryChanged,
				goToNextStep = _ref.goToNextStep,
				isNextStepDisabled = _ref.isNextStepDisabled,
				intl = _ref.intl,
				rest = _objectWithoutProperties(_ref, ["isInputInvalid", "errors", "characterList", "query", "onQueryChanged", "goToNextStep", "isNextStepDisabled", "intl"]);
			return _react2.default.createElement("div", rest, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "s"
			}, _react2.default.createElement("h2", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepHeader",
				defaultMessage: "Step 1 of 2: Define index pattern"
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}), _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "spaceBetween",
				alignItems: "flexEnd"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiForm,
			{
				isInvalid: isInputInvalid
			}, _react2.default.createElement(_eui.EuiFormRow,
			{
				label: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.indexPatternLabel",
					defaultMessage: "Index pattern"
				}),
				isInvalid: isInputInvalid,
				error: errors,
				helpText: _react2.default.createElement("div", null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.indexPattern.allowLabel",
					defaultMessage: "You can use a {asterisk} as a wildcard in your index pattern.",
					values:
					{
						asterisk: _react2.default.createElement("strong", null, "*")
					}
				})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.step.indexPattern.disallowLabel",
					defaultMessage: "You can't use spaces or the characters {characterList}.",
					values:
					{
						characterList: _react2.default.createElement("strong", null, characterList)
					}
				})))
			}, _react2.default.createElement(_eui.EuiFieldText,
			{
				name: "indexPattern",
				placeholder: intl.formatMessage(
				{
					id: "kbn.management.createIndexPattern.step.indexPatternPlaceholder",
					defaultMessage: "index-name-*"
				}),
				value: query,
				isInvalid: isInputInvalid,
				onChange: onQueryChanged,
				"data-test-subj": "createIndexPatternNameInput"
			})))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButton,
			{
				iconType: "arrowRight",
				onClick: function onClick()
				{
					return goToNextStep(query)
				},
				isDisabled: isNextStepDisabled,
				"data-test-subj": "createIndexPatternGoToStep2Button"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.step.nextStepButton",
				defaultMessage: "Next step"
			})))))
		};
		exports.HeaderComponent = HeaderComponent;
		exports.Header = (0, _react3.injectI18n)(HeaderComponent)
	},
	5542: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _step_time_field = __webpack_require__(5543);
		Object.defineProperty(exports, "StepTimeField",
		{
			enumerable: true,
			get: function get()
			{
				return _step_time_field.StepTimeField
			}
		})
	},
	5543: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.StepTimeField = exports.StepTimeFieldComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _lib = __webpack_require__(963);
		var _header = __webpack_require__(5544);
		var _time_field = __webpack_require__(5546);
		var _advanced_options = __webpack_require__(5549);
		var _action_buttons = __webpack_require__(5551);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var StepTimeFieldComponent = exports.StepTimeFieldComponent = function (_Component)
		{
			_inherits(StepTimeFieldComponent, _Component);

			function StepTimeFieldComponent(props)
			{
				var _this2 = this;
				_classCallCheck(this, StepTimeFieldComponent);
				var _this = _possibleConstructorReturn(this, (StepTimeFieldComponent.__proto__ || Object.getPrototypeOf(StepTimeFieldComponent)).call(this, props));
				_this.fetchTimeFields = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var _this$props, indexPatternsService, indexPattern, getFetchForWildcardOptions, fields, timeFields;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_this$props = _this.props, indexPatternsService = _this$props.indexPatternsService, indexPattern = _this$props.indexPattern;
							getFetchForWildcardOptions = _this.props.indexPatternCreationType.getFetchForWildcardOptions;
							_this.setState(
							{
								isFetchingTimeFields: true
							});
							_context.next = 5;
							return (0, _lib.ensureMinimumTime)(indexPatternsService.fieldsFetcher.fetchForWildcard(indexPattern, getFetchForWildcardOptions()));
						case 5:
							fields = _context.sent;
							timeFields = (0, _lib.extractTimeFields)(fields);
							_this.setState(
							{
								timeFields: timeFields,
								isFetchingTimeFields: false
							});
						case 8:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2)
				}));
				_this.onTimeFieldChanged = function (e)
				{
					var value = e.target.value;
					var timeField = _this.state.timeFields.find(function (timeField)
					{
						return timeField.fieldName === value
					});
					var validSelection = "" !== value;
					_this.setState(
					{
						selectedTimeField: timeField ? timeField.fieldName : void 0,
						timeFieldSet: validSelection
					})
				};
				_this.onChangeIndexPatternId = function (e)
				{
					_this.setState(
					{
						indexPatternId: e.target.value
					})
				};
				_this.toggleAdvancedOptions = function ()
				{
					_this.setState(function (state)
					{
						return {
							isAdvancedOptionsVisible: !state.isAdvancedOptionsVisible
						}
					})
				};
				_this.createIndexPattern = function ()
				{
					var _this$state = _this.state,
						selectedTimeField = _this$state.selectedTimeField,
						indexPatternId = _this$state.indexPatternId;
					_this.setState(
					{
						isCreating: true
					});
					_this.props.createIndexPattern(selectedTimeField, indexPatternId)
				};
				var _props$indexPatternCr = props.indexPatternCreationType,
					getIndexPatternType = _props$indexPatternCr.getIndexPatternType,
					getIndexPatternName = _props$indexPatternCr.getIndexPatternName;
				_this.state = {
					timeFields: [],
					selectedTimeField: void 0,
					timeFieldSet: false,
					isAdvancedOptionsVisible: false,
					isFetchingTimeFields: false,
					isCreating: false,
					indexPatternId: "",
					indexPatternType: getIndexPatternType(),
					indexPatternName: getIndexPatternName()
				};
				return _this
			}
			_createClass(StepTimeFieldComponent, [
			{
				key: "componentWillMount",
				value: function componentWillMount()
				{
					this.fetchTimeFields()
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _state = this.state,
						timeFields = _state.timeFields,
						selectedTimeField = _state.selectedTimeField,
						timeFieldSet = _state.timeFieldSet,
						isAdvancedOptionsVisible = _state.isAdvancedOptionsVisible,
						indexPatternId = _state.indexPatternId,
						isCreating = _state.isCreating,
						isFetchingTimeFields = _state.isFetchingTimeFields,
						indexPatternName = _state.indexPatternName;
					if (isCreating) return _react2.default.createElement(_eui.EuiPanel, null, _react2.default.createElement(_eui.EuiFlexGroup,
					{
						alignItems: "center"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiLoadingSpinner, null)), _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.createIndexPattern.stepTime.creatingLabel",
						defaultMessage: "Creating index pattern..."
					})))));
					var _props = this.props,
						indexPattern = _props.indexPattern,
						goToPreviousStep = _props.goToPreviousStep;
					var timeFieldOptions = timeFields ? [
					{
						text: "",
						value: ""
					}].concat(_toConsumableArray(timeFields.map(function (timeField)
					{
						return {
							text: timeField.display,
							value: timeField.fieldName,
							disabled: timeFields.isDisabled
						}
					}))) : [];
					var showTimeField = !timeFields || timeFields.length > 1;
					var submittable = !showTimeField || timeFieldSet;
					return _react2.default.createElement(_eui.EuiPanel,
					{
						paddingSize: "l"
					}, _react2.default.createElement(_header.Header,
					{
						indexPattern: indexPattern,
						indexPatternName: indexPatternName
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_time_field.TimeField,
					{
						isVisible: showTimeField,
						fetchTimeFields: this.fetchTimeFields,
						timeFieldOptions: timeFieldOptions,
						isLoading: isFetchingTimeFields,
						selectedTimeField: selectedTimeField,
						onTimeFieldChanged: this.onTimeFieldChanged
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement(_advanced_options.AdvancedOptions,
					{
						isVisible: isAdvancedOptionsVisible,
						indexPatternId: indexPatternId,
						toggleAdvancedOptions: this.toggleAdvancedOptions,
						onChangeIndexPatternId: this.onChangeIndexPatternId
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_action_buttons.ActionButtons,
					{
						goToPreviousStep: goToPreviousStep,
						submittable: submittable,
						createIndexPattern: this.createIndexPattern
					}))
				}
			}]);
			return StepTimeFieldComponent
		}(_react.Component);
		StepTimeFieldComponent.propTypes = {
			indexPattern: _propTypes2.default.string.isRequired,
			indexPatternsService: _propTypes2.default.object.isRequired,
			goToPreviousStep: _propTypes2.default.func.isRequired,
			createIndexPattern: _propTypes2.default.func.isRequired,
			indexPatternCreationType: _propTypes2.default.object.isRequired
		};
		exports.StepTimeField = (0, _react3.injectI18n)(StepTimeFieldComponent)
	},
	5544: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5545);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5545: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.Header = function Header(_ref)
		{
			var indexPattern = _ref.indexPattern,
				indexPatternName = _ref.indexPatternName;
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "s"
			}, _react2.default.createElement("h2", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTimeHeader",
				defaultMessage: "Step 2 of 2: Configure settings"
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}), _react2.default.createElement(_eui.EuiText,
			{
				color: "subdued"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTimeLabel",
				defaultMessage: "You've defined {indexPattern} as your {indexPatternName}. Now you can specify some settings before we create it.",
				values:
				{
					indexPattern: _react2.default.createElement("strong", null, indexPattern),
					indexPatternName: indexPatternName
				}
			})))
		}
	},
	5546: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _time_field = __webpack_require__(5547);
		Object.defineProperty(exports, "TimeField",
		{
			enumerable: true,
			get: function get()
			{
				return _time_field.TimeField
			}
		})
	},
	5547: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.TimeField = exports.TimeFieldComponent = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		__webpack_require__(5548);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var TimeFieldComponent = exports.TimeFieldComponent = function TimeFieldComponent(_ref)
		{
			var isVisible = _ref.isVisible,
				fetchTimeFields = _ref.fetchTimeFields,
				timeFieldOptions = _ref.timeFieldOptions,
				isLoading = _ref.isLoading,
				selectedTimeField = _ref.selectedTimeField,
				onTimeFieldChanged = _ref.onTimeFieldChanged,
				intl = _ref.intl;
			return _react2.default.createElement(_eui.EuiForm, null, isVisible ? _react2.default.createElement(_eui.EuiFormRow,
			{
				label: _react2.default.createElement(_eui.EuiFlexGroup,
				{
					gutterSize: "xs",
					justifyContent: "spaceBetween",
					alignItems: "center"
				}, _react2.default.createElement(_eui.EuiFlexItem,
				{
					grow: false
				}, _react2.default.createElement("span", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.stepTime.fieldHeader",
					defaultMessage: "Time Filter field name"
				}))), _react2.default.createElement(_eui.EuiFlexItem,
				{
					grow: false
				}, isLoading ? _react2.default.createElement(_eui.EuiLoadingSpinner,
				{
					size: "s"
				}) : _react2.default.createElement(_eui.EuiLink,
				{
					className: "timeFieldRefreshButton",
					onClick: fetchTimeFields
				}, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.stepTime.refreshButton",
					defaultMessage: "Refresh"
				})))),
				helpText: _react2.default.createElement("div", null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.stepTime.fieldLabel",
					defaultMessage: "The Time Filter will use this field to filter your data by time."
				})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.stepTime.fieldWarningLabel",
					defaultMessage: "You can choose not to have a time field, but you will not be able to narrow down your data by a time range."
				})))
			}, isLoading ? _react2.default.createElement(_eui.EuiSelect,
			{
				name: "timeField",
				"data-test-subj": "createIndexPatternTimeFieldSelect",
				options: [
				{
					text: intl.formatMessage(
					{
						id: "kbn.management.createIndexPattern.stepTime.field.loadingDropDown",
						defaultMessage: "Loading..."
					}),
					value: ""
				}],
				disabled: true
			}) : _react2.default.createElement(_eui.EuiSelect,
			{
				name: "timeField",
				"data-test-subj": "createIndexPatternTimeFieldSelect",
				options: timeFieldOptions,
				isLoading: isLoading,
				disabled: isLoading,
				value: selectedTimeField,
				onChange: onTimeFieldChanged
			})) : _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTime.field.noTimeFieldsLabel",
				defaultMessage: "The indices which match this index pattern don't contain any time fields."
			}))))
		};
		exports.TimeField = (0, _react3.injectI18n)(TimeFieldComponent)
	},
	5548: function (module, exports) {},
	5549: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _advanced_options = __webpack_require__(5550);
		Object.defineProperty(exports, "AdvancedOptions",
		{
			enumerable: true,
			get: function get()
			{
				return _advanced_options.AdvancedOptions
			}
		})
	},
	5550: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.AdvancedOptions = exports.AdvancedOptionsComponent = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var AdvancedOptionsComponent = exports.AdvancedOptionsComponent = function AdvancedOptionsComponent(_ref)
		{
			var isVisible = _ref.isVisible,
				indexPatternId = _ref.indexPatternId,
				toggleAdvancedOptions = _ref.toggleAdvancedOptions,
				onChangeIndexPatternId = _ref.onChangeIndexPatternId,
				intl = _ref.intl;
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiButtonEmpty,
			{
				iconType: isVisible ? "arrowDown" : "arrowRight",
				onClick: toggleAdvancedOptions
			}, isVisible ? _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTime.options.hideButton",
				defaultMessage: "Hide advanced options"
			}) : _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTime.options.showButton",
				defaultMessage: "Show advanced options"
			})), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "xs"
			}), isVisible ? _react2.default.createElement(_eui.EuiForm, null, _react2.default.createElement(_eui.EuiFormRow,
			{
				label: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.stepTime.options.patternHeader",
					defaultMessage: "Custom index pattern ID"
				}),
				helpText: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.stepTime.options.patternLabel",
					defaultMessage: "Kibana will provide a unique identifier for each index pattern. If you do not want to use this unique ID, enter a custom one."
				})
			}, _react2.default.createElement(_eui.EuiFieldText,
			{
				name: "indexPatternId",
				"data-test-subj": "createIndexPatternIdInput",
				value: indexPatternId,
				onChange: onChangeIndexPatternId,
				placeholder: intl.formatMessage(
				{
					id: "kbn.management.createIndexPattern.stepTime.options.patternPlaceholder",
					defaultMessage: "custom-index-pattern-id"
				})
			}))) : null)
		};
		exports.AdvancedOptions = (0, _react3.injectI18n)(AdvancedOptionsComponent)
	},
	5551: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _action_buttons = __webpack_require__(5552);
		Object.defineProperty(exports, "ActionButtons",
		{
			enumerable: true,
			get: function get()
			{
				return _action_buttons.ActionButtons
			}
		})
	},
	5552: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ActionButtons = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.ActionButtons = function ActionButtons(_ref)
		{
			var goToPreviousStep = _ref.goToPreviousStep,
				submittable = _ref.submittable,
				createIndexPattern = _ref.createIndexPattern;
			return _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "flexEnd"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButtonEmpty,
			{
				iconType: "arrowLeft",
				onClick: goToPreviousStep
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTime.backButton",
				defaultMessage: "Back"
			}))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButton,
			{
				isDisabled: !submittable,
				"data-test-subj": "createIndexPatternCreateButton",
				fill: true,
				onClick: createIndexPattern
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.stepTime.createPatternButton",
				defaultMessage: "Create index pattern"
			}))))
		}
	},
	5553: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5554);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5554: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.Header = function Header(_ref)
		{
			var prompt = _ref.prompt,
				indexPatternName = _ref.indexPatternName,
				showSystemIndices = _ref.showSystemIndices,
				isIncludingSystemIndices = _ref.isIncludingSystemIndices,
				onChangeIncludingSystemIndices = _ref.onChangeIncludingSystemIndices,
				isBeta = _ref.isBeta;
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement("h1", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPatternHeader",
				defaultMessage: "Create {indexPatternName}",
				values:
				{
					indexPatternName: indexPatternName
				}
			}), isBeta ? _react2.default.createElement(_react.Fragment, null, " ", _react2.default.createElement(_eui.EuiBetaBadge,
			{
				label: "Beta"
			})) : null)), _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "spaceBetween",
				alignItems: "flexEnd"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPatternLabel",
				defaultMessage: "Kibana uses index patterns to retrieve data from Elasticsearch indices for things like visualizations."
			}))))), showSystemIndices ? _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiSwitch,
			{
				label: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.createIndexPattern.includeSystemIndicesToggleSwitchLabel",
					defaultMessage: "Include system indices"
				}),
				id: "checkboxShowSystemIndices",
				checked: isIncludingSystemIndices,
				onChange: onChangeIncludingSystemIndices
			})) : null), prompt ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "s"
			}), prompt) : null, _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}))
		}
	},
	5555: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _loading_state = __webpack_require__(5556);
		Object.defineProperty(exports, "LoadingState",
		{
			enumerable: true,
			get: function get()
			{
				return _loading_state.LoadingState
			}
		})
	},
	5556: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.LoadingState = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.LoadingState = function LoadingState()
		{
			return _react2.default.createElement(_eui.EuiPanel,
			{
				paddingSize: "l"
			}, _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "center",
				alignItems: "center",
				direction: "column",
				gutterSize: "s"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "s"
			}, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, _react2.default.createElement("h2",
			{
				style:
				{
					textAlign: "center"
				}
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.loadingState.checkingLabel",
				defaultMessage: "Checking for Elasticsearch data"
			}))))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiLoadingSpinner,
			{
				size: "l"
			}))))
		}
	},
	5557: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _empty_state = __webpack_require__(5558);
		Object.defineProperty(exports, "EmptyState",
		{
			enumerable: true,
			get: function get()
			{
				return _empty_state.EmptyState
			}
		})
	},
	5558: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.EmptyState = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var EmptyState = exports.EmptyState = function EmptyState(_ref)
		{
			var onRefresh = _ref.onRefresh;
			return _react2.default.createElement(_eui.EuiPanel,
			{
				paddingSize: "l"
			}, _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "center",
				alignItems: "center"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiTitle, null, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, _react2.default.createElement("h2",
			{
				style:
				{
					textAlign: "center"
				}
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.emptyStateHeader",
				defaultMessage: "Couldn't find any Elasticsearch data"
			})))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "s"
			}), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.emptyStateLabel.emptyStateDetail",
				defaultMessage: "{needToIndex} {learnHowLink} or {getStartedLink}",
				values:
				{
					needToIndex: _react2.default.createElement(_eui.EuiTextColor,
					{
						color: "subdued"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.createIndexPattern.emptyStateLabel.needToIndexLabel",
						defaultMessage: "You'll need to index some data into Elasticsearch before you can create an index pattern."
					})),
					learnHowLink: _react2.default.createElement(_eui.EuiLink,
					{
						href: "#/home/tutorial_directory"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.createIndexPattern.emptyStateLabel.learnHowLink",
						defaultMessage: "Learn how"
					})),
					getStartedLink: _react2.default.createElement(_eui.EuiLink,
					{
						href: "#/home/tutorial_directory/sampleData"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.createIndexPattern.emptyStateLabel.getStartedLink",
						defaultMessage: "get started with some sample data sets."
					}))
				}
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}), _react2.default.createElement(_eui.EuiFlexGroup,
			{
				justifyContent: "center",
				alignItems: "center"
			}, _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButton,
			{
				iconType: "refresh",
				onClick: onRefresh,
				"data-test-subj": "refreshIndicesButton"
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.createIndexPattern.emptyState.checkDataButton",
				defaultMessage: "Check for new data"
			})))))))
		};
		EmptyState.propTypes = {
			onRefresh: _propTypes2.default.func.isRequired
		}
	},
	5559: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5560)
	},
	5560: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		__webpack_require__(5561);
		__webpack_require__(5564);
		var _url = __webpack_require__(108);
		var _edit_sections = __webpack_require__(5582);
		var _notify = __webpack_require__(10);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _edit_index_pattern = __webpack_require__(5583);
		var _edit_index_pattern2 = _interopRequireDefault(_edit_index_pattern);
		var _field_wildcard = __webpack_require__(1360);
		var _index_pattern_list = __webpack_require__(650);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _reactDom = __webpack_require__(17);
		var _source_filters_table = __webpack_require__(5584);
		var _indexed_fields_table = __webpack_require__(5592);
		var _scripted_fields_table = __webpack_require__(5598);
		var _react3 = __webpack_require__(8);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var REACT_SOURCE_FILTERS_DOM_ELEMENT_ID = "reactSourceFiltersTable";
		var REACT_INDEXED_FIELDS_DOM_ELEMENT_ID = "reactIndexedFieldsTable";
		var REACT_SCRIPTED_FIELDS_DOM_ELEMENT_ID = "reactScriptedFieldsTable";

		function updateSourceFiltersTable($scope, $state)
		{
			"sourceFilters" === $state.tab ? $scope.$$postDigest(function ()
			{
				var node = document.getElementById(REACT_SOURCE_FILTERS_DOM_ELEMENT_ID);
				if (!node) return;
				(0, _reactDom.render)(_react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_source_filters_table.SourceFiltersTable,
				{
					indexPattern: $scope.indexPattern,
					filterFilter: $scope.fieldFilter,
					fieldWildcardMatcher: $scope.fieldWildcardMatcher,
					onAddOrRemoveFilter: function onAddOrRemoveFilter()
					{
						$scope.editSections = $scope.editSectionsProvider($scope.indexPattern, $scope.indexPatternListProvider);
						$scope.refreshFilters();
						$scope.$apply()
					}
				})), node)
			}) : destroySourceFiltersTable()
		}

		function destroySourceFiltersTable()
		{
			var node = document.getElementById(REACT_SOURCE_FILTERS_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		}

		function updateScriptedFieldsTable($scope, $state)
		{
			"scriptedFields" === $state.tab ? $scope.$$postDigest(function ()
			{
				var node = document.getElementById(REACT_SCRIPTED_FIELDS_DOM_ELEMENT_ID);
				if (!node) return;
				(0, _reactDom.render)(_react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_scripted_fields_table.ScriptedFieldsTable,
				{
					indexPattern: $scope.indexPattern,
					fieldFilter: $scope.fieldFilter,
					scriptedFieldLanguageFilter: $scope.scriptedFieldLanguageFilter,
					helpers:
					{
						redirectToRoute: function redirectToRoute(obj, route)
						{
							$scope.kbnUrl.redirectToRoute(obj, route);
							$scope.$apply()
						},
						getRouteHref: function getRouteHref(obj, route)
						{
							return $scope.kbnUrl.getRouteHref(obj, route)
						}
					},
					onRemoveField: function onRemoveField()
					{
						$scope.editSections = $scope.editSectionsProvider($scope.indexPattern, $scope.indexPatternListProvider);
						$scope.refreshFilters()
					}
				})), node)
			}) : destroyScriptedFieldsTable()
		}

		function destroyScriptedFieldsTable()
		{
			var node = document.getElementById(REACT_SCRIPTED_FIELDS_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		}

		function updateIndexedFieldsTable($scope, $state)
		{
			"indexedFields" === $state.tab ? $scope.$$postDigest(function ()
			{
				var node = document.getElementById(REACT_INDEXED_FIELDS_DOM_ELEMENT_ID);
				if (!node) return;
				(0, _reactDom.render)(_react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_indexed_fields_table.IndexedFieldsTable,
				{
					fields: $scope.fields,
					indexPattern: $scope.indexPattern,
					fieldFilter: $scope.fieldFilter,
					fieldWildcardMatcher: $scope.fieldWildcardMatcher,
					indexedFieldTypeFilter: $scope.indexedFieldTypeFilter,
					helpers:
					{
						redirectToRoute: function redirectToRoute(obj, route)
						{
							$scope.kbnUrl.redirectToRoute(obj, route);
							$scope.$apply()
						},
						getFieldInfo: $scope.getFieldInfo
					}
				})), node)
			}) : destroyIndexedFieldsTable()
		}

		function destroyIndexedFieldsTable()
		{
			var node = document.getElementById(REACT_INDEXED_FIELDS_DOM_ELEMENT_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		}
		_routes2.default.when("/management/kibana/indices/:indexPatternId",
		{
			template: _edit_index_pattern2.default,
			resolve:
			{
				indexPattern: function indexPattern($route, redirectWhenMissing, indexPatterns)
				{
					return indexPatterns.get($route.current.params.indexPatternId).catch(redirectWhenMissing("/management/kibana/index"))
				}
			}
		});
		_routes2.default.when("/management/kibana/indices",
		{
			resolve:
			{
				redirect: function redirect($location, config)
				{
					var defaultIndex = config.get("defaultIndex");
					var path = "/management/kibana/index";
					defaultIndex && (path = "/management/kibana/indices/" + defaultIndex);
					$location.path(path).replace()
				}
			}
		});
		_modules.uiModules.get("apps/management").controller("managementIndicesEdit", function ($scope, $location, $route, config, indexPatterns, Private, AppState, docTitle, confirmModal)
		{
			var $state = $scope.state = new AppState;
			var _Private = Private(_field_wildcard.FieldWildcardProvider),
				fieldWildcardMatcher = _Private.fieldWildcardMatcher;
			var indexPatternListProvider = Private(_index_pattern_list.IndexPatternListFactory)();
			$scope.fieldWildcardMatcher = fieldWildcardMatcher;
			$scope.editSectionsProvider = Private(_edit_sections.IndicesEditSectionsProvider);
			$scope.kbnUrl = Private(_url.KbnUrlProvider);
			$scope.indexPattern = $route.current.locals.indexPattern;
			$scope.indexPatternListProvider = indexPatternListProvider;
			$scope.indexPattern.tags = indexPatternListProvider.getIndexPatternTags($scope.indexPattern);
			$scope.getFieldInfo = indexPatternListProvider.getFieldInfo;
			docTitle.change($scope.indexPattern.title);
			var otherPatterns = _lodash2.default.filter($route.current.locals.indexPatterns, function (pattern)
			{
				return pattern.id !== $scope.indexPattern.id
			});
			$scope.$watch("indexPattern.fields", function ()
			{
				$scope.editSections = $scope.editSectionsProvider($scope.indexPattern, indexPatternListProvider);
				$scope.refreshFilters();
				$scope.fields = $scope.indexPattern.getNonScriptedFields();
				updateIndexedFieldsTable($scope, $state);
				updateScriptedFieldsTable($scope, $state)
			});
			$scope.refreshFilters = function ()
			{
				var indexedFieldTypes = [];
				var scriptedFieldLanguages = [];
				$scope.indexPattern.fields.forEach(function (field)
				{
					field.scripted ? scriptedFieldLanguages.push(field.lang) : indexedFieldTypes.push(field.type)
				});
				$scope.indexedFieldTypes = _lodash2.default.unique(indexedFieldTypes);
				$scope.scriptedFieldLanguages = _lodash2.default.unique(scriptedFieldLanguages)
			};
			$scope.changeFilter = function (filter, val)
			{
				$scope[filter] = val || ""
			};
			$scope.changeTab = function (obj)
			{
				$state.tab = obj.index;
				updateIndexedFieldsTable($scope, $state);
				updateScriptedFieldsTable($scope, $state);
				updateSourceFiltersTable($scope, $state);
				$state.save()
			};
			$scope.$watch("state.tab", function (tab)
			{
				tab || $scope.changeTab($scope.editSections[0])
			});
			$scope.$watchCollection("indexPattern.fields", function ()
			{
				$scope.conflictFields = $scope.indexPattern.fields.filter(function (field)
				{
					return "conflict" === field.type
				})
			});
			$scope.refreshFields = function ()
			{
				var _this = this;
				var confirmMessage = _i18n.i18n.translate("kbn.management.editIndexPattern.refreshLabel",
				{
					defaultMessage: "This action resets the popularity counter of each field."
				});
				var confirmModalOptions = {
					confirmButtonText: _i18n.i18n.translate("kbn.management.editIndexPattern.refreshButton",
					{
						defaultMessage: "Refresh"
					}),
					onConfirm: function ()
					{
						var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
						{
							return regeneratorRuntime.wrap(function _callee$(_context)
							{
								while (1) switch (_context.prev = _context.next)
								{
								case 0:
									_context.next = 2;
									return $scope.indexPattern.init(true);
								case 2:
									$scope.fields = $scope.indexPattern.getNonScriptedFields();
								case 3:
								case "end":
									return _context.stop()
								}
							}, _callee, _this)
						}));

						function onConfirm()
						{
							return _ref.apply(this, arguments)
						}
						return onConfirm
					}(),
					title: _i18n.i18n.translate("kbn.management.editIndexPattern.refreshHeader",
					{
						defaultMessage: "Refresh field list?"
					})
				};
				confirmModal(confirmMessage, confirmModalOptions)
			};
			$scope.removePattern = function ()
			{
				function doRemove()
				{
					if ($scope.indexPattern.id === config.get("defaultIndex"))
					{
						config.remove("defaultIndex");
						otherPatterns.length && config.set("defaultIndex", otherPatterns[0].id)
					}
					indexPatterns.delete($scope.indexPattern).then(function ()
					{
						$location.url("/management/kibana/index")
					}).catch(_notify.fatalError)
				}
				var confirmModalOptions = {
					confirmButtonText: _i18n.i18n.translate("kbn.management.editIndexPattern.deleteButton",
					{
						defaultMessage: "Delete"
					}),
					onConfirm: doRemove,
					title: _i18n.i18n.translate("kbn.management.editIndexPattern.deleteHeader",
					{
						defaultMessage: "Delete index pattern?"
					})
				};
				confirmModal("", confirmModalOptions)
			};
			$scope.setDefaultPattern = function ()
			{
				config.set("defaultIndex", $scope.indexPattern.id)
			};
			$scope.setIndexPatternsTimeField = function (field)
			{
				if ("date" !== field.type)
				{
					var errorMessage = _i18n.i18n.translate("kbn.management.editIndexPattern.notDateErrorMessage",
					{
						defaultMessage: "That field is a {fieldType} not a date.",
						values:
						{
							fieldType: field.type
						}
					});
					_notify.toastNotifications.addDanger(errorMessage);
					return
				}
				$scope.indexPattern.timeFieldName = field.name;
				return $scope.indexPattern.save()
			};
			$scope.$watch("fieldFilter", function ()
			{
				if (void 0 === $scope.fieldFilter) return;
				switch ($state.tab)
				{
				case "indexedFields":
					updateIndexedFieldsTable($scope, $state);
				case "scriptedFields":
					updateScriptedFieldsTable($scope, $state);
				case "sourceFilters":
					updateSourceFiltersTable($scope, $state)
				}
			});
			$scope.$watch("indexedFieldTypeFilter", function ()
			{
				void 0 !== $scope.indexedFieldTypeFilter && "indexedFields" === $state.tab && updateIndexedFieldsTable($scope, $state)
			});
			$scope.$watch("scriptedFieldLanguageFilter", function ()
			{
				void 0 !== $scope.scriptedFieldLanguageFilter && "scriptedFields" === $state.tab && updateScriptedFieldsTable($scope, $state)
			});
			$scope.$on("$destroy", function ()
			{
				destroyIndexedFieldsTable();
				destroyScriptedFieldsTable()
			});
			updateScriptedFieldsTable($scope, $state);
			updateSourceFiltersTable($scope, $state)
		})
	},
	5561: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5562)
	},
	5562: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _modules = __webpack_require__(2);
		var _index_header = __webpack_require__(5563);
		var _index_header2 = _interopRequireDefault(_index_header);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_modules.uiModules.get("apps/management").directive("kbnManagementIndexHeader", function (config)
		{
			return {
				restrict: "E",
				template: _index_header2.default,
				replace: true,
				scope:
				{
					indexPattern: "=",
					setDefault: "&",
					refreshFields: "&",
					delete: "&"
				},
				link: function link($scope, $el, attrs)
				{
					$scope.delete = attrs.delete ? $scope.delete : null;
					$scope.setDefault = attrs.setDefault ? $scope.setDefault : null;
					$scope.refreshFields = attrs.refreshFields ? $scope.refreshFields : null;
					config.bindToScope($scope, "defaultIndex")
				}
			}
		})
	},
	5563: function (module, exports)
	{
		module.exports = '<div class="kuiBar kuiVerticalRhythm">\n  <div class="kuiBarSection">\n    <!-- Index pattern name -->\n    <h1\n      class="kuiTitle kuiVerticalRhythm"\n      data-test-subj="indexPatternTitle"\n    >\n      <span\n        aria-hidden="true"\n        ng-if="defaultIndex === indexPattern.id"\n        class="kuiIcon fa-star"\n      ></span>\n      {{indexPattern.title}}\n    </h1>\n  </div>\n\n  <div class="kuiBarSection">\n    <button\n      ng-if="setDefault"\n      ng-click="setDefault()"\n      aria-label="{{::\'kbn.management.editIndexPattern.setDefaultAria\' | i18n: { defaultMessage: \'Set as default index\' } }}"\n      tooltip="{{::\'kbn.management.editIndexPattern.setDefaultTooltip\' | i18n: { defaultMessage: \'Set as default index\' } }}"\n      class="kuiButton kuiButton--basic"\n      data-test-subj="setDefaultIndexPatternButton"\n    >\n      <span\n        aria-hidden="true"\n        class="kuiIcon fa-star"\n      ></span>\n    </button>\n\n    <button\n      ng-if="refreshFields"\n      ng-click="refreshFields()"\n      aria-label="{{::\'kbn.management.editIndexPattern.refreshAria\' | i18n: { defaultMessage: \'Reload field list\' } }}"\n      tooltip="{{::\'kbn.management.editIndexPattern.refreshTooltip\' | i18n: { defaultMessage: \'Refresh field list\' } }}"\n      class="kuiButton kuiButton--basic"\n    >\n      <span\n        aria-hidden="true"\n        class="kuiIcon fa-refresh"\n      ></span>\n    </button>\n\n    <button\n      ng-if="delete"\n      ng-click="delete()"\n      aria-label="{{::\'kbn.management.editIndexPattern.removeAria\' | i18n: { defaultMessage: \'Remove index pattern\' } }}"\n      tooltip="{{::\'kbn.management.editIndexPattern.removeTooltip\' | i18n: { defaultMessage: \'Remove index pattern\' } }}"\n      class="kuiButton kuiButton--danger"\n      data-test-subj="deleteIndexPatternButton"\n    >\n      <span\n        aria-hidden="true"\n        class="kuiIcon fa-trash"\n      ></span>\n    </button>\n  </div>\n</div>\n'
	},
	5564: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5565)
	},
	5565: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _field = __webpack_require__(1374);
		var _field_format_editors = __webpack_require__(1583);
		var _url = __webpack_require__(108);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _notify = __webpack_require__(10);
		var _create_edit_field = __webpack_require__(5566);
		var _create_edit_field2 = _interopRequireDefault(_create_edit_field);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _reactDom = __webpack_require__(17);
		var _field_editor = __webpack_require__(1726);
		var _react3 = __webpack_require__(8);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var REACT_FIELD_EDITOR_ID = "reactFieldEditor";
		var renderFieldEditor = function renderFieldEditor($scope, indexPattern, field, _ref)
		{
			var Field = _ref.Field,
				getConfig = _ref.getConfig,
				$http = _ref.$http,
				fieldFormatEditors = _ref.fieldFormatEditors,
				redirectAway = _ref.redirectAway;
			$scope.$$postDigest(function ()
			{
				var node = document.getElementById(REACT_FIELD_EDITOR_ID);
				if (!node) return;
				(0, _reactDom.render)(_react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_field_editor.FieldEditor,
				{
					indexPattern: indexPattern,
					field: field,
					helpers:
					{
						Field: Field,
						getConfig: getConfig,
						$http: $http,
						fieldFormatEditors: fieldFormatEditors,
						redirectAway: redirectAway
					}
				})), node)
			})
		};
		var destroyFieldEditor = function destroyFieldEditor()
		{
			var node = document.getElementById(REACT_FIELD_EDITOR_ID);
			node && (0, _reactDom.unmountComponentAtNode)(node)
		};
		_routes2.default.when("/management/kibana/indices/:indexPatternId/field/:fieldName*",
		{
			mode: "edit"
		}).when("/management/kibana/indices/:indexPatternId/create-field/",
		{
			mode: "create"
		}).defaults(/management\/kibana\/indices\/[^\/]+\/(field|create-field)(\/|$)/,
		{
			template: _create_edit_field2.default,
			mapBreadcrumbs: function mapBreadcrumbs($route, breadcrumbs)
			{
				var indexPattern = $route.current.locals.indexPattern;
				return breadcrumbs.map(function (crumb)
				{
					if (crumb.id !== indexPattern.id) return crumb;
					return _extends(
					{}, crumb,
					{
						display: indexPattern.title
					})
				})
			},
			resolve:
			{
				indexPattern: function indexPattern($route, redirectWhenMissing, indexPatterns)
				{
					return indexPatterns.get($route.current.params.indexPatternId).catch(redirectWhenMissing("/management/kibana/indices"))
				}
			},
			controllerAs: "fieldSettings",
			controller: function FieldEditorPageController($scope, $route, $timeout, $http, Private, docTitle, config)
			{
				var _this = this;
				var getConfig = function getConfig()
				{
					return config.get.apply(config, arguments)
				};
				var fieldFormatEditors = Private(_field_format_editors.RegistryFieldFormatEditorsProvider);
				var kbnUrl = Private(_url.KbnUrlProvider);
				this.mode = $route.current.mode;
				this.indexPattern = $route.current.locals.indexPattern;
				if ("edit" === this.mode)
				{
					var _fieldName = $route.current.params.fieldName;
					this.field = this.indexPattern.fields.byName[_fieldName];
					if (!this.field)
					{
						var message = _i18n.i18n.translate("kbn.management.editIndexPattern.scripted.noFieldLabel",
						{
							defaultMessage: "'{indexPatternTitle}' index pattern doesn't have a scripted field called '{fieldName}'",
							values:
							{
								indexPatternTitle: this.indexPattern.title,
								fieldName: _fieldName
							}
						});
						_notify.toastNotifications.add(message);
						kbnUrl.redirectToRoute(this.indexPattern, "edit");
						return
					}
				}
				else
				{
					if ("create" !== this.mode)
					{
						var errorMessage = _i18n.i18n.translate("kbn.management.editIndexPattern.scripted.unknownModeErrorMessage",
						{
							defaultMessage: "unknown fieldSettings mode {mode}",
							values:
							{
								mode: this.mode
							}
						});
						throw new Error(errorMessage)
					}
					this.field = new _field.Field(this.indexPattern,
					{
						scripted: true,
						type: "number"
					})
				}
				var fieldName = this.field.name || _i18n.i18n.translate("kbn.management.editIndexPattern.scripted.newFieldPlaceholder",
				{
					defaultMessage: "New Scripted Field"
				});
				docTitle.change([fieldName, this.indexPattern.title]);
				renderFieldEditor($scope, this.indexPattern, this.field,
				{
					Field: _field.Field,
					getConfig: getConfig,
					$http: $http,
					fieldFormatEditors: fieldFormatEditors,
					redirectAway: function redirectAway()
					{
						$timeout(function ()
						{
							kbnUrl.changeToRoute(_this.indexPattern, _this.field.scripted ? "scriptedFields" : "indexedFields")
						})
					}
				});
				$scope.$on("$destroy", function ()
				{
					destroyFieldEditor()
				})
			}
		})
	},
	5566: function (module, exports)
	{
		module.exports = '<kbn-management-app section="kibana">\n  <kbn-management-indices>\n    <div class="kuiViewContent">\n      <kbn-management-index-header\n        index-pattern="fieldSettings.indexPattern"\n      ></kbn-management-index-header>\n    </div>\n\n    <div id="reactFieldEditor"></div>\n\n  </kbn-management-indices>\n</kbn-management-app>\n'
	},
	5567: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.FieldEditor = exports.FieldEditorComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _lodash = __webpack_require__(1);
		var _scripting_languages = __webpack_require__(1727);
		var _field_formats = __webpack_require__(94);
		var _documentation_links = __webpack_require__(119);
		var _notify = __webpack_require__(10);
		var _eui = __webpack_require__(3);
		var _scripting_call_outs = __webpack_require__(5568);
		var _scripting_help = __webpack_require__(5571);
		var _field_format_editor = __webpack_require__(5575);
		var _constants = __webpack_require__(5577);
		var _lib = __webpack_require__(5578);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var FieldEditorComponent = exports.FieldEditorComponent = function (_PureComponent)
		{
			_inherits(FieldEditorComponent, _PureComponent);

			function FieldEditorComponent(props)
			{
				_classCallCheck(this, FieldEditorComponent);
				var _this = _possibleConstructorReturn(this, (FieldEditorComponent.__proto__ || Object.getPrototypeOf(FieldEditorComponent)).call(this, props));
				_initialiseProps.call(_this);
				var field = props.field,
					indexPattern = props.indexPattern,
					Field = props.helpers.Field;
				_this.state = {
					isReady: false,
					isCreating: false,
					isDeprecatedLang: false,
					scriptingLangs: [],
					fieldTypes: [],
					fieldTypeFormats: [],
					existingFieldNames: indexPattern.fields.map(function (f)
					{
						return f.name
					}),
					field: (0, _lib.copyField)(field, indexPattern, Field),
					fieldFormatId: void 0,
					fieldFormatParams:
					{},
					showScriptingHelp: false,
					showDeleteModal: false,
					hasFormatError: false,
					hasScriptError: false,
					isSaving: false
				};
				_this.supportedLangs = (0, _scripting_languages.getSupportedScriptingLanguages)();
				_this.deprecatedLangs = (0, _scripting_languages.getDeprecatedScriptingLanguages)();
				_this.init();
				return _this
			}
			_createClass(FieldEditorComponent, [
			{
				key: "init",
				value: function ()
				{
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
					{
						var $http, field, indexPattern, getEnabledScriptingLanguages, enabledLangs, scriptingLangs, fieldTypes, DefaultFieldFormat, fieldTypeFormats;
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								$http = this.props.helpers.$http;
								field = this.state.field;
								indexPattern = this.props.indexPattern;
								getEnabledScriptingLanguages = new _scripting_languages.GetEnabledScriptingLanguagesProvider($http);
								_context.next = 6;
								return getEnabledScriptingLanguages();
							case 6:
								enabledLangs = _context.sent;
								scriptingLangs = (0, _lodash.intersection)(enabledLangs, (0, _lodash.union)(this.supportedLangs, this.deprecatedLangs));
								field.lang = scriptingLangs.includes(field.lang) ? field.lang : void 0;
								fieldTypes = (0, _lodash.get)(_constants.FIELD_TYPES_BY_LANG, field.lang, _constants.DEFAULT_FIELD_TYPES);
								field.type = fieldTypes.includes(field.type) ? field.type : fieldTypes[0];
								DefaultFieldFormat = _field_formats.fieldFormats.getDefaultType(field.type);
								fieldTypeFormats = [(0, _lib.getDefaultFormat)(DefaultFieldFormat)].concat(_toConsumableArray(_field_formats.fieldFormats.byFieldType[field.type]));
								this.setState(
								{
									isReady: true,
									isCreating: !indexPattern.fields.byName[field.name],
									isDeprecatedLang: this.deprecatedLangs.includes(field.lang),
									errors: [],
									scriptingLangs: scriptingLangs,
									fieldTypes: fieldTypes,
									fieldTypeFormats: fieldTypeFormats,
									fieldFormatId: (0, _lodash.get)(indexPattern, ["fieldFormatMap", field.name, "type", "id"]),
									fieldFormatParams: field.format.params()
								});
							case 14:
							case "end":
								return _context.stop()
							}
						}, _callee, this)
					}));

					function init()
					{
						return _ref.apply(this, arguments)
					}
					return init
				}()
			},
			{
				key: "isDuplicateName",
				value: function isDuplicateName()
				{
					var _state = this.state,
						isCreating = _state.isCreating,
						field = _state.field,
						existingFieldNames = _state.existingFieldNames;
					return isCreating && existingFieldNames.includes(field.name)
				}
			},
			{
				key: "renderName",
				value: function renderName()
				{
					var _this2 = this;
					var _state2 = this.state,
						isCreating = _state2.isCreating,
						field = _state2.field;
					var intl = this.props.intl;
					var isInvalid = !field.name || !field.name.trim();
					return isCreating ? _react2.default.createElement(_eui.EuiFormRow,
					{
						label: intl.formatMessage(
						{
							id: "common.ui.fieldEditor.nameLabel",
							defaultMessage: "Name"
						}),
						helpText: this.isDuplicateName() ? _react2.default.createElement("span", null, _react2.default.createElement(_eui.EuiIcon,
						{
							type: "alert",
							color: "warning",
							size: "s"
						}), " ", _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "common.ui.fieldEditor.mappingConflictLabel.mappingConflictDetail",
							defaultMessage: "{mappingConflict} You already have a field with the name {fieldName}. Naming your scripted field with the same name means you won't be able to query both fields at the same time.",
							values:
							{
								mappingConflict: _react2.default.createElement("strong", null, _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "common.ui.fieldEditor.mappingConflictLabel.mappingConflictLabel",
									defaultMessage: "Mapping Conflict:"
								})),
								fieldName: _react2.default.createElement(_eui.EuiCode, null, field.name)
							}
						})) : null,
						isInvalid: isInvalid,
						error: isInvalid ? intl.formatMessage(
						{
							id: "common.ui.fieldEditor.nameErrorMessage",
							defaultMessage: "Name is required"
						}) : null
					}, _react2.default.createElement(_eui.EuiFieldText,
					{
						value: field.name || "",
						placeholder: intl.formatMessage(
						{
							id: "common.ui.fieldEditor.namePlaceholder",
							defaultMessage: "New scripted field"
						}),
						"data-test-subj": "editorFieldName",
						onChange: function onChange(e)
						{
							_this2.onFieldChange("name", e.target.value)
						},
						isInvalid: isInvalid
					})) : null
				}
			},
			{
				key: "renderLanguage",
				value: function renderLanguage()
				{
					var _this3 = this;
					var _state3 = this.state,
						field = _state3.field,
						scriptingLangs = _state3.scriptingLangs,
						isDeprecatedLang = _state3.isDeprecatedLang;
					var intl = this.props.intl;
					return field.scripted ? _react2.default.createElement(_eui.EuiFormRow,
					{
						label: intl.formatMessage(
						{
							id: "common.ui.fieldEditor.languageLabel",
							defaultMessage: "Language"
						}),
						helpText: isDeprecatedLang ? _react2.default.createElement("span", null, _react2.default.createElement(_eui.EuiIcon,
						{
							type: "alert",
							color: "warning",
							size: "s"
						}), " ", _react2.default.createElement("strong", null, _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "common.ui.fieldEditor.warningHeader",
							defaultMessage: "Deprecation Warning:"
						})), " ", _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "common.ui.fieldEditor.warningLabel.warningDetail",
							defaultMessage: "{language} is deprecated and support will be removed in the next major version of Kibana and Elasticsearch. We recommend using {painlessLink} for new scripted fields.",
							values:
							{
								language: _react2.default.createElement(_eui.EuiCode, null, field.lang),
								painlessLink: _react2.default.createElement(_eui.EuiLink,
								{
									target: "_window",
									href: (0, _documentation_links.getDocLink)("scriptedFields.painless")
								}, _react2.default.createElement(_react3.FormattedMessage,
								{
									id: "common.ui.fieldEditor.warningLabel.painlessLinkLabel",
									defaultMessage: "Painless"
								}))
							}
						})) : null
					}, _react2.default.createElement(_eui.EuiSelect,
					{
						value: field.lang,
						options: scriptingLangs.map(function (lang)
						{
							return {
								value: lang,
								text: lang
							}
						}),
						"data-test-subj": "editorFieldLang",
						onChange: function onChange(e)
						{
							_this3.onLangChange(e.target.value)
						}
					})) : null
				}
			},
			{
				key: "renderType",
				value: function renderType()
				{
					var _this4 = this;
					var _state4 = this.state,
						field = _state4.field,
						fieldTypes = _state4.fieldTypes;
					var intl = this.props.intl;
					return _react2.default.createElement(_eui.EuiFormRow,
					{
						label: intl.formatMessage(
						{
							id: "common.ui.fieldEditor.typeLabel",
							defaultMessage: "Type"
						})
					}, _react2.default.createElement(_eui.EuiSelect,
					{
						value: field.type,
						disabled: !field.scripted,
						options: fieldTypes.map(function (type)
						{
							return {
								value: type,
								text: type
							}
						}),
						"data-test-subj": "editorFieldType",
						onChange: function onChange(e)
						{
							_this4.onTypeChange(e.target.value)
						}
					}))
				}
			},
			{
				key: "renderFormat",
				value: function renderFormat()
				{
					var _this5 = this;
					var _state5 = this.state,
						field = _state5.field,
						fieldTypeFormats = _state5.fieldTypeFormats,
						fieldFormatId = _state5.fieldFormatId,
						fieldFormatParams = _state5.fieldFormatParams;
					var fieldFormatEditors = this.props.helpers.fieldFormatEditors;
					var defaultFormat = fieldTypeFormats[0] && fieldTypeFormats[0].resolvedTitle;
					var label = defaultFormat ? _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.defaultFormatHeader",
						defaultMessage: "Format (Default: {defaultFormat})",
						values:
						{
							defaultFormat: _react2.default.createElement(_eui.EuiCode, null, defaultFormat)
						}
					}) : _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.formatHeader",
						defaultMessage: "Format"
					});
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiFormRow,
					{
						label: label,
						helpText: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "common.ui.fieldEditor.formatLabel",
							defaultMessage: "Formatting allows you to control the way that specific values are displayed. It can also cause values to be completely changed and prevent highlighting in Discover from working."
						})
					}, _react2.default.createElement(_eui.EuiSelect,
					{
						value: fieldFormatId,
						options: fieldTypeFormats.map(function (format)
						{
							return {
								value: format.id || "",
								text: format.title
							}
						}),
						"data-test-subj": "editorSelectedFormatId",
						onChange: function onChange(e)
						{
							_this5.onFormatChange(e.target.value)
						}
					})), fieldFormatId ? _react2.default.createElement(_field_format_editor.FieldFormatEditor,
					{
						fieldType: field.type,
						fieldFormat: field.format,
						fieldFormatId: fieldFormatId,
						fieldFormatParams: fieldFormatParams,
						fieldFormatEditors: fieldFormatEditors,
						onChange: this.onFormatParamsChange,
						onError: this.onFormatParamsError
					}) : null)
				}
			},
			{
				key: "renderPopularity",
				value: function renderPopularity()
				{
					var _this6 = this;
					var field = this.state.field;
					var intl = this.props.intl;
					return _react2.default.createElement(_eui.EuiFormRow,
					{
						label: intl.formatMessage(
						{
							id: "common.ui.fieldEditor.popularityLabel",
							defaultMessage: "Popularity"
						})
					}, _react2.default.createElement(_eui.EuiFieldNumber,
					{
						value: field.count,
						"data-test-subj": "editorFieldCount",
						onChange: function onChange(e)
						{
							_this6.onFieldChange("count", e.target.value ? Number(e.target.value) : "")
						}
					}))
				}
			},
			{
				key: "renderScript",
				value: function renderScript()
				{
					var _state6 = this.state,
						field = _state6.field,
						hasScriptError = _state6.hasScriptError;
					var intl = this.props.intl;
					var isInvalid = !field.script || !field.script.trim() || hasScriptError;
					var errorMsg = hasScriptError ? _react2.default.createElement("span",
					{
						"data-test-subj": "invalidScriptError"
					}, intl.formatMessage(
					{
						id: "common.ui.fieldEditor.scriptInvalidErrorMessage",
						defaultMessage: "Script is invalid. View script preview for details"
					})) : intl.formatMessage(
					{
						id: "common.ui.fieldEditor.scriptRequiredErrorMessage",
						defaultMessage: "Script is required"
					});
					return field.scripted ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiFormRow,
					{
						label: intl.formatMessage(
						{
							id: "common.ui.fieldEditor.scriptLabel",
							defaultMessage: "Script"
						}),
						isInvalid: isInvalid,
						error: isInvalid ? errorMsg : null
					}, _react2.default.createElement(_eui.EuiTextArea,
					{
						value: field.script,
						"data-test-subj": "editorFieldScript",
						onChange: this.onScriptChange,
						isInvalid: isInvalid
					})), _react2.default.createElement(_eui.EuiFormRow, null, _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.script.accessWithLabel",
						defaultMessage: "Access fields with {code}.",
						values:
						{
							code: _react2.default.createElement("code", null, "doc['some_field'].value")
						}
					})), _react2.default.createElement("br", null), _react2.default.createElement(_eui.EuiLink,
					{
						onClick: this.showScriptingHelp,
						"data-test-subj": "scriptedFieldsHelpLink"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.script.getHelpLabel",
						defaultMessage: "Get help with the syntax and preview the results of your script."
					}))))) : null
				}
			},
			{
				key: "renderActions",
				value: function renderActions()
				{
					var _state7 = this.state,
						isCreating = _state7.isCreating,
						field = _state7.field,
						isSaving = _state7.isSaving;
					var redirectAway = this.props.helpers.redirectAway;
					return _react2.default.createElement(_eui.EuiFormRow, null, _react2.default.createElement(_eui.EuiFlexGroup, null, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiButton,
					{
						fill: true,
						onClick: this.saveField,
						isDisabled: this.isSavingDisabled(),
						isLoading: isSaving,
						"data-test-subj": "fieldSaveButton"
					}, isCreating ? _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.actions.createButton",
						defaultMessage: "Create field"
					}) : _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.actions.saveButton",
						defaultMessage: "Save field"
					}))), _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiButtonEmpty,
					{
						onClick: redirectAway,
						"data-test-subj": "fieldCancelButton"
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.actions.cancelButton",
						defaultMessage: "Cancel"
					}))), !isCreating && field.scripted ? _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiFlexGroup,
					{
						justifyContent: "flexEnd"
					}, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: false
					}, _react2.default.createElement(_eui.EuiButtonEmpty,
					{
						color: "danger",
						onClick: this.showDeleteModal
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.actions.deleteButton",
						defaultMessage: "Delete"
					}))))) : null))
				}
			},
			{
				key: "isSavingDisabled",
				value: function isSavingDisabled()
				{
					var _state8 = this.state,
						field = _state8.field,
						hasFormatError = _state8.hasFormatError,
						hasScriptError = _state8.hasScriptError;
					if (hasFormatError || hasScriptError || !field.name || !field.name.trim() || field.scripted && (!field.script || !field.script.trim())) return true;
					return false
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _state9 = this.state,
						isReady = _state9.isReady,
						isCreating = _state9.isCreating,
						field = _state9.field;
					return isReady ? _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("h3", null, isCreating ? _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.createHeader",
						defaultMessage: "Create scripted field"
					}) : _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.editHeader",
						defaultMessage: "Edit {fieldName}",
						values:
						{
							fieldName: field.name
						}
					}))), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "m"
					}), _react2.default.createElement(_eui.EuiForm, null, this.renderScriptingPanels(), this.renderName(), this.renderLanguage(), this.renderType(), this.renderFormat(), this.renderPopularity(), this.renderScript(), this.renderActions(), this.renderDeleteModal()), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					})) : null
				}
			}]);
			return FieldEditorComponent
		}(_react.PureComponent);
		FieldEditorComponent.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			field: _propTypes2.default.object.isRequired,
			helpers: _propTypes2.default.shape(
			{
				Field: _propTypes2.default.func.isRequired,
				getConfig: _propTypes2.default.func.isRequired,
				$http: _propTypes2.default.func.isRequired,
				fieldFormatEditors: _propTypes2.default.object.isRequired,
				redirectAway: _propTypes2.default.func.isRequired
			})
		};
		var _initialiseProps = function _initialiseProps()
		{
			var _this7 = this;
			this.onFieldChange = function (fieldName, value)
			{
				var field = _this7.state.field;
				field[fieldName] = value;
				_this7.forceUpdate()
			};
			this.onTypeChange = function (type)
			{
				var getConfig = _this7.props.helpers.getConfig;
				var field = _this7.state.field;
				var DefaultFieldFormat = _field_formats.fieldFormats.getDefaultType(type);
				field.type = type;
				var fieldTypeFormats = [(0, _lib.getDefaultFormat)(DefaultFieldFormat)].concat(_toConsumableArray(_field_formats.fieldFormats.byFieldType[field.type]));
				var FieldFormat = fieldTypeFormats[0];
				field.format = new FieldFormat(null, getConfig);
				_this7.setState(
				{
					fieldTypeFormats: fieldTypeFormats,
					fieldFormatId: FieldFormat.id,
					fieldFormatParams: field.format.params()
				})
			};
			this.onLangChange = function (lang)
			{
				var field = _this7.state.field;
				var fieldTypes = (0, _lodash.get)(_constants.FIELD_TYPES_BY_LANG, lang, _constants.DEFAULT_FIELD_TYPES);
				field.lang = lang;
				field.type = fieldTypes.includes(field.type) ? field.type : fieldTypes[0];
				_this7.setState(
				{
					fieldTypes: fieldTypes
				})
			};
			this.onFormatChange = function (formatId, params)
			{
				var getConfig = _this7.props.helpers.getConfig;
				var _state10 = _this7.state,
					field = _state10.field,
					fieldTypeFormats = _state10.fieldTypeFormats;
				var FieldFormat = fieldTypeFormats.find(function (format)
				{
					return format.id === formatId
				}) || fieldTypeFormats[0];
				field.format = new FieldFormat(params, getConfig);
				_this7.setState(
				{
					fieldFormatId: FieldFormat.id,
					fieldFormatParams: field.format.params()
				})
			};
			this.onFormatParamsChange = function (newParams)
			{
				var fieldFormatId = _this7.state.fieldFormatId;
				_this7.onFormatChange(fieldFormatId, newParams)
			};
			this.onFormatParamsError = function (error)
			{
				_this7.setState(
				{
					hasFormatError: !!error
				})
			};
			this.onScriptChange = function (e)
			{
				_this7.setState(
				{
					hasScriptError: false
				});
				_this7.onFieldChange("script", e.target.value)
			};
			this.showScriptingHelp = function ()
			{
				_this7.setState(
				{
					showScriptingHelp: true
				})
			};
			this.hideScriptingHelp = function ()
			{
				_this7.setState(
				{
					showScriptingHelp: false
				})
			};
			this.renderDeleteModal = function ()
			{
				var field = _this7.state.field;
				var intl = _this7.props.intl;
				return _this7.state.showDeleteModal ? _react2.default.createElement(_eui.EuiOverlayMask, null, _react2.default.createElement(_eui.EuiConfirmModal,
				{
					title: intl.formatMessage(
					{
						id: "common.ui.fieldEditor.deleteFieldHeader",
						defaultMessage: "Delete field '{fieldName}'"
					},
					{
						fieldName: field.name
					}),
					onCancel: _this7.hideDeleteModal,
					onConfirm: function onConfirm()
					{
						_this7.hideDeleteModal();
						_this7.deleteField()
					},
					cancelButtonText: intl.formatMessage(
					{
						id: "common.ui.fieldEditor.deleteField.cancelButton",
						defaultMessage: "Cancel"
					}),
					confirmButtonText: intl.formatMessage(
					{
						id: "common.ui.fieldEditor.deleteField.deleteButton",
						defaultMessage: "Delete"
					}),
					buttonColor: "danger",
					defaultFocusedButton: _eui.EUI_MODAL_CONFIRM_BUTTON
				}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "common.ui.fieldEditor.deleteFieldLabel",
					defaultMessage: "You can't recover a deleted field.{separator}Are you sure you want to do this?",
					values:
					{
						separator: _react2.default.createElement("span", null, _react2.default.createElement("br", null), _react2.default.createElement("br", null))
					}
				})))) : null
			};
			this.showDeleteModal = function ()
			{
				_this7.setState(
				{
					showDeleteModal: true
				})
			};
			this.hideDeleteModal = function ()
			{
				_this7.setState(
				{
					showDeleteModal: false
				})
			};
			this.renderScriptingPanels = function ()
			{
				var _state11 = _this7.state,
					scriptingLangs = _state11.scriptingLangs,
					field = _state11.field,
					showScriptingHelp = _state11.showScriptingHelp;
				if (!field.scripted) return;
				return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_scripting_call_outs.ScriptingDisabledCallOut,
				{
					isVisible: !scriptingLangs.length
				}), _react2.default.createElement(_scripting_call_outs.ScriptingWarningCallOut,
				{
					isVisible: true
				}), _react2.default.createElement(_scripting_help.ScriptingHelpFlyout,
				{
					isVisible: showScriptingHelp,
					onClose: _this7.hideScriptingHelp,
					indexPattern: _this7.props.indexPattern,
					lang: field.lang,
					name: field.name,
					script: field.script,
					executeScript: _lib.executeScript
				}))
			};
			this.deleteField = function ()
			{
				var redirectAway = _this7.props.helpers.redirectAway;
				var _props = _this7.props,
					indexPattern = _props.indexPattern,
					intl = _props.intl;
				var field = _this7.state.field;
				var remove = indexPattern.removeScriptedField(field.name);
				remove ? remove.then(function ()
				{
					var message = intl.formatMessage(
					{
						id: "common.ui.fieldEditor.deleteField.deletedHeader",
						defaultMessage: "Deleted '{fieldName}'"
					},
					{
						fieldName: field.name
					});
					_notify.toastNotifications.addSuccess(message);
					redirectAway()
				}) : redirectAway()
			};
			this.saveField = _asyncToGenerator(regeneratorRuntime.mark(function _callee2()
			{
				var field, _props2, indexPattern, intl, fieldFormatId, isValid, redirectAway, index;
				return regeneratorRuntime.wrap(function _callee2$(_context2)
				{
					while (1) switch (_context2.prev = _context2.next)
					{
					case 0:
						field = _this7.state.field.toActualField();
						_props2 = _this7.props, indexPattern = _props2.indexPattern, intl = _props2.intl;
						fieldFormatId = _this7.state.fieldFormatId;
						if (!field.scripted)
						{
							_context2.next = 11;
							break
						}
						_this7.setState(
						{
							isSaving: true
						});
						_context2.next = 7;
						return (0, _lib.isScriptValid)(
						{
							name: field.name,
							lang: field.lang,
							script: field.script,
							indexPatternTitle: indexPattern.title
						});
					case 7:
						isValid = _context2.sent;
						if (isValid)
						{
							_context2.next = 11;
							break
						}
						_this7.setState(
						{
							hasScriptError: true,
							isSaving: false
						});
						return _context2.abrupt("return");
					case 11:
						redirectAway = _this7.props.helpers.redirectAway;
						index = indexPattern.fields.findIndex(function (f)
						{
							return f.name === field.name
						});
						index > -1 ? indexPattern.fields.splice(index, 1, field) : indexPattern.fields.push(field);
						indexPattern.fieldFormatMap[field.name] = fieldFormatId ? field.format :
						{};
						return _context2.abrupt("return", indexPattern.save().then(function ()
						{
							var message = intl.formatMessage(
							{
								id: "common.ui.fieldEditor.deleteField.savedHeader",
								defaultMessage: "Saved '{fieldName}'"
							},
							{
								fieldName: field.name
							});
							_notify.toastNotifications.addSuccess(message);
							redirectAway()
						}));
					case 16:
					case "end":
						return _context2.stop()
					}
				}, _callee2, _this7)
			}))
		};
		exports.FieldEditor = (0, _react3.injectI18n)(FieldEditorComponent)
	},
	5568: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _disabled_call_out = __webpack_require__(5569);
		Object.defineProperty(exports, "ScriptingDisabledCallOut",
		{
			enumerable: true,
			get: function get()
			{
				return _disabled_call_out.ScriptingDisabledCallOut
			}
		});
		var _warning_call_out = __webpack_require__(5570);
		Object.defineProperty(exports, "ScriptingWarningCallOut",
		{
			enumerable: true,
			get: function get()
			{
				return _warning_call_out.ScriptingWarningCallOut
			}
		})
	},
	5569: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ScriptingDisabledCallOut = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var ScriptingDisabledCallOut = exports.ScriptingDisabledCallOut = function ScriptingDisabledCallOut(_ref)
		{
			var _ref$isVisible = _ref.isVisible,
				isVisible = void 0 !== _ref$isVisible && _ref$isVisible;
			return isVisible ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiCallOut,
			{
				title: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "common.ui.fieldEditor.disabledCallOutHeader",
					defaultMessage: "Scripting disabled"
				}),
				color: "danger",
				iconType: "alert"
			}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.disabledCallOutLabel",
				defaultMessage: "All inline scripting has been disabled in Elasticsearch. You must enable inline scripting for at least one language in order to use scripted fields in Kibana."
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			})) : null
		};
		ScriptingDisabledCallOut.displayName = "ScriptingDisabledCallOut"
	},
	5570: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ScriptingWarningCallOut = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _documentation_links = __webpack_require__(119);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var ScriptingWarningCallOut = exports.ScriptingWarningCallOut = function ScriptingWarningCallOut(_ref)
		{
			var _ref$isVisible = _ref.isVisible,
				isVisible = void 0 !== _ref$isVisible && _ref$isVisible;
			return isVisible ? _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiCallOut,
			{
				title: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "common.ui.fieldEditor.warningCallOutHeader",
					defaultMessage: "Proceed with caution"
				}),
				color: "warning",
				iconType: "alert"
			}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.warningCallOutLabel.callOutDetail",
				defaultMessage: "Please familiarize yourself with {scripFields} and with {scriptsInAggregation} before using scripted fields.",
				values:
				{
					scripFields: _react2.default.createElement(_eui.EuiLink,
					{
						target: "_window",
						href: (0, _documentation_links.getDocLink)("scriptedFields.scriptFields")
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.warningCallOutLabel.scripFieldsLink",
						defaultMessage: "script fields"
					}), " ", _react2.default.createElement(_eui.EuiIcon,
					{
						type: "link"
					})),
					scriptsInAggregation: _react2.default.createElement(_eui.EuiLink,
					{
						target: "_window",
						href: (0, _documentation_links.getDocLink)("scriptedFields.scriptAggs")
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.warningCallOutLabel.scriptsInAggregationLink",
						defaultMessage: "scripts in aggregations"
					}), " ", _react2.default.createElement(_eui.EuiIcon,
					{
						type: "link"
					}))
				}
			})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.warningCallOut.descriptionLabel",
				defaultMessage: "Scripted fields can be used to display and aggregate calculated values. As such, they can be very slow, and if done incorrectly, can cause Kibana to be unusable. There's no safety net here. If you make a typo, unexpected exceptions will be thrown all over the place!"
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			})) : null
		};
		ScriptingWarningCallOut.displayName = "ScriptingWarningCallOut"
	},
	5571: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _help_flyout = __webpack_require__(5572);
		Object.defineProperty(exports, "ScriptingHelpFlyout",
		{
			enumerable: true,
			get: function get()
			{
				return _help_flyout.ScriptingHelpFlyout
			}
		})
	},
	5572: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ScriptingHelpFlyout = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _scripting_syntax = __webpack_require__(5573);
		var _test_script = __webpack_require__(5574);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}
		var ScriptingHelpFlyout = exports.ScriptingHelpFlyout = function ScriptingHelpFlyout(_ref)
		{
			var _ref2, _ref3;
			var _ref$isVisible = _ref.isVisible,
				isVisible = void 0 !== _ref$isVisible && _ref$isVisible,
				_ref$onClose = _ref.onClose,
				onClose = void 0 === _ref$onClose ? function () {} : _ref$onClose,
				indexPattern = _ref.indexPattern,
				lang = _ref.lang,
				name = _ref.name,
				script = _ref.script,
				executeScript = _ref.executeScript;
			var tabs = [(_ref2 = {
				id: "syntax",
				name: "Syntax"
			}, _defineProperty(_ref2, "data-test-subj", "syntaxTab"), _defineProperty(_ref2, "content", _react2.default.createElement(_scripting_syntax.ScriptingSyntax, null)), _ref2), (_ref3 = {
				id: "test",
				name: "Preview results"
			}, _defineProperty(_ref3, "data-test-subj", "testTab"), _defineProperty(_ref3, "content", _react2.default.createElement(_test_script.TestScript,
			{
				indexPattern: indexPattern,
				lang: lang,
				name: name,
				script: script,
				executeScript: executeScript
			})), _ref3)];
			return isVisible ? _react2.default.createElement(_eui.EuiFlyout,
			{
				onClose: onClose,
				"data-test-subj": "scriptedFieldsHelpFlyout"
			}, _react2.default.createElement(_eui.EuiFlyoutBody, null, _react2.default.createElement(_eui.EuiTabbedContent,
			{
				tabs: tabs,
				initialSelectedTab: tabs[0]
			}))) : null
		};
		ScriptingHelpFlyout.displayName = "ScriptingHelpFlyout";
		ScriptingHelpFlyout.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			lang: _propTypes2.default.string.isRequired,
			name: _propTypes2.default.string,
			script: _propTypes2.default.string,
			executeScript: _propTypes2.default.func.isRequired
		}
	},
	5573: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ScriptingSyntax = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _documentation_links = __webpack_require__(119);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.ScriptingSyntax = function ScriptingSyntax()
		{
			return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSpacer, null), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("h3", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntaxHeader",
				defaultMessage: "Syntax"
			})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.defaultLabel.defaultDetail",
				defaultMessage: "By default, Kibana scripted fields use {painless}, a simple and secure scripting language designed specifically for use with Elasticsearch, to access values in the document use the following format:",
				values:
				{
					painless: _react2.default.createElement(_eui.EuiLink,
					{
						target: "_window",
						href: (0, _documentation_links.getDocLink)("scriptedFields.painless")
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.syntax.defaultLabel.painlessLink",
						defaultMessage: "Painless"
					}), " ", _react2.default.createElement(_eui.EuiIcon,
					{
						type: "link"
					}))
				}
			})), _react2.default.createElement("p", null, _react2.default.createElement(_eui.EuiCode, null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.default.formatLabel",
				defaultMessage: "doc['some_field'].value"
			}))), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.painlessLabel.painlessDetail",
				defaultMessage: "Painless is powerful but easy to use. It provides access to many {javaAPIs}. Read up on its {syntax} and you'll be up to speed in no time!",
				values:
				{
					javaAPIs: _react2.default.createElement(_eui.EuiLink,
					{
						target: "_window",
						href: (0, _documentation_links.getDocLink)("scriptedFields.painlessApi")
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.syntax.painlessLabel.javaAPIsLink",
						defaultMessage: "native Java APIs"
					}), " ", _react2.default.createElement(_eui.EuiIcon,
					{
						type: "link"
					})),
					syntax: _react2.default.createElement(_eui.EuiLink,
					{
						target: "_window",
						href: (0, _documentation_links.getDocLink)("scriptedFields.painlessSyntax")
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.syntax.painlessLabel.syntaxLink",
						defaultMessage: "syntax"
					}), " ", _react2.default.createElement(_eui.EuiIcon,
					{
						type: "link"
					}))
				}
			})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.kibanaLabel",
				defaultMessage: "Kibana currently imposes one special limitation on the painless scripts you write. They cannot contain named functions."
			})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.commonLabel.commonDetail",
				defaultMessage: "Coming from an older version of Kibana? The {lucene} you know and love are still available. Lucene expressions are a lot like JavaScript, but limited to basic arithmetic, bitwise and comparison operations.",
				values:
				{
					lucene: _react2.default.createElement(_eui.EuiLink,
					{
						target: "_window",
						href: (0, _documentation_links.getDocLink)("scriptedFields.luceneExpressions")
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "common.ui.fieldEditor.syntax.lucene.commonLabel.luceneLink",
						defaultMessage: "Lucene Expressions"
					}), " ", _react2.default.createElement(_eui.EuiIcon,
					{
						type: "link"
					}))
				}
			})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.limitsLabel",
				defaultMessage: "There are a few limitations when using Lucene Expressions:"
			})), _react2.default.createElement("ul", null, _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.limits.typesLabel",
				defaultMessage: "Only numeric, boolean, date, and geo_point fields may be accessed"
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.limits.fieldsLabel",
				defaultMessage: "Stored fields are not available"
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.limits.sparseLabel",
				defaultMessage: "If a field is sparse (only some documents contain a value), documents missing the field will have a value of 0"
			}))), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operationsLabel",
				defaultMessage: "Here are all the operations available to lucene expressions:"
			})), _react2.default.createElement("ul", null, _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.arithmeticLabel",
				defaultMessage: "Arithmetic operators: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "+ - * / %")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.bitwiseLabel",
				defaultMessage: "Bitwise operators: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "| & ^ ~ << >> >>>")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.booleanLabel",
				defaultMessage: "Boolean operators (including the ternary operator): {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "&& || ! ?:")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.comparisonLabel",
				defaultMessage: "Comparison operators: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "< <= == >= >")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.mathLabel",
				defaultMessage: "Common mathematic functions: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "abs ceil exp floor ln log10 logn max min sqrt pow")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.trigLabel",
				defaultMessage: "Trigonometric library functions: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "acosh acos asinh asin atanh atan atan2 cosh cos sinh sin tanh tan")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.distanceLabel",
				defaultMessage: "Distance functions: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "haversin")
				}
			})), _react2.default.createElement("li", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "common.ui.fieldEditor.syntax.lucene.operations.miscellaneousLabel",
				defaultMessage: "Miscellaneous functions: {operators}",
				values:
				{
					operators: _react2.default.createElement("code", null, "min, max")
				}
			})))))
		}
	},
	5574: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.TestScript = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var TestScript = exports.TestScript = function (_Component)
		{
			_inherits(TestScript, _Component);

			function TestScript()
			{
				var _ref, _this2 = this;
				var _temp, _this, _ret;
				_classCallCheck(this, TestScript);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestScript.__proto__ || Object.getPrototypeOf(TestScript)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
					isLoading: false,
					additionalFields: []
				}, _this.previewScript = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var _this$props, indexPattern, lang, name, script, executeScript, scriptResponse;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_this$props = _this.props, indexPattern = _this$props.indexPattern, lang = _this$props.lang, name = _this$props.name, script = _this$props.script, executeScript = _this$props.executeScript;
							if (!(!script || 0 === script.length))
							{
								_context.next = 3;
								break
							}
							return _context.abrupt("return");
						case 3:
							_this.setState(
							{
								isLoading: true
							});
							_context.next = 6;
							return executeScript(
							{
								name: name,
								lang: lang,
								script: script,
								indexPatternTitle: indexPattern.title,
								additionalFields: _this.state.additionalFields.map(function (option)
								{
									return option.value
								})
							});
						case 6:
							scriptResponse = _context.sent;
							if (!(200 !== scriptResponse.status))
							{
								_context.next = 10;
								break
							}
							_this.setState(
							{
								isLoading: false,
								previewData: scriptResponse
							});
							return _context.abrupt("return");
						case 10:
							_this.setState(
							{
								isLoading: false,
								previewData: scriptResponse.hits.hits.map(function (hit)
								{
									return _extends(
									{
										_id: hit._id
									}, hit._source, hit.fields)
								})
							});
						case 11:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2)
				})), _this.onAdditionalFieldsChange = function (selectedOptions)
				{
					_this.setState(
					{
						additionalFields: selectedOptions
					})
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(TestScript, [
			{
				key: "componentDidMount",
				value: function componentDidMount()
				{
					this.props.script && this.previewScript()
				}
			},
			{
				key: "renderPreview",
				value: function renderPreview()
				{
					var previewData = this.state.previewData;
					if (!previewData) return null;
					if (previewData.error) return _react2.default.createElement(_eui.EuiCallOut,
					{
						title: "There's an error in your script",
						color: "danger",
						iconType: "cross"
					}, _react2.default.createElement(_eui.EuiCodeBlock,
					{
						language: "json",
						className: "scriptPreviewCodeBlock",
						"data-test-subj": "scriptedFieldPreview"
					}, JSON.stringify(previewData.error, null, " ")));
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiTitle,
					{
						size: "xs"
					}, _react2.default.createElement("p", null, "First 10 results")), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "s"
					}), _react2.default.createElement(_eui.EuiCodeBlock,
					{
						language: "json",
						className: "scriptPreviewCodeBlock",
						"data-test-subj": "scriptedFieldPreview"
					}, JSON.stringify(previewData, null, " ")))
				}
			},
			{
				key: "renderToolbar",
				value: function renderToolbar()
				{
					var fieldsByTypeMap = new Map;
					var fields = [];
					this.props.indexPattern.fields.filter(function (field)
					{
						return !field.name.startsWith("_")
					}).forEach(function (field)
					{
						if (fieldsByTypeMap.has(field.type))
						{
							var fieldsList = fieldsByTypeMap.get(field.type);
							fieldsList.push(field.name);
							fieldsByTypeMap.set(field.type, fieldsList)
						}
						else fieldsByTypeMap.set(field.type, [field.name])
					});
					fieldsByTypeMap.forEach(function (fieldsList, fieldType)
					{
						fields.push(
						{
							label: fieldType,
							options: fieldsList.sort().map(function (fieldName)
							{
								return {
									value: fieldName,
									label: fieldName
								}
							})
						})
					});
					fields.sort(function (a, b)
					{
						if (a.label < b.label) return -1;
						if (a.label > b.label) return 1;
						return 0
					});
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiFormRow,
					{
						label: "Additional fields"
					}, _react2.default.createElement(_eui.EuiComboBox,
					{
						placeholder: "Select...",
						options: fields,
						selectedOptions: this.state.additionalFields,
						onChange: this.onAdditionalFieldsChange,
						"data-test-subj": "additionalFieldsSelect"
					})), _react2.default.createElement(_eui.EuiButton,
					{
						onClick: this.previewScript,
						disabled: !this.props.script,
						isLoading: this.state.isLoading,
						"data-test-subj": "runScriptButton"
					}, "Run script"))
				}
			},
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiSpacer, null), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("h3", null, "Preview results"), _react2.default.createElement("p", null, "Run your script to preview the first 10 results. You can also select some additional fields to include in your results to gain more context.")), _react2.default.createElement(_eui.EuiSpacer, null), this.renderToolbar(), _react2.default.createElement(_eui.EuiSpacer, null), this.renderPreview())
				}
			}]);
			return TestScript
		}(_react.Component);
		TestScript.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			lang: _propTypes2.default.string.isRequired,
			name: _propTypes2.default.string,
			script: _propTypes2.default.string,
			executeScript: _propTypes2.default.func.isRequired
		};
		TestScript.defaultProps = {
			name: "myScriptedField"
		}
	},
	5575: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _field_format_editor = __webpack_require__(5576);
		Object.defineProperty(exports, "FieldFormatEditor",
		{
			enumerable: true,
			get: function get()
			{
				return _field_format_editor.FieldFormatEditor
			}
		})
	},
	5576: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.FieldFormatEditor = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var FieldFormatEditor = exports.FieldFormatEditor = function (_PureComponent)
		{
			_inherits(FieldFormatEditor, _PureComponent);

			function FieldFormatEditor(props)
			{
				_classCallCheck(this, FieldFormatEditor);
				var _this = _possibleConstructorReturn(this, (FieldFormatEditor.__proto__ || Object.getPrototypeOf(FieldFormatEditor)).call(this, props));
				_this.state = {
					EditorComponent: null
				};
				return _this
			}
			_createClass(FieldFormatEditor, [
			{
				key: "render",
				value: function render()
				{
					var EditorComponent = this.state.EditorComponent;
					var _props = this.props,
						fieldType = _props.fieldType,
						fieldFormat = _props.fieldFormat,
						fieldFormatParams = _props.fieldFormatParams,
						onChange = _props.onChange,
						onError = _props.onError;
					return _react2.default.createElement(_react.Fragment, null, EditorComponent ? _react2.default.createElement(EditorComponent,
					{
						fieldType: fieldType,
						format: fieldFormat,
						formatParams: fieldFormatParams,
						onChange: onChange,
						onError: onError
					}) : null)
				}
			}], [
			{
				key: "getDerivedStateFromProps",
				value: function getDerivedStateFromProps(nextProps)
				{
					return {
						EditorComponent: nextProps.fieldFormatEditors.getEditor(nextProps.fieldFormatId) || null
					}
				}
			}]);
			return FieldFormatEditor
		}(_react.PureComponent);
		FieldFormatEditor.propTypes = {
			fieldType: _propTypes2.default.string.isRequired,
			fieldFormat: _propTypes2.default.object.isRequired,
			fieldFormatId: _propTypes2.default.string.isRequired,
			fieldFormatParams: _propTypes2.default.object.isRequired,
			fieldFormatEditors: _propTypes2.default.object.isRequired,
			onChange: _propTypes2.default.func.isRequired,
			onError: _propTypes2.default.func.isRequired
		}
	},
	5577: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.DEFAULT_FIELD_TYPES = exports.FIELD_TYPES_BY_LANG = void 0;
		var _utils = __webpack_require__(433);
		exports.FIELD_TYPES_BY_LANG = {
			painless: ["number", "string", "date", "boolean"],
			expression: ["number"]
		};
		exports.DEFAULT_FIELD_TYPES = (0, _utils.getKbnTypeNames)()
	},
	5578: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _copy_field = __webpack_require__(5579);
		Object.defineProperty(exports, "copyField",
		{
			enumerable: true,
			get: function get()
			{
				return _copy_field.copyField
			}
		});
		var _get_default_format = __webpack_require__(5580);
		Object.defineProperty(exports, "getDefaultFormat",
		{
			enumerable: true,
			get: function get()
			{
				return _get_default_format.getDefaultFormat
			}
		});
		var _validate_script = __webpack_require__(5581);
		Object.defineProperty(exports, "executeScript",
		{
			enumerable: true,
			get: function get()
			{
				return _validate_script.executeScript
			}
		});
		Object.defineProperty(exports, "isScriptValid",
		{
			enumerable: true,
			get: function get()
			{
				return _validate_script.isScriptValid
			}
		})
	},
	5579: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.copyField = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _lodash = __webpack_require__(1);
		exports.copyField = function copyField(field, indexPattern, Field)
		{
			var changes = {};
			var newFieldProps = {
				toActualField:
				{
					value: function value()
					{
						return new Field(indexPattern, _extends(
						{}, field.$$spec, changes))
					}
				}
			};
			Object.getOwnPropertyNames(field).forEach(function (prop)
			{
				var desc = Object.getOwnPropertyDescriptor(field, prop);
				newFieldProps[prop] = {
					enumerable: desc.enumerable,
					get: function get()
					{
						return (0, _lodash.has)(changes, prop) ? changes[prop] : field[prop]
					},
					set: function set(v)
					{
						changes[prop] = v
					}
				}
			});
			return Object.create(null, newFieldProps)
		}
	},
	5580: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getDefaultFormat = void 0;
		var _i18n = __webpack_require__(12);

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		exports.getDefaultFormat = function getDefaultFormat(Format)
		{
			var DefaultFormat = function (_Format)
			{
				_inherits(DefaultFormat, _Format);

				function DefaultFormat()
				{
					_classCallCheck(this, DefaultFormat);
					return _possibleConstructorReturn(this, (DefaultFormat.__proto__ || Object.getPrototypeOf(DefaultFormat)).apply(this, arguments))
				}
				return DefaultFormat
			}(Format);
			DefaultFormat.id = "";
			DefaultFormat.resolvedTitle = Format.title;
			DefaultFormat.title = _i18n.i18n.translate("common.ui.fieldEditor.defaultFormatDropDown",
			{
				defaultMessage: "- Default -"
			});
			return DefaultFormat
		}
	},
	5581: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.isScriptValid = exports.executeScript = void 0;
		var _kfetch = __webpack_require__(149);

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var executeScript = exports.executeScript = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref)
		{
			var name = _ref.name,
				lang = _ref.lang,
				script = _ref.script,
				indexPatternTitle = _ref.indexPatternTitle,
				_ref$additionalFields = _ref.additionalFields,
				additionalFields = void 0 === _ref$additionalFields ? [] : _ref$additionalFields;
			var header, search, body, esResp;
			return regeneratorRuntime.wrap(function _callee$(_context)
			{
				while (1) switch (_context.prev = _context.next)
				{
				case 0:
					header = {
						index: indexPatternTitle,
						ignore_unavailable: true
					};
					search = {
						query:
						{
							match_all:
							{}
						},
						script_fields: _defineProperty(
						{}, name,
						{
							script:
							{
								lang: lang,
								source: script
							}
						}),
						size: 10,
						timeout: "30s"
					};
					additionalFields.length > 0 && (search._source = additionalFields);
					body = JSON.stringify(header) + "\n" + JSON.stringify(search) + "\n";
					_context.next = 6;
					return (0, _kfetch.kfetch)(
					{
						method: "POST",
						pathname: "/elasticsearch/_msearch",
						body: body
					});
				case 6:
					esResp = _context.sent;
					return _context.abrupt("return", esResp.responses[0]);
				case 8:
				case "end":
					return _context.stop()
				}
			}, _callee, void 0)
		})), function executeScript(_x)
		{
			return _ref2.apply(this, arguments)
		});
		var _ref2;
		exports.isScriptValid = (_ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(_ref3)
		{
			var name = _ref3.name,
				lang = _ref3.lang,
				script = _ref3.script,
				indexPatternTitle = _ref3.indexPatternTitle;
			var scriptResponse;
			return regeneratorRuntime.wrap(function _callee2$(_context2)
			{
				while (1) switch (_context2.prev = _context2.next)
				{
				case 0:
					_context2.next = 2;
					return executeScript(
					{
						name: name,
						lang: lang,
						script: script,
						indexPatternTitle: indexPatternTitle
					});
				case 2:
					scriptResponse = _context2.sent;
					if (!(200 !== scriptResponse.status))
					{
						_context2.next = 5;
						break
					}
					return _context2.abrupt("return", false);
				case 5:
					return _context2.abrupt("return", true);
				case 6:
				case "end":
					return _context2.stop()
				}
			}, _callee2, void 0)
		})), function isScriptValid(_x2)
		{
			return _ref4.apply(this, arguments)
		});
		var _ref4
	},
	5582: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndicesEditSectionsProvider = IndicesEditSectionsProvider;
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function IndicesEditSectionsProvider()
		{
			return function (indexPattern, indexPatternListProvider)
			{
				var fieldCount = _lodash2.default.countBy(indexPattern.fields, function (field)
				{
					return field.scripted ? "scripted" : "indexed"
				});
				_lodash2.default.defaults(fieldCount,
				{
					indexed: 0,
					scripted: 0,
					sourceFilters: indexPattern.sourceFilters ? indexPattern.sourceFilters.length : 0
				});
				var editSections = [];
				editSections.push(
				{
					title: _i18n.i18n.translate("kbn.management.editIndexPattern.tabs.fieldsHeader",
					{
						defaultMessage: "Fields"
					}),
					index: "indexedFields",
					count: fieldCount.indexed
				});
				indexPatternListProvider.areScriptedFieldsEnabled(indexPattern) && editSections.push(
				{
					title: _i18n.i18n.translate("kbn.management.editIndexPattern.tabs.scriptedHeader",
					{
						defaultMessage: "Scripted fields"
					}),
					index: "scriptedFields",
					count: fieldCount.scripted
				});
				editSections.push(
				{
					title: _i18n.i18n.translate("kbn.management.editIndexPattern.tabs.sourceHeader",
					{
						defaultMessage: "Source filters"
					}),
					index: "sourceFilters",
					count: fieldCount.sourceFilters
				});
				return editSections
			}
		}
	},
	5583: function (module, exports)
	{
		module.exports = '<kbn-management-app section="kibana" omit-breadcrumb-pages="[\'indices\']">\n  <kbn-management-indices>\n    <div\n      ng-controller="managementIndicesEdit"\n      data-test-subj="editIndexPattern"\n      role="region"\n      aria-label="{{::\'kbn.management.editIndexPattern.detailsAria\' | i18n: { defaultMessage: \'Index pattern details\' } }}"\n    >\n      <!-- Header -->\n      <kbn-management-index-header\n        index-pattern="indexPattern"\n        set-default="setDefaultPattern()"\n        refresh-fields="refreshFields()"\n        delete="removePattern()"\n      ></kbn-management-index-header>\n\n      <p class="kuiText kuiVerticalRhythm" ng-if="::(indexPattern.timeFieldName || (indexPattern.tags && indexPattern.tags.length))">\n        <span ng-if="::indexPattern.timeFieldName">\n          <span class="label label-success">\n            <span class="kuiIcon fa-clock-o"></span>\n            <span i18n-id="kbn.management.editIndexPattern.timeFilterHeader"\n                  i18n-default-message="Time Filter field name: {timeFieldName}"\n                  i18n-values="{ timeFieldName: indexPattern.timeFieldName }"></span>\n          </span>\n          &nbsp;\n        </span>\n        <span ng-repeat="tag in indexPattern.tags">\n          <span class="label label-info">{{tag.name}}</span>\n        </span>\n      </p>\n\n\n      <p class="kuiText kuiVerticalRhythm">\n        <span i18n-id="kbn.management.editIndexPattern.timeFilterLabel.timeFilterDetail"\n          i18n-default-message="This page lists every field in the {indexPatternTitle} index and the field\'s associated core type as recorded by Elasticsearch. To change a field type, use the Elasticsearch"\n          i18n-values="{ indexPatternTitle: \'<strong>\' + indexPattern.title + \'</strong>\' }"></span>\n        <a target="_window" class="euiLink euiLink--primary" href="http://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html">\n          <span i18n-id="kbn.management.editIndexPattern.timeFilterLabel.mappingAPILink"\n                i18n-default-message="Mapping API"></span>\n          <i aria-hidden="true" class="fa-link fa"></i>\n        </a>\n      </p>\n\n      <!-- Alerts -->\n      <div\n        ng-if="indexPattern.isUnsupportedTimePattern()"\n        class="kuiInfoPanel kuiInfoPanel--error kuiVerticalRhythm"\n      >\n        <div class="kuiInfoPanelHeader">\n          <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--error fa-warning"></span>\n          <span class="kuiInfoPanelHeader__title"\n                i18n-id="kbn.management.editIndexPattern.unsupportedTimePatternHeader"\n                i18n-default-message="Support for repeating index patterns removed">\n          </span>\n        </div>\n\n        <div class="kuiInfoPanelBody">\n          <div class="kuiInfoPanelBody__message">\n            <span i18n-id="kbn.management.editIndexPattern.unsupportedTimePatternLabel"\n                  i18n-default-message="Support for time-interval based index patterns has been removed! In the next major version of Kibana this index patterns will stop working. Migrate saved objects that use this index pattern to a wildcard pattern and delete this one."></span>\n          </div>\n        </div>\n      </div>\n\n      <div\n        ng-if="conflictFields.length"\n        class="kuiInfoPanel kuiInfoPanel--warning kuiVerticalRhythm"\n      >\n        <div class="kuiInfoPanelHeader">\n          <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--warning fa-bolt"></span>\n          <span class="kuiInfoPanelHeader__title"\n                i18n-id="kbn.management.editIndexPattern.mappingConflictHeader"\n                i18n-default-message="Mapping conflict"></span>\n        </div>\n\n        <div class="kuiInfoPanelBody">\n          <div class="kuiInfoPanelBody__message">\n            <span i18n-id="kbn.management.editIndexPattern.mappingConflictLabel"\n                  i18n-default-message="{conflictFieldsLength, plural, one {A field is} other {# fields are}} defined as several types (string, integer, etc) across the indices that match this pattern. You may still be able to use these conflict fields in parts of Kibana, but they will be unavailable for functions that require Kibana to know their type. Correcting this issue will require reindexing your data."\n                  i18n-values="{ conflictFieldsLength: conflictFields.length }"></span>\n          </div>\n        </div>\n      </div>\n\n      <!-- Tabs -->\n      <div class="kuiTabs kuiVerticalRhythm">\n        <button\n          class="kuiTab"\n          ng-repeat="editSection in editSections"\n          ng-class="{ \'kuiTab-isSelected\': state.tab === editSection.index }"\n          ng-click="changeTab(editSection)"\n          data-test-subj="tab-{{ editSection.index }}"\n        >\n          {{ editSection.title }}\n          <span\n            data-test-subj="tab-count-{{ editSection.index }}"\n            aria-label="{{:: editSection.count + \' \' + editSection.title}}"\n          >\n            ({{ editSection.count }})\n          </span>\n        </button>\n      </div>\n\n      <!-- Field Filters -->\n      <form role="form" class="kuiFieldGroup kuiVerticalRhythm">\n        <div class="kuiFieldGroupSection kuiFieldGroupSection--wide">\n          <div class="kuiSearchInput">\n            <div class="kuiSearchInput__icon kuiIcon fa-search"></div>\n            <input\n              class="kuiSearchInput__input"\n              type="text"\n              aria-label="{{::\'kbn.management.editIndexPattern.fields.filterAria\' | i18n: {defaultMessage: \'Filter\'} }}"\n              ng-model="fieldFilter"\n              placeholder="{{::\'kbn.management.editIndexPattern.fields.filterPlaceholder\' | i18n: {defaultMessage: \'Filter\'} }}"\n              data-test-subj="indexPatternFieldFilter"\n            >\n          </div>\n        </div>\n\n        <div\n          class="kuiFieldGroupSection"\n          ng-if="state.tab == \'indexedFields\' && indexedFieldTypes.length > 0"\n        >\n          <select\n            data-test-subj="indexedFieldTypeFilterDropdown"\n            class="kuiSelect"\n            ng-model="indexedFieldTypeFilter"\n            ng-change="changeFilter(\'indexedFieldTypeFilter\', indexedFieldTypeFilter)"\n            ng-options="o for o in indexedFieldTypes"\n          >\n            <option value=""\n                    i18n-id="kbn.management.editIndexPattern.fields.allTypesDropDown"\n                    i18n-default-message="All field types"></option>\n          </select>\n        </div>\n\n        <div\n          class="kuiFieldGroupSection"\n          ng-if="state.tab == \'scriptedFields\' && scriptedFieldLanguages.length > 0"\n        >\n          <select\n            data-test-subj="scriptedFieldLanguageFilterDropdown"\n            class="kuiSelect"\n            ng-model="scriptedFieldLanguageFilter"\n            ng-change="changeFilter(\'scriptedFieldLanguageFilter\', scriptedFieldLanguageFilter)"\n            ng-options="o for o in scriptedFieldLanguages"\n          >\n            <option value=""\n                    i18n-id="kbn.management.editIndexPattern.fields.allLangsDropDown"\n                    i18n-default-message="All languages"></option>\n          </select>\n        </div>\n      </form>\n\n      <!-- Tab content -->\n      <div class="kuiVerticalRhythm">\n        <div id="reactIndexedFieldsTable"></div>\n\n        <div id="reactScriptedFieldsTable"></div>\n\n        <div id="reactSourceFiltersTable"></div>\n      </div>\n    </div>\n  </kbn-management-indices>\n</kbn-management-app>\n'
	},
	5584: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _source_filters_table = __webpack_require__(5585);
		Object.defineProperty(exports, "SourceFiltersTable",
		{
			enumerable: true,
			get: function get()
			{
				return _source_filters_table.SourceFiltersTable
			}
		})
	},
	5585: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.SourceFiltersTable = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _reselect = __webpack_require__(637);
		var _eui = __webpack_require__(3);
		var _table = __webpack_require__(5586);
		var _header = __webpack_require__(5588);
		var _add_filter = __webpack_require__(5590);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var SourceFiltersTable = exports.SourceFiltersTable = function (_Component)
		{
			_inherits(SourceFiltersTable, _Component);

			function SourceFiltersTable(props)
			{
				_classCallCheck(this, SourceFiltersTable);
				var _this = _possibleConstructorReturn(this, (SourceFiltersTable.__proto__ || Object.getPrototypeOf(SourceFiltersTable)).call(this, props));
				_initialiseProps.call(_this);
				_this.clientSideId = 0;
				_this.state = {
					filterToDelete: void 0,
					isDeleteConfirmationModalVisible: false,
					isSaving: false,
					filters: []
				};
				return _this
			}
			_createClass(SourceFiltersTable, [
			{
				key: "componentWillMount",
				value: function componentWillMount()
				{
					this.updateFilters()
				}
			},
			{
				key: "renderDeleteConfirmationModal",
				value: function renderDeleteConfirmationModal()
				{
					var filterToDelete = this.state.filterToDelete;
					if (!filterToDelete) return null;
					return _react2.default.createElement(_eui.EuiOverlayMask, null, _react2.default.createElement(_eui.EuiConfirmModal,
					{
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.editIndexPattern.source.deleteSourceFilterLabel",
							defaultMessage: "Delete source filter '{value}'?",
							values:
							{
								value: filterToDelete.value
							}
						}),
						onCancel: this.hideDeleteConfirmationModal,
						onConfirm: this.deleteFilter,
						cancelButtonText: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.editIndexPattern.source.deleteFilter.cancelButtonLabel",
							defaultMessage: "Cancel"
						}),
						confirmButtonText: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.editIndexPattern.source.deleteFilter.deleteButtonLabel",
							defaultMessage: "Delete"
						}),
						defaultFocusedButton: _eui.EUI_MODAL_CONFIRM_BUTTON
					}))
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _props = this.props,
						indexPattern = _props.indexPattern,
						fieldWildcardMatcher = _props.fieldWildcardMatcher;
					var isSaving = this.state.isSaving;
					var filteredFilters = this.getFilteredFilters(this.state, this.props);
					return _react2.default.createElement("div", null, _react2.default.createElement(_header.Header, null), _react2.default.createElement(_add_filter.AddFilter,
					{
						onAddFilter: this.onAddFilter
					}), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					}), _react2.default.createElement(_table.Table,
					{
						isSaving: isSaving,
						indexPattern: indexPattern,
						items: filteredFilters,
						fieldWildcardMatcher: fieldWildcardMatcher,
						deleteFilter: this.startDeleteFilter,
						saveFilter: this.saveFilter
					}), this.renderDeleteConfirmationModal())
				}
			}]);
			return SourceFiltersTable
		}(_react.Component);
		SourceFiltersTable.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			filterFilter: _propTypes2.default.string,
			fieldWildcardMatcher: _propTypes2.default.func.isRequired,
			onAddOrRemoveFilter: _propTypes2.default.func
		};
		var _initialiseProps = function _initialiseProps()
		{
			var _this2 = this;
			this.updateFilters = function ()
			{
				var sourceFilters = _this2.props.indexPattern.sourceFilters || [];
				var filters = sourceFilters.map(function (filter)
				{
					return _extends(
					{}, filter,
					{
						clientId: ++_this2.clientSideId
					})
				});
				_this2.setState(
				{
					filters: filters
				})
			};
			this.getFilteredFilters = (0, _reselect.createSelector)(function (state)
			{
				return state.filters
			}, function (state, props)
			{
				return props.filterFilter
			}, function (filters, filterFilter)
			{
				if (filterFilter)
				{
					var filterFilterToLowercase = filterFilter.toLowerCase();
					return filters.filter(function (filter)
					{
						return filter.value.toLowerCase().includes(filterFilterToLowercase)
					})
				}
				return filters
			});
			this.startDeleteFilter = function (filter)
			{
				_this2.setState(
				{
					filterToDelete: filter,
					isDeleteConfirmationModalVisible: true
				})
			};
			this.hideDeleteConfirmationModal = function ()
			{
				_this2.setState(
				{
					filterToDelete: void 0,
					isDeleteConfirmationModalVisible: false
				})
			};
			this.deleteFilter = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
			{
				var _props2, indexPattern, onAddOrRemoveFilter, _state, filterToDelete, filters;
				return regeneratorRuntime.wrap(function _callee$(_context)
				{
					while (1) switch (_context.prev = _context.next)
					{
					case 0:
						_props2 = _this2.props, indexPattern = _props2.indexPattern, onAddOrRemoveFilter = _props2.onAddOrRemoveFilter;
						_state = _this2.state, filterToDelete = _state.filterToDelete, filters = _state.filters;
						indexPattern.sourceFilters = filters.filter(function (filter)
						{
							return filter.clientId !== filterToDelete.clientId
						});
						_this2.setState(
						{
							isSaving: true
						});
						_context.next = 6;
						return indexPattern.save();
					case 6:
						onAddOrRemoveFilter && onAddOrRemoveFilter();
						_this2.updateFilters();
						_this2.setState(
						{
							isSaving: false
						});
						_this2.hideDeleteConfirmationModal();
					case 10:
					case "end":
						return _context.stop()
					}
				}, _callee, _this2)
			}));
			this.onAddFilter = (_ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(value)
			{
				var _props3, indexPattern, onAddOrRemoveFilter;
				return regeneratorRuntime.wrap(function _callee2$(_context2)
				{
					while (1) switch (_context2.prev = _context2.next)
					{
					case 0:
						_props3 = _this2.props, indexPattern = _props3.indexPattern, onAddOrRemoveFilter = _props3.onAddOrRemoveFilter;
						indexPattern.sourceFilters = [].concat(_toConsumableArray(indexPattern.sourceFilters || []), [
						{
							value: value
						}]);
						_this2.setState(
						{
							isSaving: true
						});
						_context2.next = 5;
						return indexPattern.save();
					case 5:
						onAddOrRemoveFilter && onAddOrRemoveFilter();
						_this2.updateFilters();
						_this2.setState(
						{
							isSaving: false
						});
					case 8:
					case "end":
						return _context2.stop()
					}
				}, _callee2, _this2)
			})), function (_x)
			{
				return _ref2.apply(this, arguments)
			});
			var _ref2;
			this.saveFilter = (_ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(_ref3)
			{
				var filterId = _ref3.filterId,
					newFilterValue = _ref3.newFilterValue;
				var indexPattern, filters;
				return regeneratorRuntime.wrap(function _callee3$(_context3)
				{
					while (1) switch (_context3.prev = _context3.next)
					{
					case 0:
						indexPattern = _this2.props.indexPattern;
						filters = _this2.state.filters;
						indexPattern.sourceFilters = filters.map(function (filter)
						{
							if (filter.clientId === filterId) return {
								value: newFilterValue,
								clientId: filter.clientId
							};
							return filter
						});
						_this2.setState(
						{
							isSaving: true
						});
						_context3.next = 6;
						return indexPattern.save();
					case 6:
						_this2.updateFilters();
						_this2.setState(
						{
							isSaving: false
						});
					case 8:
					case "end":
						return _context3.stop()
					}
				}, _callee3, _this2)
			})), function (_x2)
			{
				return _ref4.apply(this, arguments)
			});
			var _ref4
		}
	},
	5586: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _table = __webpack_require__(5587);
		Object.defineProperty(exports, "Table",
		{
			enumerable: true,
			get: function get()
			{
				return _table.Table
			}
		})
	},
	5587: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Table = exports.TableComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var TableComponent = exports.TableComponent = function (_Component)
		{
			_inherits(TableComponent, _Component);

			function TableComponent(props)
			{
				_classCallCheck(this, TableComponent);
				var _this = _possibleConstructorReturn(this, (TableComponent.__proto__ || Object.getPrototypeOf(TableComponent)).call(this, props));
				_this.startEditingFilter = function (id, value)
				{
					return _this.setState(
					{
						editingFilterId: id,
						editingFilterValue: value
					})
				};
				_this.stopEditingFilter = function ()
				{
					return _this.setState(
					{
						editingFilterId: null
					})
				};
				_this.onEditingFilterChange = function (e)
				{
					return _this.setState(
					{
						editingFilterValue: e.target.value
					})
				};
				_this.onEditFieldKeyDown = function (_ref)
				{
					var keyCode = _ref.keyCode;
					if (_eui.keyCodes.ENTER === keyCode)
					{
						_this.props.saveFilter(
						{
							filterId: _this.state.editingFilterId,
							newFilterValue: _this.state.editingFilterValue
						});
						_this.stopEditingFilter()
					}
					_eui.keyCodes.ESCAPE === keyCode && _this.stopEditingFilter()
				};
				_this.state = {
					editingFilterId: null,
					editingFilterValue: null
				};
				return _this
			}
			_createClass(TableComponent, [
			{
				key: "getColumns",
				value: function getColumns()
				{
					var _this2 = this;
					var _props = this.props,
						deleteFilter = _props.deleteFilter,
						fieldWildcardMatcher = _props.fieldWildcardMatcher,
						indexPattern = _props.indexPattern,
						saveFilter = _props.saveFilter,
						intl = _props.intl;
					return [
					{
						field: "value",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.source.table.filterHeader",
							defaultMessage: "Filter"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.source.table.filterDescription",
							defaultMessage: "Filter name"
						}),
						dataType: "string",
						sortable: true,
						render: function render(value, filter)
						{
							if (_this2.state.editingFilterId === filter.clientId) return _react2.default.createElement(_eui.EuiFieldText,
							{
								autoFocus: true,
								value: _this2.state.editingFilterValue,
								onChange: _this2.onEditingFilterChange,
								onKeyDown: _this2.onEditFieldKeyDown
							});
							return _react2.default.createElement("span", null, value)
						}
					},
					{
						field: "value",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.source.table.matchesHeader",
							defaultMessage: "Matches"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.source.table.matchesDescription",
							defaultMessage: "Language used for the field"
						}),
						dataType: "string",
						sortable: true,
						render: function render(value, filter)
						{
							var realtimeValue = _this2.state.editingFilterId === filter.clientId ? _this2.state.editingFilterValue : value;
							var matcher = fieldWildcardMatcher([realtimeValue]);
							var matches = indexPattern.getNonScriptedFields().map(function (f)
							{
								return f.name
							}).filter(matcher).sort();
							if (matches.length) return _react2.default.createElement("span", null, matches.join(", "));
							return _react2.default.createElement("em", null, _react2.default.createElement(_react3.FormattedMessage,
							{
								id: "kbn.management.editIndexPattern.source.table.notMatchedLabel",
								defaultMessage: "The source filter doesn't match any known fields."
							}))
						}
					},
					{
						name: "",
						align: _eui.RIGHT_ALIGNMENT,
						width: "100",
						render: function render(filter)
						{
							if (_this2.state.editingFilterId === filter.clientId) return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiButtonIcon,
							{
								size: "s",
								onClick: function onClick()
								{
									saveFilter(
									{
										filterId: _this2.state.editingFilterId,
										newFilterValue: _this2.state.editingFilterValue
									});
									_this2.stopEditingFilter()
								},
								iconType: "checkInCircleFilled",
								"aria-label": intl.formatMessage(
								{
									id: "kbn.management.editIndexPattern.source.table.saveAria",
									defaultMessage: "Save"
								})
							}), _react2.default.createElement(_eui.EuiButtonIcon,
							{
								size: "s",
								onClick: function onClick()
								{
									_this2.stopEditingFilter()
								},
								iconType: "cross",
								"aria-label": intl.formatMessage(
								{
									id: "kbn.management.editIndexPattern.source.table.cancelAria",
									defaultMessage: "Cancel"
								})
							}));
							return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement(_eui.EuiButtonIcon,
							{
								size: "s",
								color: "danger",
								onClick: function onClick()
								{
									return deleteFilter(filter)
								},
								iconType: "trash",
								"aria-label": intl.formatMessage(
								{
									id: "kbn.management.editIndexPattern.source.table.deleteAria",
									defaultMessage: "Delete"
								})
							}), _react2.default.createElement(_eui.EuiButtonIcon,
							{
								size: "s",
								onClick: function onClick()
								{
									return _this2.startEditingFilter(filter.clientId, filter.value)
								},
								iconType: "pencil",
								"aria-label": intl.formatMessage(
								{
									id: "kbn.management.editIndexPattern.source.table.editAria",
									defaultMessage: "Edit"
								})
							}))
						}
					}]
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _props2 = this.props,
						items = _props2.items,
						isSaving = _props2.isSaving;
					var columns = this.getColumns();
					var pagination = {
						initialPageSize: 10,
						pageSizeOptions: [5, 10, 25, 50]
					};
					return _react2.default.createElement(_eui.EuiInMemoryTable,
					{
						loading: isSaving,
						items: items,
						columns: columns,
						pagination: pagination,
						sorting: true
					})
				}
			}]);
			return TableComponent
		}(_react.Component);
		TableComponent.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			items: _propTypes2.default.array.isRequired,
			deleteFilter: _propTypes2.default.func.isRequired,
			fieldWildcardMatcher: _propTypes2.default.func.isRequired,
			saveFilter: _propTypes2.default.func.isRequired,
			isSaving: _propTypes2.default.bool.isRequired
		};
		exports.Table = (0, _react3.injectI18n)(TableComponent)
	},
	5588: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5589);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5589: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.Header = function Header()
		{
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "s"
			}, _react2.default.createElement("h3", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.sourceHeader",
				defaultMessage: "Source filters"
			}))), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.sourceLabel",
				defaultMessage: "Source filters can be used to exclude one or more fields when fetching the document source. This happens when viewing a document in the Discover app, or with a table displaying results from a saved search in the Dashboard app. Each row is built using the source of a single document, and if you have documents with large or unimportant fields you may benefit from filtering those out at this lower level."
			})), _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.source.noteLabel",
				defaultMessage: "Note that multi-fields will incorrectly appear as matches in the table below. These filters only actually apply to fields in the original source document, so matching multi-fields are not actually being filtered."
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "s"
			}))
		}
	},
	5590: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _add_filter = __webpack_require__(5591);
		Object.defineProperty(exports, "AddFilter",
		{
			enumerable: true,
			get: function get()
			{
				return _add_filter.AddFilter
			}
		})
	},
	5591: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.AddFilter = exports.AddFilterComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var AddFilterComponent = exports.AddFilterComponent = function (_Component)
		{
			_inherits(AddFilterComponent, _Component);

			function AddFilterComponent(props)
			{
				_classCallCheck(this, AddFilterComponent);
				var _this = _possibleConstructorReturn(this, (AddFilterComponent.__proto__ || Object.getPrototypeOf(AddFilterComponent)).call(this, props));
				_this.onAddFilter = function ()
				{
					_this.props.onAddFilter(_this.state.filter);
					_this.setState(
					{
						filter: ""
					})
				};
				_this.state = {
					filter: ""
				};
				return _this
			}
			_createClass(AddFilterComponent, [
			{
				key: "render",
				value: function render()
				{
					var _this2 = this;
					var filter = this.state.filter;
					var intl = this.props.intl;
					var placeholder = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.sourcePlaceholder",
						defaultMessage: "source filter, accepts wildcards (e.g., `user*` to filter fields starting with 'user')"
					});
					return _react2.default.createElement(_eui.EuiFlexGroup, null, _react2.default.createElement(_eui.EuiFlexItem,
					{
						grow: 10
					}, _react2.default.createElement(_eui.EuiFieldText,
					{
						fullWidth: true,
						value: filter,
						onChange: function onChange(e)
						{
							return _this2.setState(
							{
								filter: e.target.value.trim()
							})
						},
						placeholder: placeholder
					})), _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiButton,
					{
						isDisabled: 0 === filter.length,
						onClick: this.onAddFilter
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.editIndexPattern.source.addButtonLabel",
						defaultMessage: "Add"
					}))))
				}
			}]);
			return AddFilterComponent
		}(_react.Component);
		AddFilterComponent.propTypes = {
			onAddFilter: _propTypes2.default.func.isRequired
		};
		exports.AddFilter = (0, _react3.injectI18n)(AddFilterComponent)
	},
	5592: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _indexed_fields_table = __webpack_require__(5593);
		Object.defineProperty(exports, "IndexedFieldsTable",
		{
			enumerable: true,
			get: function get()
			{
				return _indexed_fields_table.IndexedFieldsTable
			}
		})
	},
	5593: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexedFieldsTable = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _reselect = __webpack_require__(637);
		var _table = __webpack_require__(5594);
		var _lib = __webpack_require__(5596);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var IndexedFieldsTable = exports.IndexedFieldsTable = function (_Component)
		{
			_inherits(IndexedFieldsTable, _Component);

			function IndexedFieldsTable(props)
			{
				_classCallCheck(this, IndexedFieldsTable);
				var _this = _possibleConstructorReturn(this, (IndexedFieldsTable.__proto__ || Object.getPrototypeOf(IndexedFieldsTable)).call(this, props));
				_initialiseProps.call(_this);
				_this.state = {
					fields: _this.mapFields(_this.props.fields)
				};
				return _this
			}
			_createClass(IndexedFieldsTable, [
			{
				key: "componentWillReceiveProps",
				value: function componentWillReceiveProps(nextProps)
				{
					nextProps.fields !== this.props.fields && this.setState(
					{
						fields: this.mapFields(nextProps.fields)
					})
				}
			},
			{
				key: "mapFields",
				value: function mapFields(fields)
				{
					var _props = this.props,
						indexPattern = _props.indexPattern,
						fieldWildcardMatcher = _props.fieldWildcardMatcher,
						helpers = _props.helpers;
					var sourceFilters = indexPattern.sourceFilters && indexPattern.sourceFilters.map(function (f)
					{
						return f.value
					});
					var fieldWildcardMatch = fieldWildcardMatcher(sourceFilters || []);
					return fields && fields.map(function (field)
					{
						return _extends(
						{}, field,
						{
							displayName: field.displayName,
							routes: field.routes,
							indexPattern: field.indexPattern,
							format: (0, _lib.getFieldFormat)(indexPattern, field.name),
							excluded: !!fieldWildcardMatch && fieldWildcardMatch(field.name),
							info: helpers.getFieldInfo && helpers.getFieldInfo(indexPattern, field.name)
						})
					}) || []
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _this2 = this;
					var indexPattern = this.props.indexPattern;
					var fields = this.getFilteredFields(this.state, this.props);
					return _react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement("div", null, _react2.default.createElement(_table.Table,
					{
						indexPattern: indexPattern,
						items: fields,
						editField: function editField(field)
						{
							return _this2.props.helpers.redirectToRoute(field, "edit")
						}
					})))
				}
			}]);
			return IndexedFieldsTable
		}(_react.Component);
		IndexedFieldsTable.propTypes = {
			fields: _propTypes2.default.array.isRequired,
			indexPattern: _propTypes2.default.object.isRequired,
			fieldFilter: _propTypes2.default.string,
			indexedFieldTypeFilter: _propTypes2.default.string,
			helpers: _propTypes2.default.shape(
			{
				redirectToRoute: _propTypes2.default.func.isRequired,
				getFieldInfo: _propTypes2.default.func
			}),
			fieldWildcardMatcher: _propTypes2.default.func.isRequired
		};
		var _initialiseProps = function _initialiseProps()
		{
			this.getFilteredFields = (0, _reselect.createSelector)(function (state)
			{
				return state.fields
			}, function (state, props)
			{
				return props.fieldFilter
			}, function (state, props)
			{
				return props.indexedFieldTypeFilter
			}, function (fields, fieldFilter, indexedFieldTypeFilter)
			{
				if (fieldFilter)
				{
					var normalizedFieldFilter = fieldFilter.toLowerCase();
					fields = fields.filter(function (field)
					{
						return field.name.toLowerCase().includes(normalizedFieldFilter)
					})
				}
				indexedFieldTypeFilter && (fields = fields.filter(function (field)
				{
					return field.type === indexedFieldTypeFilter
				}));
				return fields
			})
		}
	},
	5594: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _table = __webpack_require__(5595);
		Object.keys(_table).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _table[key]
				}
			})
		})
	},
	5595: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Table = exports.TableComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var TableComponent = exports.TableComponent = function (_PureComponent)
		{
			_inherits(TableComponent, _PureComponent);

			function TableComponent()
			{
				_classCallCheck(this, TableComponent);
				return _possibleConstructorReturn(this, (TableComponent.__proto__ || Object.getPrototypeOf(TableComponent)).apply(this, arguments))
			}
			_createClass(TableComponent, [
			{
				key: "renderBooleanTemplate",
				value: function renderBooleanTemplate(value, label)
				{
					return value ? _react2.default.createElement(_eui.EuiIcon,
					{
						type: "dot",
						color: "secondary",
						"aria-label": label
					}) : _react2.default.createElement("span", null)
				}
			},
			{
				key: "renderFieldName",
				value: function renderFieldName(name, field)
				{
					var indexPattern = this.props.indexPattern;
					var intl = this.props.intl;
					var infoLabel = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.fields.table.additionalInfoAriaLabel",
						defaultMessage: "Additional field information"
					});
					var timeLabel = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.fields.table.primaryTimeAriaLabel",
						defaultMessage: "Primary time field"
					});
					var timeContent = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.fields.table.primaryTimeTooltip",
						defaultMessage: "This field represents the time that events occurred."
					});
					return _react2.default.createElement("span", null, name, field.info && field.info.length ? _react2.default.createElement("span", null, " ", _react2.default.createElement(_eui.EuiIconTip,
					{
						type: "questionInCircle",
						color: "primary",
						"aria-label": infoLabel,
						content: field.info.map(function (info, i)
						{
							return _react2.default.createElement("div",
							{
								key: i
							}, info)
						})
					})) : null, indexPattern.timeFieldName === name ? _react2.default.createElement("span", null, " ", _react2.default.createElement(_eui.EuiIconTip,
					{
						type: "clock",
						color: "primary",
						"aria-label": timeLabel,
						content: timeContent
					})) : null)
				}
			},
			{
				key: "renderFieldType",
				value: function renderFieldType(type, isConflict)
				{
					var intl = this.props.intl;
					var label = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.fields.table.multiTypeAria",
						defaultMessage: "Multiple type field"
					});
					var content = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.fields.table.multiTypeTooltip",
						defaultMessage: "The type of this field changes across indices. It is unavailable for many analysis functions."
					});
					return _react2.default.createElement("span", null, type, isConflict ? _react2.default.createElement("span", null, " ", _react2.default.createElement(_eui.EuiIconTip,
					{
						type: "alert",
						color: "warning",
						"aria-label": label,
						content: content
					})) : "")
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _this2 = this;
					var _props = this.props,
						items = _props.items,
						editField = _props.editField,
						intl = _props.intl;
					var pagination = {
						initialPageSize: 10,
						pageSizeOptions: [5, 10, 25, 50]
					};
					var columns = [
					{
						field: "displayName",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.nameHeader",
							defaultMessage: "Name"
						}),
						dataType: "string",
						sortable: true,
						render: function render(value, field)
						{
							return _this2.renderFieldName(value, field)
						},
						width: "38%",
						"data-test-subj": "indexedFieldName"
					},
					{
						field: "type",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.typeHeader",
							defaultMessage: "Type"
						}),
						dataType: "string",
						sortable: true,
						render: function render(value)
						{
							return _this2.renderFieldType(value, "conflict" === value)
						},
						"data-test-subj": "indexedFieldType"
					},
					{
						field: "format",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.formatHeader",
							defaultMessage: "Format"
						}),
						dataType: "string",
						sortable: true
					},
					{
						field: "searchable",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.searchableHeader",
							defaultMessage: "Searchable"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.searchableDescription",
							defaultMessage: "These fields can be used in the filter bar"
						}),
						dataType: "boolean",
						sortable: true,
						render: function render(value)
						{
							return _this2.renderBooleanTemplate(value, intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.fields.table.isSearchableAria",
								defaultMessage: "Is searchable"
							}))
						}
					},
					{
						field: "aggregatable",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.aggregatableLabel",
							defaultMessage: "Aggregatable"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.aggregatableDescription",
							defaultMessage: "These fields can be used in visualization aggregations"
						}),
						dataType: "boolean",
						sortable: true,
						render: function render(value)
						{
							return _this2.renderBooleanTemplate(value, intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.fields.table.isAggregatableAria",
								defaultMessage: "Is aggregatable"
							}))
						}
					},
					{
						field: "excluded",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.excludedLabel",
							defaultMessage: "Excluded"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.fields.table.excludedDescription",
							defaultMessage: "Fields that are excluded from _source when it is fetched"
						}),
						dataType: "boolean",
						sortable: true,
						render: function render(value)
						{
							return _this2.renderBooleanTemplate(value, intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.fields.table.isExcludedAria",
								defaultMessage: "Is excluded"
							}))
						}
					},
					{
						name: "",
						actions: [
						{
							name: intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.fields.table.editLabel",
								defaultMessage: "Edit"
							}),
							description: intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.fields.table.editDescription",
								defaultMessage: "Edit"
							}),
							icon: "pencil",
							onClick: editField,
							type: "icon"
						}],
						width: "40px"
					}];
					return _react2.default.createElement(_eui.EuiInMemoryTable,
					{
						items: items,
						columns: columns,
						pagination: pagination,
						sorting: true
					})
				}
			}]);
			return TableComponent
		}(_react.PureComponent);
		TableComponent.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			items: _propTypes2.default.array.isRequired,
			editField: _propTypes2.default.func.isRequired
		};
		exports.Table = (0, _react3.injectI18n)(TableComponent)
	},
	5596: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _get_field_format = __webpack_require__(5597);
		Object.defineProperty(exports, "getFieldFormat",
		{
			enumerable: true,
			get: function get()
			{
				return _get_field_format.getFieldFormat
			}
		})
	},
	5597: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.getFieldFormat = getFieldFormat;
		var _lodash = __webpack_require__(1);

		function getFieldFormat(indexPattern, fieldName)
		{
			return indexPattern && fieldName ? (0, _lodash.get)(indexPattern, ["fieldFormatMap", fieldName, "type", "title"]) : ""
		}
	},
	5598: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _scripted_fields_table = __webpack_require__(5599);
		Object.defineProperty(exports, "ScriptedFieldsTable",
		{
			enumerable: true,
			get: function get()
			{
				return _scripted_fields_table.ScriptedFieldsTable
			}
		})
	},
	5599: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.ScriptedFieldsTable = exports.ScriptedFieldsTableComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _scripting_languages = __webpack_require__(1727);
		var _documentation_links = __webpack_require__(119);
		var _eui = __webpack_require__(3);
		var _components = __webpack_require__(5600);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var ScriptedFieldsTableComponent = exports.ScriptedFieldsTableComponent = function (_Component)
		{
			_inherits(ScriptedFieldsTableComponent, _Component);

			function ScriptedFieldsTableComponent(props)
			{
				var _this2 = this;
				_classCallCheck(this, ScriptedFieldsTableComponent);
				var _this = _possibleConstructorReturn(this, (ScriptedFieldsTableComponent.__proto__ || Object.getPrototypeOf(ScriptedFieldsTableComponent)).call(this, props));
				_this.fetchFields = _asyncToGenerator(regeneratorRuntime.mark(function _callee()
				{
					var fields, deprecatedLangsInUse, deprecatedLangs, supportedLangs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref2, lang;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_context.next = 2;
							return _this.props.indexPattern.getScriptedFields();
						case 2:
							fields = _context.sent;
							deprecatedLangsInUse = [];
							deprecatedLangs = (0, _scripting_languages.getDeprecatedScriptingLanguages)();
							supportedLangs = (0, _scripting_languages.getSupportedScriptingLanguages)();
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = void 0;
							_context.prev = 9;
							for (_iterator = fields[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)
							{
								_ref2 = _step.value;
								lang = _ref2.lang;
								!deprecatedLangs.includes(lang) && supportedLangs.includes(lang) || deprecatedLangsInUse.push(lang)
							}
							_context.next = 17;
							break;
						case 13:
							_context.prev = 13;
							_context.t0 = _context["catch"](9);
							_didIteratorError = true;
							_iteratorError = _context.t0;
						case 17:
							_context.prev = 17;
							_context.prev = 18;
							!_iteratorNormalCompletion && _iterator.return && _iterator.return();
						case 20:
							_context.prev = 20;
							if (!_didIteratorError)
							{
								_context.next = 23;
								break
							}
							throw _iteratorError;
						case 23:
							return _context.finish(20);
						case 24:
							return _context.finish(17);
						case 25:
							_this.setState(
							{
								fields: fields,
								deprecatedLangsInUse: deprecatedLangsInUse
							});
						case 26:
						case "end":
							return _context.stop()
						}
					}, _callee, _this2, [
						[9, 13, 17, 25],
						[18, , 20, 24]
					])
				}));
				_this.getFilteredItems = function ()
				{
					var fields = _this.state.fields;
					var _this$props = _this.props,
						fieldFilter = _this$props.fieldFilter,
						scriptedFieldLanguageFilter = _this$props.scriptedFieldLanguageFilter;
					var languageFilteredFields = fields;
					scriptedFieldLanguageFilter && (languageFilteredFields = fields.filter(function (field)
					{
						return field.lang === _this.props.scriptedFieldLanguageFilter
					}));
					var filteredFields = languageFilteredFields;
					if (fieldFilter)
					{
						var normalizedFieldFilter = _this.props.fieldFilter.toLowerCase();
						filteredFields = languageFilteredFields.filter(function (field)
						{
							return field.name.toLowerCase().includes(normalizedFieldFilter)
						})
					}
					return filteredFields
				};
				_this.startDeleteField = function (field)
				{
					_this.setState(
					{
						fieldToDelete: field,
						isDeleteConfirmationModalVisible: true
					})
				};
				_this.hideDeleteConfirmationModal = function ()
				{
					_this.setState(
					{
						fieldToDelete: void 0,
						isDeleteConfirmationModalVisible: false
					})
				};
				_this.deleteField = function ()
				{
					var _this$props2 = _this.props,
						indexPattern = _this$props2.indexPattern,
						onRemoveField = _this$props2.onRemoveField;
					var fieldToDelete = _this.state.fieldToDelete;
					indexPattern.removeScriptedField(fieldToDelete.name);
					onRemoveField && onRemoveField();
					_this.fetchFields();
					_this.hideDeleteConfirmationModal()
				};
				_this.state = {
					deprecatedLangsInUse: [],
					fieldToDelete: void 0,
					isDeleteConfirmationModalVisible: false,
					fields: []
				};
				return _this
			}
			_createClass(ScriptedFieldsTableComponent, [
			{
				key: "componentWillMount",
				value: function componentWillMount()
				{
					this.fetchFields()
				}
			},
			{
				key: "renderCallOuts",
				value: function renderCallOuts()
				{
					var deprecatedLangsInUse = this.state.deprecatedLangsInUse;
					return _react2.default.createElement(_components.CallOuts,
					{
						deprecatedLangsInUse: deprecatedLangsInUse,
						painlessDocLink: _documentation_links.documentationLinks.scriptedFields.painless
					})
				}
			},
			{
				key: "renderDeleteConfirmationModal",
				value: function renderDeleteConfirmationModal()
				{
					var fieldToDelete = this.state.fieldToDelete;
					if (!fieldToDelete) return null;
					var intl = this.props.intl;
					var title = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.scripted.deleteFieldLabel",
						defaultMessage: "Delete scripted field '{fieldName}'?"
					},
					{
						fieldName: fieldToDelete.name
					});
					var cancelButtonText = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.scripted.deleteField.cancelButton",
						defaultMessage: "Cancel"
					});
					var confirmButtonText = intl.formatMessage(
					{
						id: "kbn.management.editIndexPattern.scripted.deleteField.deleteButton",
						defaultMessage: "Delete"
					});
					return _react2.default.createElement(_eui.EuiOverlayMask, null, _react2.default.createElement(_eui.EuiConfirmModal,
					{
						title: title,
						onCancel: this.hideDeleteConfirmationModal,
						onConfirm: this.deleteField,
						cancelButtonText: cancelButtonText,
						confirmButtonText: confirmButtonText,
						defaultFocusedButton: _eui.EUI_MODAL_CONFIRM_BUTTON
					}))
				}
			},
			{
				key: "render",
				value: function render()
				{
					var _this3 = this;
					var _props = this.props,
						helpers = _props.helpers,
						indexPattern = _props.indexPattern;
					var items = this.getFilteredItems();
					return _react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement("div", null, _react2.default.createElement(_components.Header,
					{
						addScriptedFieldUrl: helpers.getRouteHref(indexPattern, "addField")
					}), this.renderCallOuts(), _react2.default.createElement(_eui.EuiSpacer,
					{
						size: "l"
					}), _react2.default.createElement(_components.Table,
					{
						indexPattern: indexPattern,
						items: items,
						editField: function editField(field)
						{
							return _this3.props.helpers.redirectToRoute(field, "edit")
						},
						deleteField: this.startDeleteField
					}), this.renderDeleteConfirmationModal()))
				}
			}]);
			return ScriptedFieldsTableComponent
		}(_react.Component);
		ScriptedFieldsTableComponent.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			fieldFilter: _propTypes2.default.string,
			scriptedFieldLanguageFilter: _propTypes2.default.string,
			helpers: _propTypes2.default.shape(
			{
				redirectToRoute: _propTypes2.default.func.isRequired,
				getRouteHref: _propTypes2.default.func.isRequired
			}),
			onRemoveField: _propTypes2.default.func
		};
		exports.ScriptedFieldsTable = (0, _react3.injectI18n)(ScriptedFieldsTableComponent)
	},
	5600: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _table = __webpack_require__(5601);
		Object.defineProperty(exports, "Table",
		{
			enumerable: true,
			get: function get()
			{
				return _table.Table
			}
		});
		var _header = __webpack_require__(5603);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		});
		var _call_outs = __webpack_require__(5605);
		Object.defineProperty(exports, "CallOuts",
		{
			enumerable: true,
			get: function get()
			{
				return _call_outs.CallOuts
			}
		})
	},
	5601: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _table = __webpack_require__(5602);
		Object.defineProperty(exports, "Table",
		{
			enumerable: true,
			get: function get()
			{
				return _table.Table
			}
		})
	},
	5602: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Table = exports.TableComponent = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var TableComponent = exports.TableComponent = function (_PureComponent)
		{
			_inherits(TableComponent, _PureComponent);

			function TableComponent()
			{
				var _ref;
				var _temp, _this, _ret;
				_classCallCheck(this, TableComponent);
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
				return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableComponent.__proto__ || Object.getPrototypeOf(TableComponent)).call.apply(_ref, [this].concat(args))), _this), _this.renderFormatCell = function (value)
				{
					var indexPattern = _this.props.indexPattern;
					var title = indexPattern.fieldFormatMap[value] && indexPattern.fieldFormatMap[value].type ? indexPattern.fieldFormatMap[value].type.title : "";
					return _react2.default.createElement("span", null, title)
				}, _temp), _possibleConstructorReturn(_this, _ret)
			}
			_createClass(TableComponent, [
			{
				key: "render",
				value: function render()
				{
					var _props = this.props,
						items = _props.items,
						editField = _props.editField,
						deleteField = _props.deleteField,
						intl = _props.intl;
					var columns = [
					{
						field: "displayName",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.nameHeader",
							defaultMessage: "Name"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.nameDescription",
							defaultMessage: "Name of the field"
						}),
						dataType: "string",
						sortable: true,
						width: "38%"
					},
					{
						field: "lang",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.langHeader",
							defaultMessage: "Lang"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.langDescription",
							defaultMessage: "Language used for the field"
						}),
						dataType: "string",
						sortable: true,
						"data-test-subj": "scriptedFieldLang"
					},
					{
						field: "script",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.scriptHeader",
							defaultMessage: "Script"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.scriptDescription",
							defaultMessage: "Script for the field"
						}),
						dataType: "string",
						sortable: true
					},
					{
						field: "name",
						name: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.formatHeader",
							defaultMessage: "Format"
						}),
						description: intl.formatMessage(
						{
							id: "kbn.management.editIndexPattern.scripted.table.formatDescription",
							defaultMessage: "Format used for the field"
						}),
						render: this.renderFormatCell,
						sortable: false
					},
					{
						name: "",
						actions: [
						{
							name: intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.scripted.table.editHeader",
								defaultMessage: "Edit"
							}),
							description: intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.scripted.table.editDescription",
								defaultMessage: "Edit this field"
							}),
							icon: "pencil",
							onClick: editField
						},
						{
							name: intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.scripted.table.deleteHeader",
								defaultMessage: "Delete"
							}),
							description: intl.formatMessage(
							{
								id: "kbn.management.editIndexPattern.scripted.table.deleteDescription",
								defaultMessage: "Delete this field"
							}),
							icon: "trash",
							color: "danger",
							onClick: deleteField
						}],
						width: "40px"
					}];
					var pagination = {
						initialPageSize: 10,
						pageSizeOptions: [5, 10, 25, 50]
					};
					return _react2.default.createElement(_eui.EuiInMemoryTable,
					{
						items: items,
						columns: columns,
						pagination: pagination,
						sorting: true
					})
				}
			}]);
			return TableComponent
		}(_react.PureComponent);
		TableComponent.propTypes = {
			indexPattern: _propTypes2.default.object.isRequired,
			items: _propTypes2.default.array.isRequired,
			editField: _propTypes2.default.func.isRequired,
			deleteField: _propTypes2.default.func.isRequired
		};
		exports.Table = (0, _react3.injectI18n)(TableComponent)
	},
	5603: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5604);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5604: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var Header = exports.Header = function Header(_ref)
		{
			var addScriptedFieldUrl = _ref.addScriptedFieldUrl;
			return _react2.default.createElement(_eui.EuiFlexGroup,
			{
				alignItems: "center"
			}, _react2.default.createElement(_eui.EuiFlexItem, null, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "s"
			}, _react2.default.createElement("h3", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.scriptedHeader",
				defaultMessage: "Scripted fields"
			}))), _react2.default.createElement(_eui.EuiText, null, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.scriptedLabel",
				defaultMessage: "You can use scripted fields in visualizations and display them in your documents. However, you cannot search scripted fields."
			})))), _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiButton,
			{
				"data-test-subj": "addScriptedFieldLink",
				href: addScriptedFieldUrl
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.scripted.addFieldButton",
				defaultMessage: "Add scripted field"
			}))))
		};
		Header.propTypes = {
			addScriptedFieldUrl: _propTypes2.default.string.isRequired
		}
	},
	5605: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _call_outs = __webpack_require__(5606);
		Object.defineProperty(exports, "CallOuts",
		{
			enumerable: true,
			get: function get()
			{
				return _call_outs.CallOuts
			}
		})
	},
	5606: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.CallOuts = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _eui = __webpack_require__(3);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.CallOuts = function CallOuts(_ref)
		{
			var deprecatedLangsInUse = _ref.deprecatedLangsInUse,
				painlessDocLink = _ref.painlessDocLink;
			if (!deprecatedLangsInUse.length) return null;
			return _react2.default.createElement("div", null, _react2.default.createElement(_eui.EuiCallOut,
			{
				title: _react2.default.createElement(_react3.FormattedMessage,
				{
					id: "kbn.management.editIndexPattern.scripted.deprecationLangHeader",
					defaultMessage: "Deprecation languages in use"
				}),
				color: "danger",
				iconType: "cross"
			}, _react2.default.createElement("p", null, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.editIndexPattern.scripted.deprecationLangLabel.deprecationLangDetail",
				defaultMessage: "The following deprecated languages are in use: {deprecatedLangsInUse}. Support for these languages will be removed in the next major version of Kibana and Elasticsearch. Convert you scripted fields to {link} to avoid any problems.",
				values:
				{
					deprecatedLangsInUse: deprecatedLangsInUse.join(", "),
					link: _react2.default.createElement(_eui.EuiLink,
					{
						href: painlessDocLink
					}, _react2.default.createElement(_react3.FormattedMessage,
					{
						id: "kbn.management.editIndexPattern.scripted.deprecationLangLabel.painlessDescription",
						defaultMessage: "Painless"
					}))
				}
			}))), _react2.default.createElement(_eui.EuiSpacer,
			{
				size: "m"
			}))
		}
	},
	5607: function (module, exports)
	{
		module.exports = '<div class="euiPage">\n  <div class="col-md-2 sidebar-container" role="region" aria-label="{{::\'kbn.management.editIndexPatternAria\' | i18n: { defaultMessage: \'Index patterns\' } }}">\n    <div class="sidebar-list">\n      <div id="indexPatternListReact" role="region" aria-label="{{\'kbn.management.editIndexPatternLiveRegionAriaLabel\' | i18n: { defaultMessage: \'Index patterns\' } }}"></div>\n    </div>\n  </div>\n\n  <div class="col-md-10">\n    <div class="euiPanel euiPanel--paddingLarge">\n      <div ng-transclude></div>\n    </div>\n  </div>\n</div>\n'
	},
	5608: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _index_pattern_list = __webpack_require__(5609);
		Object.defineProperty(exports, "IndexPatternList",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_list.IndexPatternList
			}
		})
	},
	5609: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternList = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _header = __webpack_require__(5610);
		var _list = __webpack_require__(5614);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.IndexPatternList = function IndexPatternList(_ref)
		{
			var indexPatternCreationOptions = _ref.indexPatternCreationOptions,
				defaultIndex = _ref.defaultIndex,
				indexPatterns = _ref.indexPatterns;
			return _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("div",
			{
				className: "indexPatternList__headerWrapper",
				"data-test-subj": "createIndexPatternParent"
			}, _react2.default.createElement(_header.Header,
			{
				indexPatternCreationOptions: indexPatternCreationOptions
			})), _react2.default.createElement(_list.List,
			{
				indexPatterns: indexPatterns,
				defaultIndex: defaultIndex
			}))
		}
	},
	5610: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _header = __webpack_require__(5611);
		Object.defineProperty(exports, "Header",
		{
			enumerable: true,
			get: function get()
			{
				return _header.Header
			}
		})
	},
	5611: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Header = void 0;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _create_button = __webpack_require__(5612);
		var _react3 = __webpack_require__(8);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		exports.Header = function Header(_ref)
		{
			var indexPatternCreationOptions = _ref.indexPatternCreationOptions;
			return _react2.default.createElement(_react3.I18nProvider, null, _react2.default.createElement(_create_button.CreateButton,
			{
				options: indexPatternCreationOptions
			}, _react2.default.createElement(_react3.FormattedMessage,
			{
				id: "kbn.management.indexPatternList.header.createIndexPatternButtonLabel",
				defaultMessage: "Create index pattern"
			})))
		}
	},
	5612: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _create_button = __webpack_require__(5613);
		Object.defineProperty(exports, "CreateButton",
		{
			enumerable: true,
			get: function get()
			{
				return _create_button.CreateButton
			}
		})
	},
	5613: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.CreateButton = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui_theme_k6_light = __webpack_require__(922);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var CreateButton = exports.CreateButton = function (_Component)
		{
			_inherits(CreateButton, _Component);

			function CreateButton(props)
			{
				_classCallCheck(this, CreateButton);
				var _this = _possibleConstructorReturn(this, (CreateButton.__proto__ || Object.getPrototypeOf(CreateButton)).call(this, props));
				_this.togglePopover = function ()
				{
					_this.setState(
					{
						isPopoverOpen: !_this.state.isPopoverOpen
					})
				};
				_this.closePopover = function ()
				{
					_this.setState(
					{
						isPopoverOpen: false
					})
				};
				_this.renderBetaBadge = function ()
				{
					var color = (0, _eui.rgbToHex)(_eui_theme_k6_light.euiColorAccent);
					return _react2.default.createElement(_eui.EuiBadge,
					{
						color: color
					}, "Beta")
				};
				_this.state = {
					isPopoverOpen: false
				};
				return _this
			}
			_createClass(CreateButton, [
			{
				key: "render",
				value: function render()
				{
					var _this2 = this;
					var _props = this.props,
						options = _props.options,
						children = _props.children;
					var isPopoverOpen = this.state.isPopoverOpen;
					if (!options || !options.length) return null;
					if (1 === options.length) return _react2.default.createElement(_eui.EuiButton,
					{
						"data-test-subj": "createIndexPatternButton",
						fill: true,
						size: "s",
						onClick: options[0].onClick
					}, children);
					var button = _react2.default.createElement(_eui.EuiButton,
					{
						"data-test-subj": "createIndexPatternButton",
						fill: true,
						size: "s",
						iconType: "arrowDown",
						iconSide: "right",
						onClick: this.togglePopover
					}, children);
					if (options.length > 1) return _react2.default.createElement(_eui.EuiPopover,
					{
						id: "singlePanel",
						button: button,
						isOpen: isPopoverOpen,
						closePopover: this.closePopover,
						panelPaddingSize: "none",
						anchorPosition: "downLeft"
					}, _react2.default.createElement(_eui.EuiContextMenuPanel,
					{
						items: options.map(function (option)
						{
							return _react2.default.createElement(_eui.EuiContextMenuItem,
							{
								key: option.text,
								onClick: option.onClick,
								"data-test-subj": option.testSubj
							}, _react2.default.createElement(_eui.EuiDescriptionList,
							{
								style:
								{
									whiteSpace: "nowrap"
								}
							}, _react2.default.createElement(_eui.EuiDescriptionListTitle, null, option.text, option.isBeta ? _react2.default.createElement(_react.Fragment, null, " ", _this2.renderBetaBadge()) : null), _react2.default.createElement(_eui.EuiDescriptionListDescription, null, option.description)))
						})
					}))
				}
			}]);
			return CreateButton
		}(_react.Component);
		CreateButton.propTypes = {
			options: _propTypes2.default.arrayOf(_propTypes2.default.shape(
			{
				text: _propTypes2.default.string.isRequired,
				description: _propTypes2.default.string,
				onClick: _propTypes2.default.func.isRequired
			}))
		}
	},
	5614: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _list = __webpack_require__(5615);
		Object.defineProperty(exports, "List",
		{
			enumerable: true,
			get: function get()
			{
				return _list.List
			}
		})
	},
	5615: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.List = void 0;
		var _createClass = function ()
		{
			function defineProperties(target, props)
			{
				for (var i = 0; i < props.length; i++)
				{
					var descriptor = props[i];
					descriptor.enumerable = descriptor.enumerable || false;
					descriptor.configurable = true;
					"value" in descriptor && (descriptor.writable = true);
					Object.defineProperty(target, descriptor.key, descriptor)
				}
			}
			return function (Constructor, protoProps, staticProps)
			{
				protoProps && defineProperties(Constructor.prototype, protoProps);
				staticProps && defineProperties(Constructor, staticProps);
				return Constructor
			}
		}();
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _react3 = __webpack_require__(8);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _classCallCheck(instance, Constructor)
		{
			if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
		}

		function _possibleConstructorReturn(self, call)
		{
			if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !call || "object" !== typeof call && "function" !== typeof call ? self : call
		}

		function _inherits(subClass, superClass)
		{
			if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
			subClass.prototype = Object.create(superClass && superClass.prototype,
			{
				constructor:
				{
					value: subClass,
					enumerable: false,
					writable: true,
					configurable: true
				}
			});
			superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass)
		}
		var ListUi = function (_Component)
		{
			_inherits(ListUi, _Component);

			function ListUi()
			{
				_classCallCheck(this, ListUi);
				return _possibleConstructorReturn(this, (ListUi.__proto__ || Object.getPrototypeOf(ListUi)).apply(this, arguments))
			}
			_createClass(ListUi, [
			{
				key: "renderList",
				value: function renderList()
				{
					var _props = this.props,
						indexPatterns = _props.indexPatterns,
						intl = _props.intl;
					if (indexPatterns && indexPatterns.length) return _react2.default.createElement("div", null, indexPatterns.map(function (pattern)
					{
						var id = pattern.id,
							isDefault = pattern.default,
							active = pattern.active,
							url = pattern.url,
							title = pattern.title,
							tag = pattern.tag;
						var icon = void 0;
						isDefault && (icon = _react2.default.createElement(_react.Fragment, null, _react2.default.createElement("em",
						{
							"aria-label": intl.formatMessage(
							{
								id: "kbn.management.indexPatternList.defaultIndexPatternIconAriaLabel",
								defaultMessage: "Default index pattern"
							}),
							className: "fa fa-star"
						}), " "));
						var titleElement = void 0;
						titleElement = active ? _react2.default.createElement("strong", null, title) : title;
						var tagElement = void 0;
						if (tag)
						{
							var key = tag.key,
								color = tag.color,
								name = tag.name;
							tagElement = _react2.default.createElement(_react.Fragment,
							{
								key: key
							}, " ", _react2.default.createElement(_eui.EuiBadge,
							{
								color: color || "primary"
							}, name))
						}
						return _react2.default.createElement("div",
						{
							key: id
						}, _react2.default.createElement(_eui.EuiButtonEmpty,
						{
							size: "xs",
							href: url,
							"data-test-subj": "indexPatternLink"
						}, icon, titleElement, tagElement), _react2.default.createElement(_eui.EuiSpacer,
						{
							size: "xs"
						}))
					}));
					return null
				}
			},
			{
				key: "renderNoDefaultMessage",
				value: function renderNoDefaultMessage()
				{
					var defaultIndex = this.props.defaultIndex;
					return defaultIndex ? null : _react2.default.createElement("div",
					{
						className: "indexPatternList__headerWrapper"
					}, _react2.default.createElement(_eui.EuiCallOut,
					{
						color: "warning",
						size: "s",
						iconType: "alert",
						title: _react2.default.createElement(_react3.FormattedMessage,
						{
							id: "kbn.management.indexPatternList.noDefaultIndexPatternTitle",
							defaultMessage: "No default index pattern. You must select or create one to continue."
						})
					}))
				}
			},
			{
				key: "render",
				value: function render()
				{
					return _react2.default.createElement("div", null, this.renderNoDefaultMessage(), this.renderList())
				}
			}]);
			return ListUi
		}(_react.Component);
		ListUi.propTypes = {
			indexPatterns: _propTypes2.default.array,
			defaultIndex: _propTypes2.default.string
		};
		exports.List = (0, _react3.injectI18n)(ListUi)
	},
	5616: function (module, exports)
	{
		module.exports = '<div class="app-container">\n  <!-- Local nav. -->\n  <kbn-top-nav name="management-subnav" data-test-subj="managementNav">\n    <!-- Transcluded elements. -->\n    <div data-transclude-slots>\n      <!-- Breadcrumbs. -->\n      <bread-crumbs\n        data-transclude-slot="topLeftCorner"\n        omit-current-page="true"\n        use-links="true"\n        omit-pages="omitPages"\n        page-title="pageTitle"\n      ></bread-crumbs>\n\n      <!-- Tabs. -->\n      <div data-transclude-slot="bottomRow" class="kuiLocalTabs" role="tablist" ng-show="!sectionName || section.visibleItems.length > 0">\n        <h2 class="kuiLocalTab" ng-if="!sectionName" id="tabHeader" tabindex="0" role="tab">\n          {{::section.display}}\n        </h2>\n        <a\n          role="tab"\n          ng-if="sectionName"\n          ng-repeat="item in section.visibleItems"\n          class="kuiLocalTab"\n          ng-class="{ \'kuiLocalTab-isSelected\': item.active, \'kuiLocalTab-isDisabled\': !item.active && (item.disabled || !item.url) }"\n          kbn-href="{{::item.disabled ? \'\' : item.url}}"\n          data-test-subj="{{::item.name}}"\n          tooltip="{{::item.tooltip}}"\n          tooltip-placement="bottom"\n          tooltip-popup-delay="400"\n          tooltip-append-to-body="1"\n          aria-selected="{{!!item.active}}"\n          aria-disabled="{{!!item.disabled}}"\n        >\n          {{::item.display}}\n        </a>\n      </div>\n    </div>\n  </kbn-top-nav>\n\n  <main class="management-container" ng-transclude></main>\n</div>\n'
	},
	5617: function (module, exports)
	{
		module.exports = '<kbn-management-app>\n  <kbn-management-landing>\n    <!-- General info -->\n    <div class="page-row">\n      <div class="page-row-text">Version: {{::kbnVersion}}</div>\n    </div>\n\n    <!-- Management sections for the ES stack -->\n    <div\n      ng-if="section.visibleItems.length > 0"\n      ng-repeat="section in sections"\n      class="page-row"\n    >\n      <div class="kuiPanel mgtPanel" role="group">\n        <div class="kuiPanelHeader">\n          <div class="kuiPanelHeaderSection">\n            <icon type="\'{{::section.icon}}\'" size="\'l\'"></icon>\n            <h3 class="kuiPanelHeader__title">\n              {{::section.display}}\n            </h3>\n          </div>\n        </div>\n\n        <div class="kuiPanelBody">\n          <div class="row">\n            <ul class="list-unstyled">\n              <li\n                class="col-xs-4 col-md-3"\n                ng-repeat="item in section.visibleItems"\n              >\n                <a\n                  data-test-subj="{{::item.id}}"\n                  class="euiLink euiLink--primary mgtPanel__link"\n                  ng-class="{ \'mgtPanel__link--disabled\': item.disabled || !item.url }"\n                  kbn-href="{{::item.disabled ? \'\' : item.url}}"\n                  tooltip="{{::item.tooltip}}"\n                  tooltip-placement="bottom"\n                  tooltip-popup-delay="400"\n                  tooltip-append-to-body="1"\n                >\n                  {{::item.display}}\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </kbn-management-landing>\n</kbn-management-app>\n'
	},
	5618: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.default = function (opts)
		{
			opts = opts ||
			{};
			var whenMissingRedirectTo = opts.whenMissingRedirectTo || null;
			_routes2.default.addSetupWork(function loadDefaultIndexPattern(Private, Promise, $route, config)
			{
				var getIds = Private(_get.IndexPatternsGetProvider)("id");
				var route = _lodash2.default.get($route, "current.$$route");
				return getIds().then(function (patterns)
				{
					var defaultId = config.get("defaultIndex");
					var defined = !!defaultId;
					var exists = _lodash2.default.contains(patterns, defaultId);
					if (defined && !exists)
					{
						config.remove("defaultIndex");
						defaultId = defined = false
					}
					if (!defined && route.requireDefaultIndex)
					{
						if (1 !== patterns.length) throw new _errors.NoDefaultIndexPattern;
						defaultId = patterns[0];
						config.set("defaultIndex", defaultId)
					}
				})
			}).afterWork(null, function (err, kbnUrl)
			{
				var hasDefault = !(err instanceof _errors.NoDefaultIndexPattern);
				if (hasDefault || !whenMissingRedirectTo) throw err;
				kbnUrl.change(whenMissingRedirectTo);
				displayBanner()
			})
		};
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _notify = __webpack_require__(10);
		var _errors = __webpack_require__(51);
		var _get = __webpack_require__(835);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _eui = __webpack_require__(3);
		var _timers = __webpack_require__(572);
		var _i18n = __webpack_require__(12);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var bannerId = void 0;
		var timeoutId = void 0;

		function displayBanner()
		{
			(0, _timers.clearTimeout)(timeoutId);
			bannerId = _notify.banners.set(
			{
				id: bannerId,
				component: _react2.default.createElement(_eui.EuiCallOut,
				{
					color: "warning",
					iconType: "iInCircle",
					title: _i18n.i18n.translate("common.ui.indexPattern.bannerLabel",
					{
						defaultMessage: "In order to visualize and explore data in Kibana, you'll need to create an index pattern to retrieve data from Elasticsearch."
					})
				})
			});
			timeoutId = setTimeout(function ()
			{
				_notify.banners.remove(bannerId);
				timeoutId = void 0
			}, 15e3)
		}
		module.exports = exports["default"]
	},
	5619: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5620)
	},
	5620: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(10);
		__webpack_require__(95);
		__webpack_require__(884);
		__webpack_require__(151);
		var _index = __webpack_require__(5621);
		var _index2 = _interopRequireDefault(_index);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _modules = __webpack_require__(2);
		var _timefilter = __webpack_require__(27);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var app = _modules.uiModules.get("apps/doc", ["kibana/notify", "kibana/courier", "kibana/index_patterns"]);
		var resolveIndexPattern = {
			indexPattern: function indexPattern(indexPatterns, savedSearches, $route)
			{
				return indexPatterns.get($route.current.params.indexPattern)
			}
		};
		_routes2.default.when("/doc/:indexPattern/:index/:type/:id",
		{
			template: _index2.default,
			resolve: resolveIndexPattern
		}).when("/doc/:indexPattern/:index/:type",
		{
			template: _index2.default,
			resolve: resolveIndexPattern
		});
		app.controller("doc", function ($scope, $route, es)
		{
			_timefilter.timefilter.disableAutoRefreshSelector();
			_timefilter.timefilter.disableTimeRangeSelector();
			$scope.indexPattern = $route.current.locals.indexPattern;
			var computedFields = $scope.indexPattern.getComputedFields();
			es.search(
			{
				index: $route.current.params.index,
				body:
				{
					query:
					{
						ids:
						{
							type: $route.current.params.type,
							values: [$route.current.params.id]
						}
					},
					stored_fields: computedFields.storedFields,
					_source: true,
					script_fields: computedFields.scriptFields,
					docvalue_fields: computedFields.docvalueFields
				}
			}).then(function (resp)
			{
				if (resp.hits)
					if (resp.hits.total < 1) $scope.status = "notFound";
					else
					{
						$scope.status = "found";
						$scope.hit = resp.hits.hits[0]
					}
			}).catch(function (err)
			{
				if (404 === err.status) $scope.status = "notFound";
				else
				{
					$scope.status = "error";
					$scope.resp = err
				}
			})
		})
	},
	5621: function (module, exports)
	{
		module.exports = '<div ng-controller="doc" class="app-container">\n  <div class="kuiLocalNav">\n    <div class="kuiLocalNavRow">\n      <div class="kuiLocalNavRow__section">\n        <div class="kuiLocalTitle">\n          Single Document\n        </div>\n      </div>\n    </div>\n    <div class="kuiLocalNavRow kuiLocalNavRow--secondary">\n      <div class="kuiLocalTabs">\n        <div\n          class="kuiLocalTab kuiLocalTab-isSelected"\n          ng-bind-template="{{ hit._type }}#{{ hit._id | uriescape }}"\n          ng-if="!!hit"\n        ></div>\n        <div\n          class="kuiLocalTab kuiLocalTab-isSelected"\n          ng-if="!hit"\n        >Unknown Id</div>\n      </div>\n    </div>\n  </div>\n\n  <div class="kuiViewContent">\n    <!-- no results -->\n    <div class="kuiViewContentItem" ng-if="status === \'notFound\'">\n      <div class="kuiInfoPanel kuiInfoPanel--error kuiVerticalRhythm">\n        <div class="kuiInfoPanelHeader">\n          <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--error fa-warning"></span>\n          <span class="kuiInfoPanelHeader__title">\n            Failed to locate document\n          </span>\n        </div>\n        <div class="kuiInfoPanelBody">\n          <div class="kuiInfoPanelBody__message">\n            Unfortunately I could not find any documents matching that id, of that type, in that index. I tried really hard. I wanted it to be there. Sometimes I swear documents grow legs and just walk out of the index. Sneaky. I wish I could offer some advice here, something to make you feel better\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- error -->\n    <div class="kuiViewContentItem" ng-if="status === \'error\'">\n      <div class="kuiInfoPanel kuiInfoPanel--error kuiVerticalRhythm">\n        <div class="kuiInfoPanelHeader">\n          <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--error fa-warning"></span>\n          <span class="kuiInfoPanelHeader__title">\n            Failed to execute query\n          </span>\n        </div>\n        <div class="kuiInfoPanelBody">\n          <div class="kuiInfoPanelBody__message">\n            Oh no. Something went very wrong. Its not just that I couldn\'t find your document, I couldn\'t even try. The index was missing, or the type. Go check out Elasticsearch, something isn\'t quite right here.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- loading -->\n    <div class="kuiViewContentItem" ng-if="status === undefined">\n      <div class="kuiPanel kuiPanel--centered">\n        <div class="kuiTableInfo">\n          Loading&hellip;\n        </div>\n      </div>\n    </div>\n\n    <!-- result -->\n    <div class="kuiViewContentItem" ng-if="status === \'found\'">\n      <doc-viewer hit="hit" index-pattern="indexPattern"></doc-viewer>\n    </div>\n  </div>\n</div>\n'
	},
	5622: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		var _dev_tools = __webpack_require__(802);
		var _feature_catalogue = __webpack_require__(79);
		__webpack_require__(5623);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_routes2.default.when("/dev_tools",
		{
			resolve:
			{
				redirect: function redirect(Private, kbnUrl)
				{
					var items = Private(_dev_tools.DevToolsRegistryProvider).inOrder;
					kbnUrl.redirect(items[0].url.substring(1))
				}
			}
		});
		_feature_catalogue.FeatureCatalogueRegistryProvider.register(function ()
		{
			return {
				id: "console",
				title: "Console",
				description: "Skip cURL and use this JSON interface to work with your data directly.",
				icon: "consoleApp",
				path: "/app/kibana#/dev_tools/console",
				showOnHomePage: true,
				category: _feature_catalogue.FeatureCatalogueCategory.ADMIN
			}
		})
	},
	5623: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _modules = __webpack_require__(2);
		var _dev_tools = __webpack_require__(802);
		var _dev_tools_app = __webpack_require__(5624);
		var _dev_tools_app2 = _interopRequireDefault(_dev_tools_app);
		__webpack_require__(898);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_modules.uiModules.get("apps/dev_tools").directive("kbnDevToolsApp", function (Private, $location)
		{
			var devToolsRegistry = Private(_dev_tools.DevToolsRegistryProvider);
			return {
				restrict: "E",
				replace: true,
				template: _dev_tools_app2.default,
				transclude: true,
				scope:
				{
					topNavConfig: "="
				},
				bindToController: true,
				controllerAs: "kbnDevToolsApp",
				controller: function controller()
				{
					this.devTools = devToolsRegistry.inOrder;
					this.currentPath = "#" + $location.path();
					this.onClick = function (item, $event)
					{
						item.disabled && $event.preventDefault()
					}
				}
			}
		})
	},
	5624: function (module, exports)
	{
		module.exports = '<div class="devApp app-container">\n  <kbn-top-nav name="devtools" config="kbnDevToolsApp.topNavConfig">\n    <!-- Transcluded elements. -->\n    <div data-transclude-slots>\n      <!-- Breadcrumbs. -->\n      <bread-crumbs\n        data-transclude-slot="topLeftCorner"\n        omit-current-page="true"\n      ></bread-crumbs>\n\n      <!-- Tabs. -->\n      <div data-transclude-slot="bottomRow" class="euiTabs" role="tablist">\n        <a\n          role="tab"\n          aria-selected="{{kbnDevToolsApp.currentPath === item.url}}"\n          ng-repeat="item in kbnDevToolsApp.devTools"\n          class="euiTab"\n          ng-class="{\'euiTab-isSelected\': kbnDevToolsApp.currentPath === item.url, \'euiTab-isDisabled\': item.disabled}"\n          ng-disabled="item.disabled"\n          kbn-href="{{::item.url}}"\n          ng-click="kbnDevToolsApp.onClick(item, $event)"\n          tooltip="{{ item.tooltipContent }}"\n          tooltip-placement="bottom"\n          tooltip-popup-delay="0"\n          tooltip-append-to-body="1"\n        >\n          {{::item.display}}\n        </a>\n      </div>\n    </div>\n  </kbn-top-nav>\n  <main class="devApp__container" role="tabpanel" ng-transclude></main>\n</div>\n'
	},
	5625: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _query_filter = __webpack_require__(117);
		var _routes = __webpack_require__(19);
		var _routes2 = _interopRequireDefault(_routes);
		__webpack_require__(5626);
		var _index = __webpack_require__(5639);
		var _index2 = _interopRequireDefault(_index);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		_routes2.default.when("/context/:indexPatternId/:type/:id*",
		{
			controller: ContextAppRouteController,
			controllerAs: "contextAppRoute",
			resolve:
			{
				indexPattern: function indexPattern($route, indexPatterns)
				{
					return indexPatterns.get($route.current.params.indexPatternId)
				}
			},
			template: _index2.default
		});

		function ContextAppRouteController($routeParams, $scope, AppState, chrome, config, indexPattern, Private)
		{
			var _this = this;
			var queryFilter = Private(_query_filter.FilterBarQueryFilterProvider);
			this.state = new AppState(createDefaultAppState(config, indexPattern));
			this.state.save(true);
			$scope.$watchGroup(["contextAppRoute.state.columns", "contextAppRoute.state.predecessorCount", "contextAppRoute.state.successorCount"], function ()
			{
				return _this.state.save(true)
			});
			$scope.$listen(queryFilter, "update", function ()
			{
				_this.filters = _lodash2.default.cloneDeep(queryFilter.getFilters())
			});
			this.anchorType = $routeParams.type;
			this.anchorId = $routeParams.id;
			this.indexPattern = indexPattern;
			this.discoverUrl = chrome.getNavLinkById("kibana:discover").lastSubUrl;
			this.filters = _lodash2.default.cloneDeep(queryFilter.getFilters())
		}

		function createDefaultAppState(config, indexPattern)
		{
			return {
				columns: ["_source"],
				filters: [],
				predecessorCount: parseInt(config.get("context:defaultSize"), 10),
				sort: [indexPattern.timeFieldName, "desc"],
				successorCount: parseInt(config.get("context:defaultSize"), 10)
			}
		}
	},
	5626: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _compat = __webpack_require__(96);
		var _modules = __webpack_require__(2);
		var _app = __webpack_require__(5627);
		var _app2 = _interopRequireDefault(_app);
		__webpack_require__(5628);
		__webpack_require__(5631);
		var _sorting = __webpack_require__(1728);
		var _query_parameters = __webpack_require__(1729);
		var _query = __webpack_require__(5634);
		var _timefilter = __webpack_require__(27);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}
		var _module = _modules.uiModules.get("apps/context", ["elasticsearch", "kibana", "kibana/config", "kibana/notify", "ngRoute"]);
		_module.directive("contextApp", function ContextApp()
		{
			return {
				bindToController: true,
				controller: (0, _compat.callAfterBindingsWorkaround)(ContextAppController),
				controllerAs: "contextApp",
				restrict: "E",
				scope:
				{
					anchorType: "=",
					anchorId: "=",
					columns: "=",
					indexPattern: "=",
					filters: "=",
					predecessorCount: "=",
					successorCount: "=",
					sort: "=",
					discoverUrl: "="
				},
				template: _app2.default
			}
		});

		function ContextAppController($scope, config, Private)
		{
			var _this = this;
			var queryParameterActions = Private(_query_parameters.QueryParameterActionsProvider);
			var queryActions = Private(_query.QueryActionsProvider);
			_timefilter.timefilter.disableAutoRefreshSelector();
			_timefilter.timefilter.disableTimeRangeSelector();
			this.state = createInitialState(parseInt(config.get("context:step"), 10), (0, _sorting.getFirstSortableField)(this.indexPattern, config.get("context:tieBreakerFields")), this.discoverUrl);
			this.actions = _lodash2.default.mapValues(_extends(
			{}, queryParameterActions, queryActions), function (action)
			{
				return function ()
				{
					return action(_this.state).apply(void 0, arguments)
				}
			});
			this.constants = {
				FAILURE_REASONS: _query.FAILURE_REASONS,
				LOADING_STATUS: _query.LOADING_STATUS
			};
			$scope.$watchGroup([function ()
			{
				return _this.state.rows.predecessors
			}, function ()
			{
				return _this.state.rows.anchor
			}, function ()
			{
				return _this.state.rows.successors
			}], function (newValues)
			{
				var _actions;
				return (_actions = _this.actions).setAllRows.apply(_actions, _toConsumableArray(newValues))
			});
			$scope.$watchCollection(function ()
			{
				return _extends(
				{}, _lodash2.default.pick(_this, _query_parameters.QUERY_PARAMETER_KEYS),
				{
					indexPatternId: _this.indexPattern.id
				})
			}, function (newQueryParameters)
			{
				var queryParameters = _this.state.queryParameters;
				newQueryParameters.indexPatternId === queryParameters.indexPatternId && newQueryParameters.anchorType === queryParameters.anchorType && newQueryParameters.anchorId === queryParameters.anchorId && _lodash2.default.isEqual(newQueryParameters.sort, queryParameters.sort) ? newQueryParameters.predecessorCount === queryParameters.predecessorCount && newQueryParameters.successorCount === queryParameters.successorCount && _lodash2.default.isEqual(newQueryParameters.filters, queryParameters.filters) || _this.actions.fetchContextRowsWithNewQueryParameters(_lodash2.default.cloneDeep(newQueryParameters)) : _this.actions.fetchAllRowsWithNewQueryParameters(_lodash2.default.cloneDeep(newQueryParameters))
			});
			$scope.$watchCollection(function ()
			{
				return {
					predecessorCount: _this.state.queryParameters.predecessorCount,
					successorCount: _this.state.queryParameters.successorCount
				}
			}, function (newParameters)
			{
				_lodash2.default.assign(_this, newParameters)
			})
		}

		function createInitialState(defaultStepSize, tieBreakerField, discoverUrl)
		{
			return {
				queryParameters: (0, _query_parameters.createInitialQueryParametersState)(defaultStepSize, tieBreakerField),
				rows:
				{
					all: [],
					anchor: null,
					predecessors: [],
					successors: []
				},
				loadingStatus: (0, _query.createInitialLoadingStatusState)(),
				navigation:
				{
					discover:
					{
						url: discoverUrl
					}
				}
			}
		}
	},
	5627: function (module, exports)
	{
		module.exports = '<div class="kuiLocalNav">\n  <div class="kuiLocalNavRow">\n    <div class="kuiLocalNavRow__section">\n      <div class="kuiLocalTitle" role="heading" aria-level="1">\n        Surrounding Documents in {{ contextApp.state.queryParameters.indexPatternId }}\n      </div>\n    </div>\n  </div>\n  <div class="kuiLocalNavRow kuiLocalNavRow--secondary">\n    <div class="kuiLocalTabs">\n      <div class="kuiLocalTab kuiLocalTab-isSelected" >\n        {{ contextApp.state.queryParameters.anchorType }}#{{ contextApp.state.queryParameters.anchorId }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<filter-bar index-patterns="[contextApp.indexPattern]"></filter-bar>\n\n<!-- Error feedback -->\n<div\n  class="kuiViewContent kuiViewContentItem"\n  ng-if="contextApp.state.loadingStatus.anchor.status === contextApp.constants.LOADING_STATUS.FAILED"\n>\n  <div class="kuiInfoPanel kuiInfoPanel--error kuiVerticalRhythm">\n    <div class="kuiInfoPanelHeader">\n      <span class="kuiInfoPanelHeader__icon kuiIcon kuiIcon--error fa-warning"></span>\n      <span class="kuiInfoPanelHeader__title">\n        Failed to load the anchor document\n      </span>\n    </div>\n\n    <div class="kuiInfoPanelBody">\n      <div\n        class="kuiInfoPanelBody__message"\n        ng-if="contextApp.state.loadingStatus.anchor.reason === contextApp.constants.FAILURE_REASONS.INVALID_TIEBREAKER"\n      >\n        No searchable tiebreaker field could be found in the index pattern\n        {{ contextApp.state.queryParameters.indexPatternId}}.\n\n        Please change the advanced setting\n        <code>context:tieBreakerFields</code> to include a valid field for this\n        index pattern.\n      </div>\n      <div\n        class="kuiInfoPanelBody__message"\n        ng-if="contextApp.state.loadingStatus.anchor.reason === contextApp.constants.FAILURE_REASONS.UNKNOWN"\n      >\n        Please reload or visit\n        <a ng-href="{{ contextApp.state.navigation.discover.url }}">Discover</a>\n        to select a valid anchor document.\n      </div>\n    </div>\n  </div>\n</div>\n\n<main\n  class="kuiViewContent kuiViewContentItem"\n  ng-if="contextApp.state.loadingStatus.anchor.status !== contextApp.constants.LOADING_STATUS.FAILED"\n>\n  <!-- Controls -->\n  <div class="kuiBar kuiVerticalRhythm">\n    <div class="kuiBarSection">\n      <context-loading-button\n        data-test-subj="predecessorLoadMoreButton"\n        is-disabled="![\n          contextApp.constants.LOADING_STATUS.LOADED,\n          contextApp.constants.LOADING_STATUS.FAILED,\n        ].includes(contextApp.state.loadingStatus.predecessors.status)"\n        icon="\'fa-chevron-up\'"\n        ng-click="contextApp.actions.fetchMorePredecessorRows()"\n      >\n        Load {{ contextApp.state.queryParameters.defaultStepSize }} more\n      </context-loading-button>\n      <context-size-picker\n        count="contextApp.state.queryParameters.predecessorCount"\n        data-test-subj="predecessorCountPicker"\n        is-disabled="contextApp.state.loadingStatus.anchor.status !== contextApp.constants.LOADING_STATUS.LOADED"\n        on-change-count="contextApp.actions.fetchGivenPredecessorRows"\n      ></context-size-picker>\n      <span>newer documents</span>\n      <span\n        class="kuiStatusText kuiStatusText--warning"\n        ng-if="(contextApp.state.loadingStatus.predecessors.status === contextApp.constants.LOADING_STATUS.LOADED)\n          && (contextApp.state.queryParameters.predecessorCount > contextApp.state.rows.predecessors.length)"\n      >\n        <span class="kuiStatusText__icon kuiIcon fa-bolt"></span>\n        <span ng-bind-template="Only {{ contextApp.state.rows.predecessors.length }} documents newer than the anchor could be found."></span>\n      </span>\n    </div>\n\n    <div class="kuiBarSection">\n    </div>\n  </div>\n\n  <!-- Loading feedback -->\n  <div\n    ng-if="[\n      contextApp.constants.LOADING_STATUS.UNINITIALIZED,\n      contextApp.constants.LOADING_STATUS.LOADING,\n    ].includes(contextApp.state.loadingStatus.anchor.status)"\n    class="kuiPanel kuiPanel--centered kuiVerticalRhythm"\n  >\n    <div class="kuiTableInfo">\n      Loading&hellip;\n    </div>\n  </div>\n\n  <!-- Table -->\n  <div\n    ng-if="contextApp.state.loadingStatus.anchor.status === contextApp.constants.LOADING_STATUS.LOADED"\n    class="kuiPanel kuiVerticalRhythm"\n  >\n    <div class="discover-table" fixed-scroll>\n      <doc-table\n        filter="contextApp.actions.addFilter"\n        hits="contextApp.state.rows.all"\n        index-pattern="contextApp.indexPattern"\n        sorting="contextApp.state.queryParameters.sort"\n        columns="contextApp.state.queryParameters.columns"\n        infinite-scroll="true"\n        minimum-visible-rows="contextApp.state.rows.all.length"\n      ></doc-table>\n    </div>\n  </div>\n\n  <!-- Controls -->\n  <div class="kuiBar kuiVerticalRhythm">\n    <div class="kuiBarSection">\n      <context-loading-button\n        data-test-subj="successorLoadMoreButton"\n        is-disabled="![\n          contextApp.constants.LOADING_STATUS.LOADED,\n          contextApp.constants.LOADING_STATUS.FAILED,\n        ].includes(contextApp.state.loadingStatus.successors.status)"\n        icon="\'fa-chevron-down\'"\n        ng-click="contextApp.actions.fetchMoreSuccessorRows()"\n      >\n        Load {{ contextApp.state.queryParameters.defaultStepSize }} more\n      </context-loading-button>\n      <context-size-picker\n        count="contextApp.state.queryParameters.successorCount"\n        data-test-subj="successorCountPicker"\n        is-disabled="contextApp.state.loadingStatus.anchor.status !== contextApp.constants.LOADING_STATUS.LOADED"\n        on-change-count="contextApp.actions.fetchGivenSuccessorRows"\n      ></context-size-picker>\n      <div>older documents</div>\n      <span\n        class="kuiStatusText kuiStatusText--warning"\n        ng-if="(contextApp.state.loadingStatus.successors.status === contextApp.constants.LOADING_STATUS.LOADED)\n          && (contextApp.state.queryParameters.successorCount > contextApp.state.rows.successors.length)"\n      >\n        <span class="kuiStatusText__icon kuiIcon fa-bolt"></span>\n        <span ng-bind-template="Only {{ contextApp.state.rows.successors.length }} documents older than the anchor could be found."></span>\n      </span>\n    </div>\n\n    <div class="kuiBarSection">\n    </div>\n  </div>\n</main>\n'
	},
	5628: function (module, exports, __webpack_require__)
	{
		"use strict";
		__webpack_require__(5629)
	},
	5629: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _modules = __webpack_require__(2);
		var _loading_button = __webpack_require__(5630);
		var _loading_button2 = _interopRequireDefault(_loading_button);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var _module = _modules.uiModules.get("apps/context", ["kibana", "ngRoute"]);
		_module.directive("contextLoadingButton", function ContextLoadingButton()
		{
			return {
				replace: true,
				restrict: "E",
				scope:
				{
					isDisabled: "=",
					icon: "="
				},
				template: _loading_button2.default,
				transclude: true
			}
		})
	},
	5630: function (module, exports)
	{
		module.exports = '<button\n  class="kuiButton kuiButton--basic kuiButton--iconText"\n  ng-disabled="isDisabled"\n>\n  <span class="kuiButton__inner">\n    <span\n      class="kuiButton__icon kuiIcon fa-spinner fa-spin"\n      ng-class="isDisabled ? [\'fa-spinner\', \'fa-spin\'] : [icon]"\n    />\n    <span ng-transclude />\n  </span>\n</button>\n'
	},
	5631: function (module, exports, __webpack_require__)
	{
		"use strict";
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _modules = __webpack_require__(2);
		var _compat = __webpack_require__(96);
		var _size_picker = __webpack_require__(5632);
		var _size_picker2 = _interopRequireDefault(_size_picker);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var _module = _modules.uiModules.get("apps/context", ["kibana"]);
		_module.directive("contextSizePicker", function ContextSizePicker()
		{
			return {
				bindToController: true,
				controller: (0, _compat.callAfterBindingsWorkaround)(ContextSizePickerController),
				controllerAs: "contextSizePicker",
				link: linkContextSizePicker,
				replace: true,
				restrict: "E",
				require: "ngModel",
				scope:
				{
					count: "=",
					isDisabled: "=",
					onChangeCount: "="
				},
				template: _size_picker2.default
			}
		});

		function linkContextSizePicker(scope, element, attrs, ngModel)
		{
			scope.countModel = ngModel
		}

		function ContextSizePickerController($scope)
		{
			var _this = this;
			$scope.$watch(function ()
			{
				return _this.count
			}, function ()
			{
				return $scope.countModel.$rollbackViewValue()
			});
			this.getOrSetCount = function (count)
			{
				return _lodash2.default.isUndefined(count) ? _this.count : _this.onChangeCount(count)
			}
		}
	},
	5632: function (module, exports)
	{
		module.exports = '<input\n  class="kuiTextInput cxtSizePicker"\n  ng-disabled="contextSizePicker.isDisabled"\n  ng-model-options="{updateOn: \'change\', getterSetter: true, debounce: 200}"\n  ng-model="contextSizePicker.getOrSetCount"\n  type="number"\n>\n'
	},
	5633: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.QueryParameterActionsProvider = QueryParameterActionsProvider;
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _filter_manager = __webpack_require__(468);
		var _constants = __webpack_require__(1730);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function QueryParameterActionsProvider(indexPatterns, Private)
		{
			var _this = this;
			var filterManager = Private(_filter_manager.FilterManagerProvider);
			var setPredecessorCount = function setPredecessorCount(state)
			{
				return function (predecessorCount)
				{
					return state.queryParameters.predecessorCount = clamp(_constants.MIN_CONTEXT_SIZE, _constants.MAX_CONTEXT_SIZE, predecessorCount)
				}
			};
			var increasePredecessorCount = function increasePredecessorCount(state)
			{
				return function ()
				{
					var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : state.queryParameters.defaultStepSize;
					return setPredecessorCount(state)(state.queryParameters.predecessorCount + value)
				}
			};
			var setSuccessorCount = function setSuccessorCount(state)
			{
				return function (successorCount)
				{
					return state.queryParameters.successorCount = clamp(_constants.MIN_CONTEXT_SIZE, _constants.MAX_CONTEXT_SIZE, successorCount)
				}
			};
			var increaseSuccessorCount = function increaseSuccessorCount(state)
			{
				return function ()
				{
					var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : state.queryParameters.defaultStepSize;
					return setSuccessorCount(state)(state.queryParameters.successorCount + value)
				}
			};
			var setQueryParameters = function setQueryParameters(state)
			{
				return function (queryParameters)
				{
					return Object.assign(state.queryParameters, _lodash2.default.pick(queryParameters, _constants.QUERY_PARAMETER_KEYS))
				}
			};
			var addFilter = function addFilter(state)
			{
				return _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(field, values, operation)
					{
						var indexPatternId, indexPattern;
						return regeneratorRuntime.wrap(function _callee$(_context)
						{
							while (1) switch (_context.prev = _context.next)
							{
							case 0:
								indexPatternId = state.queryParameters.indexPatternId;
								filterManager.add(field, values, operation, indexPatternId);
								_context.next = 4;
								return indexPatterns.get(indexPatternId);
							case 4:
								indexPattern = _context.sent;
								indexPattern.popularizeField(field.name, 1);
							case 6:
							case "end":
								return _context.stop()
							}
						}, _callee, _this)
					})),
					function (_x3, _x4, _x5)
					{
						return _ref.apply(this, arguments)
					};
				var _ref
			};
			return {
				addFilter: addFilter,
				increasePredecessorCount: increasePredecessorCount,
				increaseSuccessorCount: increaseSuccessorCount,
				setPredecessorCount: setPredecessorCount,
				setQueryParameters: setQueryParameters,
				setSuccessorCount: setSuccessorCount
			}
		}

		function clamp(minimum, maximum, value)
		{
			return Math.max(Math.min(maximum, value), minimum)
		}
	},
	5634: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _actions = __webpack_require__(5635);
		Object.defineProperty(exports, "QueryActionsProvider",
		{
			enumerable: true,
			get: function get()
			{
				return _actions.QueryActionsProvider
			}
		});
		var _constants = __webpack_require__(964);
		Object.defineProperty(exports, "FAILURE_REASONS",
		{
			enumerable: true,
			get: function get()
			{
				return _constants.FAILURE_REASONS
			}
		});
		Object.defineProperty(exports, "LOADING_STATUS",
		{
			enumerable: true,
			get: function get()
			{
				return _constants.LOADING_STATUS
			}
		});
		var _state = __webpack_require__(5638);
		Object.defineProperty(exports, "createInitialLoadingStatusState",
		{
			enumerable: true,
			get: function get()
			{
				return _state.createInitialLoadingStatusState
			}
		})
	},
	5635: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		exports.QueryActionsProvider = QueryActionsProvider;
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _markdown = __webpack_require__(437);
		var _notify = __webpack_require__(10);
		var _anchor = __webpack_require__(5636);
		var _context = __webpack_require__(5637);
		var _query_parameters = __webpack_require__(1729);
		var _constants = __webpack_require__(964);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function QueryActionsProvider(courier, Private, Promise)
		{
			var fetchAnchor = Private(_anchor.fetchAnchorProvider);
			var _Private = Private(_context.fetchContextProvider),
				fetchPredecessors = _Private.fetchPredecessors,
				fetchSuccessors = _Private.fetchSuccessors;
			var _Private2 = Private(_query_parameters.QueryParameterActionsProvider),
				increasePredecessorCount = _Private2.increasePredecessorCount,
				increaseSuccessorCount = _Private2.increaseSuccessorCount,
				setPredecessorCount = _Private2.setPredecessorCount,
				setQueryParameters = _Private2.setQueryParameters,
				setSuccessorCount = _Private2.setSuccessorCount;
			var setFailedStatus = function setFailedStatus(state)
			{
				return function (subject)
				{
					var details = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] :
					{};
					return state.loadingStatus[subject] = _extends(
					{
						status: _constants.LOADING_STATUS.FAILED,
						reason: _constants.FAILURE_REASONS.UNKNOWN
					}, details)
				}
			};
			var setLoadedStatus = function setLoadedStatus(state)
			{
				return function (subject)
				{
					return state.loadingStatus[subject] = {
						status: _constants.LOADING_STATUS.LOADED
					}
				}
			};
			var setLoadingStatus = function setLoadingStatus(state)
			{
				return function (subject)
				{
					return state.loadingStatus[subject] = {
						status: _constants.LOADING_STATUS.LOADING
					}
				}
			};
			var fetchAnchorRow = function fetchAnchorRow(state)
			{
				return function ()
				{
					var _state$queryParameter = state.queryParameters,
						indexPatternId = _state$queryParameter.indexPatternId,
						anchorType = _state$queryParameter.anchorType,
						anchorId = _state$queryParameter.anchorId,
						sort = _state$queryParameter.sort,
						tieBreakerField = _state$queryParameter.tieBreakerField;
					if (!tieBreakerField) return Promise.reject(setFailedStatus(state)("anchor",
					{
						reason: _constants.FAILURE_REASONS.INVALID_TIEBREAKER
					}));
					setLoadingStatus(state)("anchor");
					return Promise.try(function ()
					{
						return fetchAnchor(indexPatternId, anchorType, anchorId, [_lodash2.default.zipObject([sort]), _defineProperty(
						{}, tieBreakerField, "asc")])
					}).then(function (anchorDocument)
					{
						setLoadedStatus(state)("anchor");
						state.rows.anchor = anchorDocument;
						return anchorDocument
					}, function (error)
					{
						setFailedStatus(state)("anchor",
						{
							error: error
						});
						_notify.toastNotifications.addDanger(
						{
							title: "Unable to load the anchor document",
							text: _react2.default.createElement(_markdown.MarkdownSimple, null, error.message)
						});
						throw error
					})
				}
			};
			var fetchPredecessorRows = function fetchPredecessorRows(state)
			{
				return function ()
				{
					var _state$queryParameter2 = state.queryParameters,
						indexPatternId = _state$queryParameter2.indexPatternId,
						filters = _state$queryParameter2.filters,
						predecessorCount = _state$queryParameter2.predecessorCount,
						sort = _state$queryParameter2.sort,
						tieBreakerField = _state$queryParameter2.tieBreakerField,
						anchor = state.rows.anchor;
					if (!tieBreakerField) return Promise.reject(setFailedStatus(state)("predecessors",
					{
						reason: _constants.FAILURE_REASONS.INVALID_TIEBREAKER
					}));
					setLoadingStatus(state)("predecessors");
					return Promise.try(function ()
					{
						return fetchPredecessors(indexPatternId, sort[0], sort[1], anchor.sort[0], tieBreakerField, "asc", anchor.sort[1], predecessorCount, filters)
					}).then(function (predecessorDocuments)
					{
						setLoadedStatus(state)("predecessors");
						state.rows.predecessors = predecessorDocuments;
						return predecessorDocuments
					}, function (error)
					{
						setFailedStatus(state)("predecessors",
						{
							error: error
						});
						_notify.toastNotifications.addDanger(
						{
							title: "Unable to load documents",
							text: _react2.default.createElement(_markdown.MarkdownSimple, null, error.message)
						});
						throw error
					})
				}
			};
			var fetchSuccessorRows = function fetchSuccessorRows(state)
			{
				return function ()
				{
					var _state$queryParameter3 = state.queryParameters,
						indexPatternId = _state$queryParameter3.indexPatternId,
						filters = _state$queryParameter3.filters,
						sort = _state$queryParameter3.sort,
						successorCount = _state$queryParameter3.successorCount,
						tieBreakerField = _state$queryParameter3.tieBreakerField,
						anchor = state.rows.anchor;
					if (!tieBreakerField) return Promise.reject(setFailedStatus(state)("successors",
					{
						reason: _constants.FAILURE_REASONS.INVALID_TIEBREAKER
					}));
					setLoadingStatus(state)("successors");
					return Promise.try(function ()
					{
						return fetchSuccessors(indexPatternId, sort[0], sort[1], anchor.sort[0], tieBreakerField, "asc", anchor.sort[1], successorCount, filters)
					}).then(function (successorDocuments)
					{
						setLoadedStatus(state)("successors");
						state.rows.successors = successorDocuments;
						return successorDocuments
					}, function (error)
					{
						setFailedStatus(state)("successors",
						{
							error: error
						});
						_notify.toastNotifications.addDanger(
						{
							title: "Unable to load documents",
							text: _react2.default.createElement(_markdown.MarkdownSimple, null, error.message)
						});
						throw error
					})
				}
			};
			var fetchContextRows = function fetchContextRows(state)
			{
				return function ()
				{
					return Promise.all([fetchPredecessorRows(state)(), fetchSuccessorRows(state)()])
				}
			};
			var fetchAllRows = function fetchAllRows(state)
			{
				return function ()
				{
					return Promise.try(fetchAnchorRow(state)).then(fetchContextRows(state))
				}
			};
			var fetchContextRowsWithNewQueryParameters = function fetchContextRowsWithNewQueryParameters(state)
			{
				return function (queryParameters)
				{
					setQueryParameters(state)(queryParameters);
					return fetchContextRows(state)()
				}
			};
			var fetchAllRowsWithNewQueryParameters = function fetchAllRowsWithNewQueryParameters(state)
			{
				return function (queryParameters)
				{
					setQueryParameters(state)(queryParameters);
					return fetchAllRows(state)()
				}
			};
			var fetchGivenPredecessorRows = function fetchGivenPredecessorRows(state)
			{
				return function (count)
				{
					setPredecessorCount(state)(count);
					return fetchPredecessorRows(state)()
				}
			};
			var fetchGivenSuccessorRows = function fetchGivenSuccessorRows(state)
			{
				return function (count)
				{
					setSuccessorCount(state)(count);
					return fetchSuccessorRows(state)()
				}
			};
			var fetchMorePredecessorRows = function fetchMorePredecessorRows(state)
			{
				return function ()
				{
					increasePredecessorCount(state)();
					return fetchPredecessorRows(state)()
				}
			};
			var fetchMoreSuccessorRows = function fetchMoreSuccessorRows(state)
			{
				return function ()
				{
					increaseSuccessorCount(state)();
					return fetchSuccessorRows(state)()
				}
			};
			var setAllRows = function setAllRows(state)
			{
				return function (predecessorRows, anchorRow, successorRows)
				{
					return state.rows.all = [].concat(_toConsumableArray(predecessorRows || []), _toConsumableArray(anchorRow ? [anchorRow] : []), _toConsumableArray(successorRows || []))
				}
			};
			return {
				fetchAllRows: fetchAllRows,
				fetchAllRowsWithNewQueryParameters: fetchAllRowsWithNewQueryParameters,
				fetchAnchorRow: fetchAnchorRow,
				fetchContextRows: fetchContextRows,
				fetchContextRowsWithNewQueryParameters: fetchContextRowsWithNewQueryParameters,
				fetchGivenPredecessorRows: fetchGivenPredecessorRows,
				fetchGivenSuccessorRows: fetchGivenSuccessorRows,
				fetchMorePredecessorRows: fetchMorePredecessorRows,
				fetchMoreSuccessorRows: fetchMoreSuccessorRows,
				fetchPredecessorRows: fetchPredecessorRows,
				fetchSuccessorRows: fetchSuccessorRows,
				setAllRows: setAllRows
			}
		}
	},
	5636: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		exports.fetchAnchorProvider = fetchAnchorProvider;
		var _lodash = __webpack_require__(1);
		var _lodash2 = _interopRequireDefault(_lodash);
		var _courier = __webpack_require__(95);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}

		function fetchAnchorProvider(indexPatterns, Private)
		{
			var SearchSource = Private(_courier.SearchSourceProvider);
			return function ()
			{
				var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(indexPatternId, anchorType, anchorId, sort)
				{
					var indexPattern, searchSource, response;
					return regeneratorRuntime.wrap(function _callee$(_context)
					{
						while (1) switch (_context.prev = _context.next)
						{
						case 0:
							_context.next = 2;
							return indexPatterns.get(indexPatternId);
						case 2:
							indexPattern = _context.sent;
							searchSource = (new SearchSource).setParent(false).setField("index", indexPattern).setField("version", true).setField("size", 1).setField("query",
							{
								query:
								{
									constant_score:
									{
										filter:
										{
											ids:
											{
												type: anchorType,
												values: [anchorId]
											}
										}
									}
								},
								language: "lucene"
							}).setField("sort", sort);
							_context.next = 6;
							return searchSource.fetch();
						case 6:
							response = _context.sent;
							if (!(_lodash2.default.get(response, ["hits", "total"], 0) < 1))
							{
								_context.next = 9;
								break
							}
							throw new Error("Failed to load anchor document.");
						case 9:
							return _context.abrupt("return", _extends(
							{}, _lodash2.default.get(response, ["hits", "hits", 0]),
							{
								$$_isAnchor: true
							}));
						case 10:
						case "end":
							return _context.stop()
						}
					}, _callee, this)
				}));

				function fetchAnchor(_x, _x2, _x3, _x4)
				{
					return _ref.apply(this, arguments)
				}
				return fetchAnchor
			}()
		}
	},
	5637: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.fetchContextProvider = void 0;
		var _extends = Object.assign || function (target)
		{
			for (var i = 1; i < arguments.length; i++)
			{
				var source = arguments[i];
				for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
			}
			return target
		};
		var _slicedToArray = function ()
		{
			function sliceIterator(arr, i)
			{
				var _arr = [];
				var _n = true;
				var _d = false;
				var _e = void 0;
				try
				{
					for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done); _n = true)
					{
						_arr.push(_s.value);
						if (i && _arr.length === i) break
					}
				}
				catch (err)
				{
					_d = true;
					_e = err
				}
				finally
				{
					try
					{
						!_n && _i["return"] && _i["return"]()
					}
					finally
					{
						if (_d) throw _e
					}
				}
				return _arr
			}
			return function (arr, i)
			{
				if (Array.isArray(arr)) return arr;
				if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}();
		var _courier = __webpack_require__(95);
		var _sorting = __webpack_require__(1728);
		var _marked = regeneratorRuntime.mark(asPairs);

		function _defineProperty(obj, key, value)
		{
			key in obj ? Object.defineProperty(obj, key,
			{
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			}) : obj[key] = value;
			return obj
		}

		function _toConsumableArray(arr)
		{
			if (Array.isArray(arr))
			{
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
				return arr2
			}
			return Array.from(arr)
		}

		function _asyncToGenerator(fn)
		{
			return function ()
			{
				var gen = fn.apply(this, arguments);
				return new Promise(function (resolve, reject)
				{
					function step(key, arg)
					{
						try
						{
							var info = gen[key](arg);
							var value = info.value
						}
						catch (error)
						{
							reject(error);
							return
						}
						if (!info.done) return Promise.resolve(value).then(function (value)
						{
							step("next", value)
						}, function (err)
						{
							step("throw", err)
						});
						resolve(value)
					}
					return step("next")
				})
			}
		}
		var DAY_MILLIS = 864e5;
		var LOOKUP_OFFSETS = [0, 1, 7, 30, 365, 1e4].map(function (days)
		{
			return days * DAY_MILLIS
		});

		function fetchContextProvider(indexPatterns, Private)
		{
			var fetchSuccessors = (_ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(indexPatternId, timeField, timeSortDirection, timeValue, tieBreakerField, tieBreakerSortDirection, tieBreakerValue, size, filters)
			{
				var searchSource, offsetSign, intervals, successors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _ref2, _ref3, startTimeValue, endTimeValue, remainingSize, _ref4, _ref5, afterTimeValue, afterTieBreakerValue, hits;
				return regeneratorRuntime.wrap(function _callee$(_context)
				{
					while (1) switch (_context.prev = _context.next)
					{
					case 0:
						_context.next = 2;
						return createSearchSource(indexPatternId, filters);
					case 2:
						searchSource = _context.sent;
						offsetSign = "asc" === timeSortDirection ? 1 : -1;
						intervals = asPairs([].concat(_toConsumableArray(LOOKUP_OFFSETS.map(function (offset)
						{
							return timeValue + offset * offsetSign
						})), [null]));
						successors = [];
						_iteratorNormalCompletion = true;
						_didIteratorError = false;
						_iteratorError = void 0;
						_context.prev = 9;
						_iterator = intervals[Symbol.iterator]();
					case 11:
						if (_iteratorNormalCompletion = (_step = _iterator.next()).done)
						{
							_context.next = 27;
							break
						}
						_ref2 = _step.value;
						_ref3 = _slicedToArray(_ref2, 2);
						startTimeValue = _ref3[0];
						endTimeValue = _ref3[1];
						remainingSize = size - successors.length;
						if (!(remainingSize <= 0))
						{
							_context.next = 19;
							break
						}
						return _context.abrupt("break", 27);
					case 19:
						_ref4 = successors.length > 0 ? successors[successors.length - 1].sort : [timeValue, tieBreakerValue], _ref5 = _slicedToArray(_ref4, 2), afterTimeValue = _ref5[0], afterTieBreakerValue = _ref5[1];
						_context.next = 22;
						return fetchHitsInInterval(searchSource, timeField, timeSortDirection, startTimeValue, endTimeValue, afterTimeValue, tieBreakerField, tieBreakerSortDirection, afterTieBreakerValue, remainingSize);
					case 22:
						hits = _context.sent;
						successors = [].concat(_toConsumableArray(successors), _toConsumableArray(hits));
					case 24:
						_iteratorNormalCompletion = true;
						_context.next = 11;
						break;
					case 27:
						_context.next = 33;
						break;
					case 29:
						_context.prev = 29;
						_context.t0 = _context["catch"](9);
						_didIteratorError = true;
						_iteratorError = _context.t0;
					case 33:
						_context.prev = 33;
						_context.prev = 34;
						!_iteratorNormalCompletion && _iterator.return && _iterator.return();
					case 36:
						_context.prev = 36;
						if (!_didIteratorError)
						{
							_context.next = 39;
							break
						}
						throw _iteratorError;
					case 39:
						return _context.finish(36);
					case 40:
						return _context.finish(33);
					case 41:
						return _context.abrupt("return", successors);
					case 42:
					case "end":
						return _context.stop()
					}
				}, _callee, this, [
					[9, 29, 33, 41],
					[34, , 36, 40]
				])
			})), function fetchSuccessors(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9)
			{
				return _ref.apply(this, arguments)
			});
			var _ref;
			var fetchPredecessors = (_ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(indexPatternId, timeField, timeSortDirection, timeValue, tieBreakerField, tieBreakerSortDirection, tieBreakerValue, size, filters)
			{
				var searchSource, offsetSign, intervals, predecessors, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, _ref7, _ref8, startTimeValue, endTimeValue, remainingSize, _ref9, _ref10, afterTimeValue, afterTieBreakerValue, hits;
				return regeneratorRuntime.wrap(function _callee2$(_context2)
				{
					while (1) switch (_context2.prev = _context2.next)
					{
					case 0:
						_context2.next = 2;
						return createSearchSource(indexPatternId, filters);
					case 2:
						searchSource = _context2.sent;
						offsetSign = "desc" === timeSortDirection ? 1 : -1;
						intervals = asPairs([].concat(_toConsumableArray(LOOKUP_OFFSETS.map(function (offset)
						{
							return timeValue + offset * offsetSign
						})), [null]));
						predecessors = [];
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = void 0;
						_context2.prev = 9;
						_iterator2 = intervals[Symbol.iterator]();
					case 11:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done)
						{
							_context2.next = 27;
							break
						}
						_ref7 = _step2.value;
						_ref8 = _slicedToArray(_ref7, 2);
						startTimeValue = _ref8[0];
						endTimeValue = _ref8[1];
						remainingSize = size - predecessors.length;
						if (!(remainingSize <= 0))
						{
							_context2.next = 19;
							break
						}
						return _context2.abrupt("break", 27);
					case 19:
						_ref9 = predecessors.length > 0 ? predecessors[0].sort : [timeValue, tieBreakerValue], _ref10 = _slicedToArray(_ref9, 2), afterTimeValue = _ref10[0], afterTieBreakerValue = _ref10[1];
						_context2.next = 22;
						return fetchHitsInInterval(searchSource, timeField, (0, _sorting.reverseSortDirection)(timeSortDirection), startTimeValue, endTimeValue, afterTimeValue, tieBreakerField, (0, _sorting.reverseSortDirection)(tieBreakerSortDirection), afterTieBreakerValue, remainingSize);
					case 22:
						hits = _context2.sent;
						predecessors = [].concat(_toConsumableArray(hits.slice().reverse()), _toConsumableArray(predecessors));
					case 24:
						_iteratorNormalCompletion2 = true;
						_context2.next = 11;
						break;
					case 27:
						_context2.next = 33;
						break;
					case 29:
						_context2.prev = 29;
						_context2.t0 = _context2["catch"](9);
						_didIteratorError2 = true;
						_iteratorError2 = _context2.t0;
					case 33:
						_context2.prev = 33;
						_context2.prev = 34;
						!_iteratorNormalCompletion2 && _iterator2.return && _iterator2.return();
					case 36:
						_context2.prev = 36;
						if (!_didIteratorError2)
						{
							_context2.next = 39;
							break
						}
						throw _iteratorError2;
					case 39:
						return _context2.finish(36);
					case 40:
						return _context2.finish(33);
					case 41:
						return _context2.abrupt("return", predecessors);
					case 42:
					case "end":
						return _context2.stop()
					}
				}, _callee2, this, [
					[9, 29, 33, 41],
					[34, , 36, 40]
				])
			})), function fetchPredecessors(_x10, _x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18)
			{
				return _ref6.apply(this, arguments)
			});
			var _ref6;
			var createSearchSource = (_ref11 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(indexPatternId, filters)
			{
				var indexPattern;
				return regeneratorRuntime.wrap(function _callee3$(_context3)
				{
					while (1) switch (_context3.prev = _context3.next)
					{
					case 0:
						_context3.next = 2;
						return indexPatterns.get(indexPatternId);
					case 2:
						indexPattern = _context3.sent;
						return _context3.abrupt("return", (new SearchSource).setParent(false).setField("index", indexPattern).setField("filter", filters));
					case 4:
					case "end":
						return _context3.stop()
					}
				}, _callee3, this)
			})), function createSearchSource(_x19, _x20)
			{
				return _ref11.apply(this, arguments)
			});
			var _ref11;
			var fetchHitsInInterval = (_ref12 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(searchSource, timeField, timeSortDirection, startTimeValue, endTimeValue, afterTimeValue, tieBreakerField, tieBreakerSortDirection, tieBreakerValue, maxCount)
			{
				var startRange, endRange, response;
				return regeneratorRuntime.wrap(function _callee4$(_context4)
				{
					while (1) switch (_context4.prev = _context4.next)
					{
					case 0:
						startRange = _defineProperty(
						{}, "asc" === timeSortDirection ? "gte" : "lte", startTimeValue);
						endRange = null === endTimeValue ?
						{} : _defineProperty(
						{}, "asc" === timeSortDirection ? "lte" : "gte", endTimeValue);
						_context4.next = 4;
						return searchSource.setField("size", maxCount).setField("query",
						{
							query:
							{
								constant_score:
								{
									filter:
									{
										range: _defineProperty(
										{}, timeField, _extends(
										{
											format: "epoch_millis"
										}, startRange, endRange))
									}
								}
							},
							language: "lucene"
						}).setField("searchAfter", [null !== afterTimeValue ? afterTimeValue : startTimeValue, tieBreakerValue]).setField("sort", [_defineProperty(
						{}, timeField, timeSortDirection), _defineProperty(
						{}, tieBreakerField, tieBreakerSortDirection)]).setField("version", true).fetch();
					case 4:
						response = _context4.sent;
						return _context4.abrupt("return", response.hits ? response.hits.hits : []);
					case 6:
					case "end":
						return _context4.stop()
					}
				}, _callee4, this)
			})), function fetchHitsInInterval(_x21, _x22, _x23, _x24, _x25, _x26, _x27, _x28, _x29, _x30)
			{
				return _ref12.apply(this, arguments)
			});
			var _ref12;
			var SearchSource = Private(_courier.SearchSourceProvider);
			return {
				fetchPredecessors: fetchPredecessors,
				fetchSuccessors: fetchSuccessors
			}
		}

		function asPairs(iterable)
		{
			var currentPair, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value;
			return regeneratorRuntime.wrap(function asPairs$(_context5)
			{
				while (1) switch (_context5.prev = _context5.next)
				{
				case 0:
					currentPair = [];
					_iteratorNormalCompletion3 = true;
					_didIteratorError3 = false;
					_iteratorError3 = void 0;
					_context5.prev = 4;
					_iterator3 = iterable[Symbol.iterator]();
				case 6:
					if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done)
					{
						_context5.next = 15;
						break
					}
					value = _step3.value;
					currentPair = [].concat(_toConsumableArray(currentPair), [value]).slice(-2);
					if (!(2 === currentPair.length))
					{
						_context5.next = 12;
						break
					}
					_context5.next = 12;
					return currentPair;
				case 12:
					_iteratorNormalCompletion3 = true;
					_context5.next = 6;
					break;
				case 15:
					_context5.next = 21;
					break;
				case 17:
					_context5.prev = 17;
					_context5.t0 = _context5["catch"](4);
					_didIteratorError3 = true;
					_iteratorError3 = _context5.t0;
				case 21:
					_context5.prev = 21;
					_context5.prev = 22;
					!_iteratorNormalCompletion3 && _iterator3.return && _iterator3.return();
				case 24:
					_context5.prev = 24;
					if (!_didIteratorError3)
					{
						_context5.next = 27;
						break
					}
					throw _iteratorError3;
				case 27:
					return _context5.finish(24);
				case 28:
					return _context5.finish(21);
				case 29:
				case "end":
					return _context5.stop()
				}
			}, _marked, this, [
				[4, 17, 21, 29],
				[22, , 24, 28]
			])
		}
		exports.fetchContextProvider = fetchContextProvider
	},
	5638: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.createInitialLoadingStatusState = createInitialLoadingStatusState;
		var _constants = __webpack_require__(964);

		function createInitialLoadingStatusState()
		{
			return {
				anchor: _constants.LOADING_STATUS.UNINITIALIZED,
				predecessors: _constants.LOADING_STATUS.UNINITIALIZED,
				successors: _constants.LOADING_STATUS.UNINITIALIZED
			}
		}
	},
	5639: function (module, exports)
	{
		module.exports = '<context-app\n  anchor-type="contextAppRoute.anchorType"\n  anchor-id="contextAppRoute.anchorId"\n  columns="contextAppRoute.state.columns"\n  discover-url="contextAppRoute.discoverUrl"\n  index-pattern="contextAppRoute.indexPattern"\n  filters="contextAppRoute.filters"\n  predecessor-count="contextAppRoute.state.predecessorCount"\n  successor-count="contextAppRoute.state.successorCount"\n  sort="contextAppRoute.state.sort"\n></context-app>\n'
	},
	649: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternCreationConfigRegistry = exports.IndexPatternCreationConfig = exports.IndexPatternCreationFactory = void 0;
		var _index_pattern_creation = __webpack_require__(5425);
		Object.defineProperty(exports, "IndexPatternCreationFactory",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_creation.IndexPatternCreationFactory
			}
		});
		var _index_pattern_creation_config = __webpack_require__(1717);
		Object.defineProperty(exports, "IndexPatternCreationConfig",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_creation_config.IndexPatternCreationConfig
			}
		});
		var _index_pattern_creation_config_registry = __webpack_require__(959);
		Object.defineProperty(exports, "IndexPatternCreationConfigRegistry",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_creation_config_registry.IndexPatternCreationConfigRegistry
			}
		});
		__webpack_require__(5426)
	},
	650: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternListConfigRegistry = exports.IndexPatternListConfig = exports.IndexPatternListFactory = void 0;
		var _index_pattern_list = __webpack_require__(5433);
		Object.defineProperty(exports, "IndexPatternListFactory",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_list.IndexPatternListFactory
			}
		});
		var _index_pattern_list_config = __webpack_require__(1718);
		Object.defineProperty(exports, "IndexPatternListConfig",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_list_config.IndexPatternListConfig
			}
		});
		var _index_pattern_list_config_registry = __webpack_require__(960);
		Object.defineProperty(exports, "IndexPatternListConfigRegistry",
		{
			enumerable: true,
			get: function get()
			{
				return _index_pattern_list_config_registry.IndexPatternListConfigRegistry
			}
		});
		__webpack_require__(5434)
	},
	651: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _get_in_app_url = __webpack_require__(1725);
		Object.keys(_get_in_app_url).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _get_in_app_url[key]
				}
			})
		});
		var _get_relationships = __webpack_require__(5511);
		Object.keys(_get_relationships).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _get_relationships[key]
				}
			})
		});
		var _get_saved_object_counts = __webpack_require__(5512);
		Object.keys(_get_saved_object_counts).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _get_saved_object_counts[key]
				}
			})
		});
		var _get_saved_object_icon = __webpack_require__(5513);
		Object.keys(_get_saved_object_icon).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _get_saved_object_icon[key]
				}
			})
		});
		var _get_saved_object_label = __webpack_require__(5514);
		Object.keys(_get_saved_object_label).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _get_saved_object_label[key]
				}
			})
		});
		var _import_file = __webpack_require__(1723);
		Object.keys(_import_file).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _import_file[key]
				}
			})
		});
		var _parse_query = __webpack_require__(5515);
		Object.keys(_parse_query).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _parse_query[key]
				}
			})
		});
		var _resolve_saved_objects = __webpack_require__(1724);
		Object.keys(_resolve_saved_objects).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _resolve_saved_objects[key]
				}
			})
		});
		var _retrieve_and_export_docs = __webpack_require__(5516);
		Object.keys(_retrieve_and_export_docs).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _retrieve_and_export_docs[key]
				}
			})
		});
		var _save_to_file = __webpack_require__(5517);
		Object.keys(_save_to_file).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _save_to_file[key]
				}
			})
		});
		var _scan_all_types = __webpack_require__(5518);
		Object.keys(_scan_all_types).forEach(function (key)
		{
			if ("default" === key || "__esModule" === key) return;
			Object.defineProperty(exports, key,
			{
				enumerable: true,
				get: function get()
				{
					return _scan_all_types[key]
				}
			})
		})
	},
	652: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var ESTIMATED_NUMBER_OF_SYSTEM_INDICES = exports.ESTIMATED_NUMBER_OF_SYSTEM_INDICES = 100;
		var MAX_NUMBER_OF_MATCHING_INDICES = exports.MAX_NUMBER_OF_MATCHING_INDICES = 100;
		exports.MAX_SEARCH_SIZE = MAX_NUMBER_OF_MATCHING_INDICES + ESTIMATED_NUMBER_OF_SYSTEM_INDICES;
		exports.PER_PAGE_INCREMENTS = [5, 10, 20, 50]
	},
	959: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternCreationConfigRegistry = void 0;
		var _registry = __webpack_require__(62);
		exports.IndexPatternCreationConfigRegistry = (0, _registry.uiRegistry)(
		{
			name: "indexPatternCreation",
			index: ["name"],
			order: ["order"]
		})
	},
	960: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.IndexPatternListConfigRegistry = void 0;
		var _registry = __webpack_require__(62);
		exports.IndexPatternListConfigRegistry = (0, _registry.uiRegistry)(
		{
			name: "indexPatternList",
			index: ["name"],
			order: ["order"]
		})
	},
	961: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Synopsis = Synopsis;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _eui = __webpack_require__(3);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}

		function Synopsis(_ref)
		{
			var description = _ref.description,
				iconUrl = _ref.iconUrl,
				iconType = _ref.iconType,
				title = _ref.title,
				url = _ref.url,
				wrapInPanel = _ref.wrapInPanel,
				onClick = _ref.onClick,
				isBeta = _ref.isBeta;
			var optionalImg = void 0;
			iconUrl ? optionalImg = _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement("img",
			{
				className: "synopsisIcon",
				src: iconUrl,
				alt: ""
			})) : iconType && (optionalImg = _react2.default.createElement(_eui.EuiFlexItem,
			{
				grow: false
			}, _react2.default.createElement(_eui.EuiIcon,
			{
				type: iconType,
				color: "primary",
				size: "xl"
			})));
			var content = _react2.default.createElement(_eui.EuiFlexGroup, null, optionalImg, _react2.default.createElement(_eui.EuiFlexItem,
			{
				className: "synopsisContent"
			}, _react2.default.createElement(_eui.EuiTitle,
			{
				size: "s",
				className: "synopsisTitle"
			}, _react2.default.createElement("h4", null, title)), _react2.default.createElement(_eui.EuiText,
			{
				className: "synopsisBody"
			}, _react2.default.createElement("p", null, _react2.default.createElement(_eui.EuiTextColor,
			{
				color: "subdued"
			}, description)))));
			var synopsisDisplay = content;
			wrapInPanel && (synopsisDisplay = _react2.default.createElement(_eui.EuiPanel,
			{
				className: "synopsisPanel",
				betaBadgeLabel: isBeta ? "BETA" : null
			}, content));
			if (onClick) return _react2.default.createElement("span",
			{
				onClick: onClick,
				className: "euiLink synopsis",
				"data-test-subj": "homeSynopsisLink" + title.toLowerCase()
			}, synopsisDisplay);
			return _react2.default.createElement("a",
			{
				href: url,
				className: "euiLink synopsis",
				"data-test-subj": "homeSynopsisLink" + title.toLowerCase()
			}, synopsisDisplay)
		}
		Synopsis.propTypes = {
			description: _propTypes2.default.string.isRequired,
			iconUrl: _propTypes2.default.string,
			iconType: _propTypes2.default.string,
			title: _propTypes2.default.string.isRequired,
			url: _propTypes2.default.string,
			onClick: _propTypes2.default.func,
			isBeta: _propTypes2.default.bool
		};
		Synopsis.defaultProps = {
			isBeta: false
		}
	},
	962: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.Content = Content;
		var _react = __webpack_require__(0);
		var _react2 = _interopRequireDefault(_react);
		var _propTypes = __webpack_require__(4);
		var _propTypes2 = _interopRequireDefault(_propTypes);
		var _markdown = __webpack_require__(1351);

		function _interopRequireDefault(obj)
		{
			return obj && obj.__esModule ? obj :
			{
				default: obj
			}
		}
		var whiteListedRules = ["backticks", "emphasis", "link", "list"];

		function Content(_ref)
		{
			var text = _ref.text;
			return _react2.default.createElement(_markdown.Markdown,
			{
				className: "euiText",
				markdown: text,
				openLinksInNewTab: true,
				whiteListedRules: whiteListedRules
			})
		}
		Content.propTypes = {
			text: _propTypes2.default.string.isRequired
		}
	},
	963: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		var _can_append_wildcard = __webpack_require__(5528);
		Object.defineProperty(exports, "canAppendWildcard",
		{
			enumerable: true,
			get: function get()
			{
				return _can_append_wildcard.canAppendWildcard
			}
		});
		var _ensure_minimum_time = __webpack_require__(5529);
		Object.defineProperty(exports, "ensureMinimumTime",
		{
			enumerable: true,
			get: function get()
			{
				return _ensure_minimum_time.ensureMinimumTime
			}
		});
		var _get_indices = __webpack_require__(5530);
		Object.defineProperty(exports, "getIndices",
		{
			enumerable: true,
			get: function get()
			{
				return _get_indices.getIndices
			}
		});
		var _get_matched_indices = __webpack_require__(5531);
		Object.defineProperty(exports, "getMatchedIndices",
		{
			enumerable: true,
			get: function get()
			{
				return _get_matched_indices.getMatchedIndices
			}
		});
		var _contains_illegal_characters = __webpack_require__(5532);
		Object.defineProperty(exports, "containsIllegalCharacters",
		{
			enumerable: true,
			get: function get()
			{
				return _contains_illegal_characters.containsIllegalCharacters
			}
		});
		var _extract_time_fields = __webpack_require__(5533);
		Object.defineProperty(exports, "extractTimeFields",
		{
			enumerable: true,
			get: function get()
			{
				return _extract_time_fields.extractTimeFields
			}
		})
	},
	964: function (module, exports, __webpack_require__)
	{
		"use strict";
		Object.defineProperty(exports, "__esModule",
		{
			value: true
		});
		exports.FAILURE_REASONS = {
			UNKNOWN: "unknown",
			INVALID_TIEBREAKER: "invalid_tiebreaker"
		};
		exports.LOADING_STATUS = {
			FAILED: "failed",
			LOADED: "loaded",
			LOADING: "loading",
			UNINITIALIZED: "uninitialized"
		}
	}
}, [5408]);