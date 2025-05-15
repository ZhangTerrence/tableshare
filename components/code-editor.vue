<script setup lang="ts">
import { Codemirror } from "vue-codemirror";
import { PostgreSQL, sql, type SQLConfig } from "@codemirror/lang-sql";
import { vscodeKeymap } from "@replit/codemirror-vscode-keymap";
import { keymap } from "@codemirror/view";
import { type AST, type Create, Parser } from "node-sql-parser";
import type { Database } from "~/types/database";
import { v4 as uuid } from "uuid";

const sqlOptions: SQLConfig = {
  dialect: PostgreSQL,
  upperCaseKeywords: true,
};

const code = ref(
  "CREATE TABLE public.phone\n" +
    "(\n" +
    "    id                     character varying(250) NOT NULL,\n" +
    "    location_id            character varying(250),\n" +
    "    service_id             character varying(250),\n" +
    "    organization_id        character varying(250),\n" +
    "    contact_id             character varying(250),\n" +
    "    service_at_location_id character varying(250),\n" +
    "    number                 text                   NOT NULL,\n" +
    "    extension              numeric,\n" +
    "    type                   text,\n" +
    "    description            text\n" +
    ");\n",
);
const view = shallowRef();

const emit = defineEmits<{ (e: "update-schema", database: Database): void }>();
const parseSql = (sql: string, dialect?: string) => {
  const parser = new Parser();
  const ast: AST[] = [
    parser.astify(sql, {
      database: dialect,
    }),
  ].flat();

  console.log("AST: ", ast);

  const schema: Database = ast
    .filter((e) => e.type === "create" && e.keyword === "table")
    .map((e) => {
      const tableName = (e as Pick<Create, "table">).table?.at(0)?.table ?? "UNKNOWN TABLE";

      return {
        id: uuid(),
        name: tableName,
        columns: [],
      };
    });

  console.log("Schema: ", schema);

  emit("update-schema", schema);
};
</script>

<template>
  <ClientOnly>
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
  </ClientOnly>
</template>
