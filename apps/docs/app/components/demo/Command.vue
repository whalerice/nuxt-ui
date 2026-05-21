<script setup lang="ts">
import {
  CalendarIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-vue-next";

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Command,",
  "  CommandEmpty,",
  "  CommandGroup,",
  "  CommandInput,",
  "  CommandItem,",
  "  CommandList,",
  "  CommandSeparator,",
  "  CommandShortcut,",
  '} from "@whalerice/nuxt-ui/command";',
  "<" + "/script>",
  "",
  "<template>",
  '  <Command class="rounded-lg border shadow-md">',
  '    <CommandInput placeholder="명령 검색…" />',
  "    <CommandList>",
  "      <CommandEmpty>결과가 없습니다.</CommandEmpty>",
  '      <CommandGroup heading="제안">',
  '        <CommandItem value="calendar">캘린더</CommandItem>',
  '        <CommandItem value="profile">프로필</CommandItem>',
  "      </CommandGroup>",
  "    </CommandList>",
  "  </Command>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Command class="mx-auto w-full max-w-sm rounded-lg border shadow-md">
      <CommandInput placeholder="명령 검색…" />
      <CommandList>
        <CommandEmpty>결과가 없습니다.</CommandEmpty>
        <CommandGroup heading="제안">
          <CommandItem value="calendar">
            <CalendarIcon />
            <span>캘린더</span>
          </CommandItem>
          <CommandItem value="profile">
            <UserIcon />
            <span>프로필</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem value="settings">
            <SettingsIcon />
            <span>설정</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="기타">
          <CommandItem value="emoji">
            <SmileIcon />
            <span>이모지</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </PreviewFrame>
</template>
