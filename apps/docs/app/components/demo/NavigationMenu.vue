<script setup lang="ts">

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  NavigationMenu,",
  "  NavigationMenuContent,",
  "  NavigationMenuItem,",
  "  NavigationMenuLink,",
  "  NavigationMenuList,",
  "  NavigationMenuTrigger,",
  '} from "@whalerice/nuxt-ui/navigation-menu";',
  "<" + "/script>",
  "",
  "<template>",
  "  <NavigationMenu>",
  "    <NavigationMenuList>",
  "      <NavigationMenuItem>",
  "        <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>",
  "        <NavigationMenuContent>",
  '          <ul class="grid gap-2 p-4 md:w-[280px]">',
  "            <li>",
  '              <NavigationMenuLink href="#">소개</NavigationMenuLink>',
  "            </li>",
  "            <li>",
  '              <NavigationMenuLink href="#">설치</NavigationMenuLink>',
  "            </li>",
  "          </ul>",
  "        </NavigationMenuContent>",
  "      </NavigationMenuItem>",
  "      <NavigationMenuItem>",
  '        <NavigationMenuLink href="#">문서</NavigationMenuLink>',
  "      </NavigationMenuItem>",
  "    </NavigationMenuList>",
  "  </NavigationMenu>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>시작하기</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-2 p-4 md:w-[280px]">
              <li>
                <NavigationMenuLink href="#">소개</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">설치</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">문서</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </PreviewFrame>
</template>
