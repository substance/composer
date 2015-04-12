"use strict";

var Writer = require("./writer");

var ContainerComponent = require("./components/container_component");
var TextComponent = require("./components/text_component");
var SaveTool = require("./tools/save_tool");
var UndoTool = require("./tools/undo_tool");
var RedoTool = require("./tools/redo_tool");
var StrongTool = require("./tools/strong_tool");
var EmphasisTool = require("./tools/emphasis_tool");

var BasicToolMixin = require("./tools/basic_tool_mixin");
var TextProperty = require("./components/text_property");

Writer.CoreModule = {
  name: "core",
  components: {
    "container": ContainerComponent,
    "text": TextComponent
  },
  panels: [
    // TODO: TOCPanel
  ],
  stateHandlers: {},
  tools: [
    SaveTool,
    UndoTool,
    RedoTool,
    StrongTool,
    EmphasisTool
  ]
};

Writer.BasicToolMixin = BasicToolMixin;
Writer.TextProperty = TextProperty;

module.exports = Writer;