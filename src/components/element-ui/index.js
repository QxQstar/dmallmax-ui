import DmAlert from './alert.vue'
import DmAside from './aside.vue'
import DmAutocomplete from './autocomplete.vue'
import DmAvatar from './avatar.vue'
import DmBacktop from './backtop.vue'
import DmBadge from './badge.vue'
import DmBreadcrumbItem from './breadcrumb-item.vue'
import DmBreadcrumb from './breadcrumb.vue'
import DmButton from './button.vue'
import DmButtonGroup from './buttonGroup.vue'
import DmCalendar from './calendar.vue'
import DmCard from './card.vue'
import DmCarouselItem from './carousel-item.vue'
import DmCarousel from './carousel.vue'
import DmCascaderPanel from './cascader-panel.vue'
import DmCascader from './cascader.vue'
import DmCheckboxButton from './checkbox-button.vue'
import DmCheckbox from './checkbox.vue'
import DmCheckboxGroup from './checkboxGroup.vue'
import DmCol from './col.vue'
import DmCollapseItem from './collapse-item.vue'
import DmCollapse from './collapse.vue'
import DmColorPicker from './color-picker.vue'
import DmContainer from './container.vue'
import DmDatePicker from './date-picker.vue'
import DmDivider from './divider.vue'
import DmDrawer from './drawer.vue'
import DmDropdownItem from './dropdown-item.vue'
import DmDropdownMenu from './dropdown-menu.vue'
import DmDropdown from './dropdown.vue'
import DmFooter from './footer.vue'
import DmForm from './form.vue'
import DmFormItem from './formItem.vue'
import DmHeader from './header.vue'
import DmIcon from './icon.vue'
import DmImage from './image.vue'
import DmInputNumber from './input-number.vue'
import DmInput from './input.vue'
import DmLink from './link.vue'
import DmLoading from './loading.js'
import DmMain from './main.vue'
import DmMenuItemGroup from './menu-item-group.vue'
import DmMenuItem from './menu-item.vue'
import DmMenu from './menu.vue'
import DmMessage from './message.js'
import DmMessageBox from './messageBox.js'
import DmNotification from './notification.js'
import DmOption from './option.vue'
import DmOptionGroup from './optionGroup.vue'
import DmPageHeader from './page-header.vue'
import DmPagination from './pagination.vue'
import DmPopconfirm from './popconfirm.vue'
import DmPopover from './popover.vue'
import DmProgress from './progress.vue'
import DmRadioButton from './radio-button.vue'
import DmRadio from './radio.vue'
import DmRadioGroup from './radioGroup.vue'
import DmRate from './rate.vue'
import DmRow from './row.vue'
import DmScrollbar from './scrollbar.vue'
import DmSelect from './select.vue'
import DmSlider from './slider.vue'
import DmSpinner from './spinner.vue'
import DmStep from './step.vue'
import DmSteps from './steps.vue'
import DmSubmenu from './submenu.vue'
import DmSwitch from './switch.vue'
import DmTabPane from './tab-pane.vue'
import DmTable from './table.vue'
import DmTableColumn from './tableColumn.vue'
import DmTabs from './tabs.vue'
import DmTag from './tag.vue'
import DmTimePicker from './time-picker.vue'
import DmTimeSelect from './time-select.vue'
import DmTimelineItem from './timeline-item.vue'
import DmTimeline from './timeline.vue'
import DmTooltip from './tooltip.vue'
import DmTransfer from './transfer.vue'
import DmTree from './tree.vue'
import DmUpload from './upload.vue'


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
  DmTimePicker: DmTimePicker,
  DmTimeSelect: DmTimeSelect,
  DmTimelineItem: DmTimelineItem,
  DmTimeline: DmTimeline,
  DmTooltip: DmTooltip,
  DmTransfer: DmTransfer,
  DmTree: DmTree,
  DmUpload: DmUpload
}

function install(Vue,opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key,components[key].extends)
  })
  Vue.prototype.$DMALLMAX = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
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
  DmUpload
}
