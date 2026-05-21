<script setup lang="ts">
const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Accordion,",
  "  AccordionContent,",
  "  AccordionItem,",
  "  AccordionTrigger,",
  '} from "@whalerice/nuxt-ui/accordion";',
  "<" + "/script>",
  "",
  "<template>",
  '  <Accordion type="single" collapsible class="w-full">',
  '    <AccordionItem value="a">',
  "      <AccordionTrigger>접근성을 지원하나요?</AccordionTrigger>",
  "      <AccordionContent>",
  "        네. WAI-ARIA 패턴을 따릅니다.",
  "      </AccordionContent>",
  "    </AccordionItem>",
  '    <AccordionItem value="b">',
  "      <AccordionTrigger>스타일은 어떻게 바꾸나요?</AccordionTrigger>",
  "      <AccordionContent>",
  '        Tailwind 클래스와 <code class="rounded bg-muted px-1">cn()</code> 유틸로 조정합니다.',
  "      </AccordionContent>",
  "    </AccordionItem>",
  '    <AccordionItem value="c">',
  "      <AccordionTrigger>여러 패널을 동시에 열 수 있나요?</AccordionTrigger>",
  "      <AccordionContent>",
  '        <code class="rounded bg-muted px-1">type="multiple"</code> 로 바꾸면 됩니다.',
  "      </AccordionContent>",
  "    </AccordionItem>",
  "  </Accordion>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <preview-frame :code="source">
    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="a">
        <AccordionTrigger>접근성을 지원하나요?</AccordionTrigger>
        <AccordionContent> 네. WAI-ARIA 패턴을 따릅니다. </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>스타일은 어떻게 바꾸나요?</AccordionTrigger>
        <AccordionContent>
          Tailwind 클래스와
          <code class="rounded bg-muted px-1 text-xs">cn()</code>
          유틸로 조정합니다.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="c">
        <AccordionTrigger>여러 패널을 동시에 열 수 있나요?</AccordionTrigger>
        <AccordionContent>
          <code class="rounded bg-muted px-1 text-xs">type="multiple"</code>
          로 바꾸면 됩니다.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </preview-frame>
</template>
