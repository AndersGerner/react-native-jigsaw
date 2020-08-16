import { GROUPS, COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";

export const SEED_DATA = {
  name: "ScrollView",
  tag: "ScrollView",
  description: "A basic ScrollView component",
  category: COMPONENT_TYPES.layout,
  supports_list_render: false,
  layout: {},
  props: {
    horizontal: {
      group: GROUPS.basic,
      label: "Horizontal",
      description: "Render scrollview horizontally",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: false,
    },
    showsHorizontalScrollIndicator: {
      group: GROUPS.basic,
      label: "Show Horizontal Scroll Indicator",
      description:
        "When true, shows a horizontal scroll indicator. The default value is true.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: true,
    },
    showsVerticalScrollIndicator: {
      group: GROUPS.basic,
      label: "Show Vertical Scroll Indicator",
      description:
        "When true, shows a vertical scroll indicator. The default value is true.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: true,
    },
    bounces: {
      group: GROUPS.basic,
      label: "Bounce",
      description:
        "When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction.",
      editable: true,
      required: false,
      formType: FORM_TYPES.boolean,
      defaultValue: true,
    },
  },
};
