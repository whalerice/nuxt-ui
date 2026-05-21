<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Dialog,",
  "  DialogClose,",
  "  DialogContent,",
  "  DialogDescription,",
  "  DialogFooter,",
  "  DialogHeader,",
  "  DialogTitle,",
  "  DialogTrigger,",
  '} from "@whalerice/nuxt-ui/dialog";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "<" + "/script>",
  "",
  "<template>",
  "  <Dialog>",
  "    <DialogTrigger as-child>",
  '      <Button variant="outline">대화상자 열기</Button>',
  "    </DialogTrigger>",
  "    <DialogContent>",
  "      <DialogHeader>",
  "        <DialogTitle>프로필 수정</DialogTitle>",
  "        <DialogDescription>",
  "          이름과 이메일을 변경한 뒤 저장하세요.",
  "        </DialogDescription>",
  "      </DialogHeader>",
  "      <DialogFooter>",
  "        <DialogClose as-child>",
  '          <Button variant="outline">취소</Button>',
  "        </DialogClose>",
  "        <Button>저장</Button>",
  "      </DialogFooter>",
  "    </DialogContent>",
  "  </Dialog>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline">대화상자 열기</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
          <DialogDescription>
            이름과 이메일을 변경한 뒤 저장하세요.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose as-child>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button>저장</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </PreviewFrame>
</template>
