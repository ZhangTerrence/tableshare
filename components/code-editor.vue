<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { PostgreSQL, sql, type SQLConfig } from "@codemirror/lang-sql";
import { vscodeKeymap } from "@replit/codemirror-vscode-keymap";
import { keymap } from "@codemirror/view";
import { type AST, Parser } from "node-sql-parser";

const sqlOptions: SQLConfig = {
  dialect: PostgreSQL,
  upperCaseKeywords: true,
};

const code = ref("");
const view = shallowRef();

const emit = defineEmits<{ (e: "update-ast", ast: AST[]): void }>();
const parseSql = (sql: string, dialect?: string) => {
  const parser = new Parser();
  const ast = parser.astify(sql, {
    database: dialect,
  });
  emit("update-ast", [ast].flat());
};
</script>

<template>
  <Codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '100%', width: '100%', backgroundColor: '#fff', color: '#000' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tab-size="2"
    :extensions="[sql(sqlOptions), keymap.of(vscodeKeymap)]"
    @ready="(payload) => (view = payload.view)"
    @change="(value, _) => parseSql(value, 'PostgresQL')"
  />
</template>
