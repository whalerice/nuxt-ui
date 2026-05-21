---
title: Form
description: vee-validate 기반 폼 레이아웃. 라벨·입력·설명·오류 메시지를 일관되게 연결합니다.
order: 18
category: components
---

:demo-form

## 사용 예시

```vue
<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Button } from "@whalerice/nuxt-ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@whalerice/nuxt-ui/form";
import { Input } from "@whalerice/nuxt-ui/input";

const schema = toTypedSchema(
  z.object({
    username: z.string().min(2, "두 글자 이상 입력하세요."),
  }),
);

function onSubmit(values: Record<string, unknown>) {
  console.log(values);
}
</script>

<template>
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
</template>
```

## API Reference

Form·FormField 는 [vee-validate](https://vee-validate.logaretm.com/v4/)에서 re-export 되고, FormItem·FormLabel·FormControl·FormDescription·FormMessage 는 접근성 id·오류 스타일을 연결하는 래퍼입니다. as / asChild 등 고급 Composition API는 이 패키지 문서 범위 밖입니다.

### Form

vee-validate Form 컴포넌트입니다. validation-schema, initial-values, @submit 등 vee-validate API 를 그대로 사용합니다.

#### Props (주요)

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| validationSchema | — | Schema | Zod 등 검증 스키마. |
| initialValues | — | object | 초기 필드 값. |
| keepValues | false | boolean | 언마운트 후 값 유지. |

#### Emits

| Event | Payload | Description |
| --- | --- | --- |
| submit | values, ctx | 유효할 때 제출. |
| invalidSubmit | ctx | 유효하지 않을 때. |

---

### FormField

vee-validate Field 입니다. name 과 v-slot componentField 로 입력에 바인딩합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| name | — | string | **필수.** 필드 이름. |
| rules | — | RuleExpression | 필드 단위 규칙(스키마 대신). |

#### Slots

| Slot | Description |
| --- | --- |
| default | componentField, value, errorMessage 등 Field 슬롯 props. |

---

### FormItem

필드 그룹(grid gap-2)과 FormItem id 를 provide 합니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 래퍼에 병합. |

---

### FormLabel

Label 과 연동되며, 오류 시 destructive 색이 적용됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 라벨에 병합. |

---

### FormControl

Slot 으로 입력을 감싸 id·aria-describedby·aria-invalid 를 설정합니다. FormField 내부에서만 사용하세요.

#### Slots

| Slot | Description |
| --- | --- |
| default | Input, Textarea 등. |

---

### FormDescription

보조 설명 텍스트. formDescriptionId 로 컨트롤과 연결됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 설명에 병합. |

---

### FormMessage

vee-validate ErrorMessage 래퍼. 필드 오류가 있을 때만 표시됩니다.

#### Props

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
| class | — | string | 메시지에 병합(text-destructive text-sm 기본). |

---

검증·배열 필드(FormFieldArray) 등은 [vee-validate 문서](https://vee-validate.logaretm.com/v4/)를 참고하세요.
