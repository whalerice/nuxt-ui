<script setup lang="ts">

const slides = [
  { title: "첫 번째", tone: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" },
  { title: "두 번째", tone: "bg-sky-500/15 text-sky-700 dark:text-sky-300" },
  { title: "세 번째", tone: "bg-violet-500/15 text-violet-700 dark:text-violet-300" },
];

const source = [
  "<" + 'script setup lang="ts">',
  "import {",
  "  Carousel,",
  "  CarouselContent,",
  "  CarouselItem,",
  "  CarouselNext,",
  "  CarouselPrevious,",
  '} from "@whalerice/nuxt-ui/carousel";',
  "<" + "/script>",
  "",
  "<template>",
  '  <Carousel class="relative w-full max-w-xs">',
  "    <CarouselContent>",
  '      <CarouselItem v-for="slide in slides" :key="slide.title">',
  '        <div class="flex aspect-video items-center justify-center rounded-lg border p-6">',
  "          <span class=" + '"text-lg font-semibold">{{ slide.title }}</span>',
  "        </div>",
  "      </CarouselItem>",
  "    </CarouselContent>",
  "    <CarouselPrevious />",
  "    <CarouselNext />",
  "  </Carousel>",
  "<" + "/template>",
].join("\n");
</script>

<template>
  <PreviewFrame :code="source">
    <Carousel class="relative mx-auto w-full max-w-xs">
      <CarouselContent>
        <CarouselItem v-for="slide in slides" :key="slide.title">
          <div
            class="flex aspect-video items-center justify-center rounded-lg border p-6"
            :class="slide.tone"
          >
            <span class="text-lg font-semibold">{{ slide.title }}</span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </PreviewFrame>
</template>
