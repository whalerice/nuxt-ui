<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const schema = toTypedSchema(
  z.object({
    username: z.string().min(2, "두 글자 이상 입력하세요."),
  }),
);

function onSubmit(values: Record<string, unknown>) {
  console.log(values);
}

const source = [
  "<" + 'script setup lang="ts">',
  'import { toTypedSchema } from "@vee-validate/zod";',
  'import * as z from "zod";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "import {",
  "  Form,",
  "  FormControl,",
  "  FormDescription,",
  "  FormField,",
  "  FormItem,",
  "  FormLabel,",
  "  FormMessage,",
  '} from "@whalerice/nuxt-ui/form";',
  'import { Input } from "@whalerice/nuxt-ui/input";',
  "",
  "const schema = toTypedSchema(",
  "  z.object({",
  '    username: z.string().min(2, "두 글자 이상 입력하세요."),',
  "  }),",
  ");",
  "",
  "function onSubmit(values: Record<string, unknown>) {",
  "  console.log(values);",
  "}",
  "<" + "/script>",
  "",
  "<template>",
  "  <Form",
  '    :validation-schema="schema"',
  '    class="w-full max-w-sm space-y-4"',
  '    @submit="onSubmit"',
  "  >",
  '    <FormField v-slot="{ componentField }" name="username">',
  "      <FormItem>",
  "        <FormLabel>사용자명</FormLabel>",
  "        <FormControl>",
  '          <Input placeholder="홍길동" v-bind="componentField" />',
  "        </FormControl>",
  "        <FormDescription>공개 프로필에 표시됩니다.</FormDescription>",
  "        <FormMessage />",
  "      </FormItem>",
  "    </FormField>",
  '    <Button type="submit">제출</Button>',
  "  </Form>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Form
      :validation-schema="schema"
      class="w-full max-w-sm space-y-4"
      @submit="onSubmit"
    >
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>사용자명</FormLabel>
          <FormControl>
            <Input placeholder="홍길동" v-bind="componentField" />
          </FormControl>
          <FormDescription>공개 프로필에 표시됩니다.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">제출</Button>
    </Form>
  </PreviewFrame>
</template>
