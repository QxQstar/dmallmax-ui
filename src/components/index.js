import DmAlert from './alert/src/main.vue'
import DmAside from './aside/src/main.vue'
import DmAutocomplete from './autocomplete/src/main.vue'
import DmAvatar from './avatar/src/main.vue'
import DmBacktop from './backtop/src/main.vue'
import DmBadge from './badge/src/main.vue'
import DmBreadcrumbItem from './breadcrumb-item/src/main.vue'
import DmBreadcrumb from './breadcrumb/src/main.vue'
import DmButton from './button/src/main.vue'
import DmButtonGroup from './button-group/src/main.vue'
import DmCalendar from './calendar/src/main.vue'
import DmCard from './card/src/main.vue'
import DmCarouselItem from './carousel-item/src/main.vue'
import DmCarousel from './carousel/src/main.vue'
import DmCascaderPanel from './cascader-panel/src/main.vue'
import DmCascader from './cascader/src/main.vue'
import DmCheckboxButton from './checkbox-button/src/main.vue'
import DmCheckbox from './checkbox/src/main.vue'
import DmCheckboxGroup from './checkbox-group/src/main.vue'
import DmCol from './col/src/main.vue'
import DmCollapseItem from './collapse-item/src/main.vue'
import DmCollapse from './collapse/src/main.vue'
import DmColorPicker from './color-picker/src/main.vue'
import DmContainer from './container/src/main.vue'
import DmDatePicker from './date-picker/src/main.vue'
import DmDivider from './divider/src/main.vue'
import DmDrawer from './drawer/src/main.vue'
import DmDropdownItem from './dropdown-item/src/main.vue'
import DmDropdownMenu from './dropdown-menu/src/main.vue'
import DmDropdown from './dropdown/src/main.vue'
import DmFooter from './footer/src/main.vue'
import DmForm from './form/src/main.vue'
import DmFormItem from './form-item/src/main.vue'
import DmHeader from './header/src/main.vue'
import DmIcon from './icon/src/main.vue'
import DmImage from './image/src/main.vue'
import DmInputNumber from './input-number/src/main.vue'
import DmInput from './input/src/main.vue'
import DmLink from './link/src/main.vue'
import DmLoading from './loading.js'
import DmMain from './main/src/main.vue'
import DmMenuItemGroup from './menu-item-group/src/main.vue'
import DmMenuItem from './menu-item/src/main.vue'
import DmMenu from './menu/src/main.vue'
import DmMessage from './message.js'
import DmMessageBox from './messageBox.js'
import DmNotification from './notification.js'
import DmOption from './option/src/main.vue'
import DmOptionGroup from './option-group/src/main.vue'
import DmPageHeader from './page-header/src/main.vue'
import DmPagination from './pagination/src/main.vue'
import DmPopconfirm from './popconfirm/src/main.vue'
import DmPopover from './popover/src/main.vue'
import DmProgress from './progress/src/main.vue'
import DmRadioButton from './radio-button/src/main.vue'
import DmRadio from './radio/src/main.vue'
import DmRadioGroup from './radio-group/src/main.vue'
import DmRate from './rate/src/main.vue'
import DmRow from './row/src/main.vue'
import DmScrollbar from './scrollbar/src/main.vue'
import DmSelect from './select/src/main.vue'
import DmSlider from './slider/src/main.vue'
import DmSpinner from './spinner/src/main.vue'
import DmStep from './step/src/main.vue'
import DmSteps from './steps/src/main.vue'
import DmSubmenu from './submenu/src/main.vue'
import DmSwitch from './switch/src/main.vue'
import DmTabPane from './tab-pane/src/main.vue'
import DmTable from './table/src/main.vue'
import DmTableColumn from './table-column/src/main.vue'
import DmTabs from './tabs/src/main.vue'
import DmTag from './tag/src/main.vue'
import DmTimePicker from './time-picker/src/main.vue'
import DmTimeSelect from './time-select/src/main.vue'
import DmTimelineItem from './timeline-item/src/main.vue'
import DmTimeline from './timeline/src/main.vue'
import DmTooltip from './tooltip/src/main.vue'
import DmTransfer from './transfer/src/main.vue'
import DmTree from './tree/src/tree.vue'
import DmUpload from './upload/src/main.vue'
import DmDialog from './dialog/src/main.vue'
import DmStatusFilter from './status-filter/src/main.vue'
import DmSearchBox from './search-box/src/main.vue'
import DmTableList from './table-list/src/main.vue'
import DmBatchInput from './batch-input/src/main.vue'
import DmTopChoose from './top-choose/src/main.vue'
import DmEmptyBox from './empty-box/src/main.vue'
import searchQuery from './table-list/query.js'

import '../styles/components/index.scss'

const components = {
  DmAlert: DmAlert,
  DmAside: DmAside,
  DmAutocomplete: DmAutocomplete,
  DmAvatar: DmAvatar,
  DmBacktop: DmBacktop,
  DmBadge: DmBadge,
  DmBreadcrumbItem: DmBreadcrumbItem,
  DmBreadcrumb: DmBreadcrumb,
  DmButton: DmButton,
  DmButtonGroup: DmButtonGroup,
  DmCalendar: DmCalendar,
  DmCard: DmCard,
  DmCarouselItem: DmCarouselItem,
  DmCarousel: DmCarousel,
  DmCascaderPanel: DmCascaderPanel,
  DmCascader: DmCascader,
  DmCheckboxButton: DmCheckboxButton,
  DmCheckbox: DmCheckbox,
  DmCheckboxGroup: DmCheckboxGroup,
  DmCol: DmCol,
  DmCollapseItem: DmCollapseItem,
  DmCollapse: DmCollapse,
  DmColorPicker: DmColorPicker,
  DmContainer: DmContainer,
  DmDatePicker: DmDatePicker,
  DmDivider: DmDivider,
  DmDrawer: DmDrawer,
  DmDropdownItem: DmDropdownItem,
  DmDropdownMenu: DmDropdownMenu,
  DmDropdown: DmDropdown,
  DmFooter: DmFooter,
  DmForm: DmForm,
  DmFormItem: DmFormItem,
  DmHeader: DmHeader,
  DmIcon: DmIcon,
  DmImage: DmImage,
  DmInputNumber: DmInputNumber,
  DmInput: DmInput,
  DmLink: DmLink,
  DmMain: DmMain,
  DmMenuItemGroup: DmMenuItemGroup,
  DmMenuItem: DmMenuItem,
  DmMenu: DmMenu,
  DmOption: DmOption,
  DmOptionGroup: DmOptionGroup,
  DmPageHeader: DmPageHeader,
  DmPagination: DmPagination,
  DmPopconfirm: DmPopconfirm,
  DmPopover: DmPopover,
  DmProgress: DmProgress,
  DmRadioButton: DmRadioButton,
  DmRadio: DmRadio,
  DmRadioGroup: DmRadioGroup,
  DmRate: DmRate,
  DmRow: DmRow,
  DmScrollbar: DmScrollbar,
  DmSelect: DmSelect,
  DmSlider: DmSlider,
  DmSpinner: DmSpinner,
  DmStep: DmStep,
  DmSteps: DmSteps,
  DmSubmenu: DmSubmenu,
  DmSwitch: DmSwitch,
  DmTabPane: DmTabPane,
  DmTable: DmTable,
  DmTableColumn: DmTableColumn,
  DmTabs: DmTabs,
  DmTag: DmTag,
  DmDialog:DmDialog,
  DmTimePicker: DmTimePicker,
  DmTimeSelect: DmTimeSelect,
  DmTimelineItem: DmTimelineItem,
  DmTimeline: DmTimeline,
  DmTooltip: DmTooltip,
  DmTransfer: DmTransfer,
  DmTree: DmTree,
  DmUpload: DmUpload,
  DmStatusFilter:DmStatusFilter,
  DmSearchBox:DmSearchBox,
  DmTableList:DmTableList,
  DmBatchInput:DmBatchInput,
  DmTopChoose:DmTopChoose,
  DmEmptyBox:DmEmptyBox
}

function install(Vue,opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key,components[key])
  })
  Vue.prototype.$DMALLMAX = {
    size: opts.size || 'small',
    zIndex: opts.zIndex || 2000,
    searchQuery:searchQuery(Vue)
  };
  Vue.use(DmLoading.directive);

  Vue.prototype.$loading = DmLoading.service;
  Vue.prototype.$msgbox = DmMessageBox;
  Vue.prototype.$alert = DmMessageBox.alert;
  Vue.prototype.$confirm = DmMessageBox.confirm;
  Vue.prototype.$prompt = DmMessageBox.prompt;
  Vue.prototype.$notify = DmNotification;
  Vue.prototype.$message = DmMessage;

}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
  DmAlert,
  DmAside,
  DmAutocomplete,
  DmAvatar,
  DmBacktop,
  DmBadge,
  DmBreadcrumbItem,
  DmBreadcrumb,
  DmButton,
  DmButtonGroup,
  DmCalendar,
  DmCard,
  DmCarouselItem,
  DmCarousel,
  DmCascaderPanel,
  DmCascader,
  DmCheckboxButton,
  DmCheckbox,
  DmCheckboxGroup,
  DmCol,
  DmCollapseItem,
  DmCollapse,
  DmColorPicker,
  DmContainer,
  DmDatePicker,
  DmDivider,
  DmDrawer,
  DmDropdownItem,
  DmDropdownMenu,
  DmDropdown,
  DmFooter,
  DmForm,
  DmFormItem,
  DmHeader,
  DmIcon,
  DmImage,
  DmInputNumber,
  DmInput,
  DmLink,
  DmLoading,
  DmMain,
  DmMenuItemGroup,
  DmMenuItem,
  DmMenu,
  DmMessage,
  DmMessageBox,
  DmNotification,
  DmOption,
  DmOptionGroup,
  DmPageHeader,
  DmPagination,
  DmPopconfirm,
  DmPopover,
  DmProgress,
  DmRadioButton,
  DmRadio,
  DmRadioGroup,
  DmRate,
  DmRow,
  DmScrollbar,
  DmSelect,
  DmSlider,
  DmSpinner,
  DmStep,
  DmSteps,
  DmSubmenu,
  DmSwitch,
  DmTabPane,
  DmTable,
  DmTableColumn,
  DmTabs,
  DmTag,
  DmTimePicker,
  DmTimeSelect,
  DmTimelineItem,
  DmTimeline,
  DmTooltip,
  DmTransfer,
  DmTree,
  DmDialog,
  DmUpload,
  DmStatusFilter,
  DmSearchBox,
  DmTableList,
  DmBatchInput,
  DmTopChoose,
  DmEmptyBox
}
