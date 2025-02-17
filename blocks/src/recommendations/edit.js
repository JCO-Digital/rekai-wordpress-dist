import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
  PanelBody,
  TextControl,
  ToggleControl,
  SelectControl,
  RadioControl,
  RangeControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import {
  InspectorControls,
  RichText,
  useBlockProps,
} from "@wordpress/block-editor";
import logo from "../../../assets/img/logo-rekai-blue.svg";
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {JSX.Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    headerText,
    showHeader,
    nrofhits,
    renderstyle,
    listcols,
    cols,
    showImage,
    showIngress,
    pathOption,
    limit,
    depth,
    limitDepth,
    extraAttributes,
  } = attributes;
  const items = [];
  for (let i = 0; i < nrofhits; i++) {
    items.push(
      <div key={i} className="item">
        {showImage && <div className="image"></div>}
        <div className="title"></div>
        {showIngress && <div className="row row1"></div>}
        {showIngress && <div className="row row2"></div>}
      </div>,
    );
  }
  return (
    <div {...useBlockProps()}>
      <div className="logoHeader">
        <img src={logo} alt={"Rek.ai Logo"} />
        <h4>Recommendations</h4>
      </div>
      {showHeader && (
        <RichText
          identifier="headerText"
          tagName={"h2"}
          value={headerText}
          onChange={(newValue) => {
            setAttributes({ headerText: newValue });
          }}
          placeholder={__("Heading Text", "rekai-wordpress")}
        />
      )}
      <div
        className={
          "items cols" +
          (renderstyle === "list" ? listcols : cols) +
          " " +
          renderstyle
        }
      >
        {items}
      </div>

      <InspectorControls>
        <PanelBody title={__("Display", "rekai-wordpress")}>
          <ToggleControl
            label={__("Show Header", "rekai-wordpress")}
            checked={showHeader}
            onChange={(newValue) => {
              setAttributes({ showHeader: newValue });
            }}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
          <TextControl
            label={__("Number of Recommendations", "rekai-wordpress")}
            type="number"
            onChange={(newValue) => {
              setAttributes({ nrofhits: newValue });
            }}
            value={nrofhits}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
          <SelectControl
            label={__("Render Style", "rekai-wordpress")}
            value={renderstyle}
            options={[
              { label: __("Pills", "rekai-wordpress"), value: "pills" },
              { label: __("List", "rekai-wordpress"), value: "list" },
              { label: __("Advanced", "rekai-wordpress"), value: "advanced" },
            ]}
            onChange={(newValue) => setAttributes({ renderstyle: newValue })}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
          {renderstyle === "list" && (
            <NumberControl
              label={__("Number of Columns", "rekai-wordpress")}
              type="number"
              onChange={(newValue) => {
                setAttributes({ listcols: newValue });
              }}
              value={listcols}
              min="1"
              max="3"
              __next40pxDefaultSize
              __nextHasNoMarginBottom
            />
          )}
          {renderstyle === "advanced" && (
            <NumberControl
              label={__("Number of Columns", "rekai-wordpress")}
              type="number"
              onChange={(newValue) => {
                setAttributes({ cols: newValue });
              }}
              value={cols}
              min="1"
              max="3"
              __next40pxDefaultSize
              __nextHasNoMarginBottom
            />
          )}
          {renderstyle === "advanced" && (
            <ToggleControl
              label={__("Show Image", "rekai-wordpress")}
              checked={showImage}
              onChange={(newValue) => {
                setAttributes({ showImage: newValue });
              }}
              __next40pxDefaultSize
              __nextHasNoMarginBottom
            />
          )}
          {renderstyle === "advanced" && (
            <ToggleControl
              label={__("Show Ingress", "rekai-wordpress")}
              checked={showIngress}
              onChange={(newValue) => {
                setAttributes({ showIngress: newValue });
              }}
              __next40pxDefaultSize
              __nextHasNoMarginBottom
            />
          )}
        </PanelBody>
        <PanelBody title={__("Filter", "rekai-wordpress")}>
          <ToggleControl
            label={__("Show only current language", "rekai-wordpress")}
            help={
              attributes.currentLanguage
                ? __(
                    "Shows only content in current language.",
                    "rekai-wordpress",
                  )
                : __("Shows content in all languages.", "rekai-wordpress")
            }
            checked={attributes.currentLanguage}
            onChange={(newValue) => {
              setAttributes({ currentLanguage: newValue });
            }}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
          <RadioControl
            label={__("Show content from starting point:", "rekai-wordpress")}
            selected={pathOption}
            options={[
              {
                value: "all",
                label: __("Whole website", "rekai-wordpress"),
              },
              {
                value: "rootPath",
                label: __("Starting from current page", "rekai-wordpress"),
              },
              {
                value: "maxDepth",
                label: __("Subpages until specified depth", "rekai-wordpress"),
              },
              {
                value: "rootPathLevel",
                label: __(
                  "Subpages of current page from specified depth",
                  "rekai-wordpress",
                ),
              },
            ]}
            onChange={(value) => setAttributes({ pathOption: value })}
          />
          {["maxDepth", "rootPathLevel"].includes(pathOption) && (
            <NumberControl
              value={parseInt(depth)}
              label={
                pathOption === "maxDepth"
                  ? __("Max depth", "rekai-wordpress")
                  : __(
                      "Path level from current path to exclude",
                      "rekai-wordpress",
                    )
              }
              min={0}
              onChange={(value) => setAttributes({ depth: parseInt(value) })}
            />
          )}
          <RadioControl
            label={__("Exclude content from subpages?", "rekai-wordpress")}
            selected={limit}
            options={[
              {
                value: "none",
                label: __("None", "rekai-wordpress"),
              },
              {
                value: "subPages",
                label: __("Subpages of current page", "rekai-wordpress"),
              },
              {
                value: "minDepth",
                label: __("Exclude subpages until depth", "rekai-wordpress"),
              },
            ]}
            onChange={(value) => setAttributes({ limit: value })}
          />
          {limit === "minDepth" && (
            <NumberControl
              value={parseInt(limitDepth)}
              label={__("Exclude subpages until depth")}
              min={0}
              onChange={(value) =>
                setAttributes({ limitDepth: parseInt(value) })
              }
            />
          )}
          <TextControl
            label={__("Subtree", "rekai-wordpress")}
            type="text"
            onChange={(newValue) => {
              setAttributes({ subtree: newValue });
            }}
            value={attributes.subtree}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />
        </PanelBody>
        <PanelBody
          title={__("Extra attributes", "rekai-wordpress")}
          initialOpen={false}
        >
          <TextControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            value={extraAttributes}
            onChange={(value) => {
              setAttributes({ extraAttributes: value });
            }}
            label={__("Extra attributes", "rekai-wordpress")}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
}
