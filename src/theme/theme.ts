import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    text: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      100: "#093367",
      200: "#093367",
      300: "#093367",
      400: "#093367",
      500: "#093367",
      600: "#093367",
      700: "#093367",
      800: "#093367",
      900: "#093367",
      950: "#7ab99b"
    },
    neutral: {
      100: "#FFF",
      200: "#F8FAFB",
      300: "#F2F4F6",
      400: "#E6EAEF",
      500: "#BCC5D1",
      600: "#788698",
      700: "#505F73",
      800: "#030B16",
      900: "#000",
    },
    primary: {
      300: "#5b90f5",
      500: "#2B6FF2",
      700: "#0e54dc",
    },
    standard: {
      500: "#7ab99b",
      700: "#67aa8a"
    },
    success: {
      500: "#009E49",
      700: "#0ED27D",
    },
    warning: {
      300: "#E34747",
      500: "#F7A01F",
    },
    text: {
      body: "#030B16",
      light: "#657488",
      lightest: "#AEB8C6",
      information: "#2B6FF2",
      success: "#34A853",
      warning: "#F7A01F",
      error: "#F43A4D",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: "text.body",
      },
    }),
  },
  components: {
    Accordion: {
      baseStyle: {
        root: {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "10px",
        },
        container: {
          bg: "white",
          borderRadius: "12px",
          border: "none",
        },
        button: {
          fontWeight: "700",
          fontSize: "20px",
          padding: "20px 30px",
          cursor: "auto",
          _hover: {
            borderRadius: "12px",
            background: "transparent",
          },
        },
        panel: {
          padding: "0 30px 30px",
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "medium",
        padding: "0 20px",
      },
      variants: {
        outline: {
          borderColor: "neutral.400",
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "primary.500",
          _checked: {
            color: "primary.500",
            borderColor: "primary.500",
            bg: "transparent",
            _hover: {
              color: "primary.700",
              borderColor: "primary.700",
              bg: "transparent",
            },
          },
          _hover: {
            color: "primary.700",
            borderColor: "primary.700",
            bg: "transparent",
          },
        },
        label: {
          marginLeft: "14px",
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "8px",
        },
        item: {
          _hover: {
            bg: "neutral.300",
            borderRadius: "8px",
          },
        },
      },
      variants: {
        outline: {
          button: {
            width: "100%",
            borderWidth: "1px",
            borderColor: "neutral.400",
            borderRadius: "8px",
            padding: "10px 20px",
          },
        },
        ghost: {
          button: {
            bg: "transparent",
            padding: "10px 20px",
          },
        },
      },
    },
    Tabs: {
      variants: {
        "soft-rounded": {
          tablist: {
            background: "white",
            borderWidth: "1px",
            borderColor: "neutral.400",
            borderRadius: "12px",
            padding: "20px",
            gap: "10px",
          },
          tab: {
            color: "text.body",
            fontWeight: "medium",
            fontSize: "16px",
            padding: "9px 24px",
            background: "white",
            borderWidth: "1px",
            borderColor: "neutral.400",
            borderRadius: "8px",
            _selected: {
              background: "primary.500",
              color: "white",
            },
          },
          tabpanels: {
            marginTop: "30px",
          },
          tabpanel: {
            padding: 0,
          },
        },
      },
    },
    Tooltip: {
      baseStyle: {
        fontWeight: "normal",
        color: "text.light",
        bg: "white",
        boxShadow: "0px 5px 30px rgba(0, 0, 0, .15)",
        borderRadius: "10px",
        padding: "14px 24px",
        arrow: {
          bg: "white",
        },
      },
    },
  },
});

export default theme;
