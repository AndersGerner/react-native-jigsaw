import * as React from "react";
import { withTheme } from "../core/theming";
import { COMPONENT_TYPES, FORM_TYPES } from "../core/component-types";
import Header from "./Header";

class HeaderMedium extends React.Component {
  static defaultProps = {
    onPress: () => {},
  };

  render() {
    const {
      title,
      buttonText,
      icon,
      onPress,
      style,
      theme: { colors, typography },
    } = this.props;

    return (
      <Header
        titleTypeStyle={typography.headline6}
        titleColor={colors.strong}
        title={title}
        buttonText={buttonText}
        icon={icon}
        onPress={onPress}
        style={style}
      />
    );
  }
}

export default withTheme(HeaderMedium);

export const SEED_DATA = [
  {
    name: "Header Medium",
    tag: "HeaderMedium",
    description:
      "A medium header with an optional touchable right aligned text and icon.",
    category: COMPONENT_TYPES.header,
    preview_image_url: "{CLOUDINARY_URL}/Header_HeadlineMediumIconText.png",
    supports_list_render: false,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        defaultValue: "Title",
        editable: true,
      },
      buttonText: {
        label: "Button text",
        description: "Right aligned button text to display",
        formType: FORM_TYPES.string,
        defaultValue: "See All",
        editable: true,
      },
      icon: {
        label: "Icon",
        description: "Name of icon to display",
        formType: FORM_TYPES.icon,
        defaultValue: null,
        editable: true,
      },
      onPress: {
        label: "Action",
        description: "Action to execute when button pressed",
        editable: true,
        formType: FORM_TYPES.action,
        defaultValue: null,
      },
    },
    layout: {},
  },
];
