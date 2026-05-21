<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Card,",
  "  CardAction,",
  "  CardContent,",
  "  CardDescription,",
  "  CardFooter,",
  "  CardHeader,",
  "  CardTitle,",
  '} from "@whalerice/nuxt-ui/card";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "<" + "/script>",
  "",
  "<template>",
  '  <Card class="w-full max-w-md">',
  "    <CardHeader>",
  "      <CardTitle>프로젝트 개요</CardTitle>",
  "      <CardDescription>팀 대시보드에 표시할 요약 카드입니다.</CardDescription>",
  "      <CardAction>",
  '        <Button variant="outline" size="sm">편집</Button>',
  "      </CardAction>",
  "    </CardHeader>",
  "    <CardContent>",
  "      <p class=\"text-sm\">본문 콘텐츠를 여기에 배치합니다.</p>",
  "    </CardContent>",
  "    <CardFooter>",
  "      <Button>저장</Button>",
  "    </CardFooter>",
  "  </Card>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Card class="w-full max-w-md">
      <CardHeader>
        <CardTitle>프로젝트 개요</CardTitle>
        <CardDescription>팀 대시보드에 표시할 요약 카드입니다.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">편집</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p class="text-sm">본문 콘텐츠를 여기에 배치합니다.</p>
      </CardContent>
      <CardFooter>
        <Button>저장</Button>
      </CardFooter>
    </Card>
  </PreviewFrame>
</template>
