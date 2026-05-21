<script setup lang="ts">
const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Avatar,",
  "  AvatarFallback,",
  "  AvatarImage,",
  '} from "@whalerice/nuxt-ui/avatar";',
  'import { Button } from "@whalerice/nuxt-ui/button";',
  "import {",
  "  HoverCard,",
  "  HoverCardContent,",
  "  HoverCardTrigger,",
  '} from "@whalerice/nuxt-ui/hover-card";',
  "<" + "/script>",
  "",
  "<template>",
  "  <HoverCard>",
  "    <HoverCardTrigger>",
  '      <Button variant="link">@whalerice</Button>',
  "    </HoverCardTrigger>",
  '    <HoverCardContent class="w-80">',
  '      <div class="flex gap-3">',
  "        <Avatar>",
  '          <AvatarImage src="https://github.com/shadcn.png" alt="Whalerice" />',
  "          <AvatarFallback>SF</AvatarFallback>",
  "        </Avatar>",
  "        <div>",
  '          <p class="font-medium">Whalerice</p>',
  '          <p class="text-muted-foreground text-sm">디자인 시스템 팀</p>',
  "        </div>",
  "      </div>",
  "    </HoverCardContent>",
  "  </HoverCard>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link">@whalerice</Button>
      </HoverCardTrigger>
      <HoverCardContent class="w-80">
        <div class="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Whalerice" />
            <AvatarFallback>SF</AvatarFallback>
          </Avatar>
          <div>
            <p class="font-medium">Whalerice</p>
            <p class="text-sm text-muted-foreground">디자인 시스템 팀</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </PreviewFrame>
</template>
