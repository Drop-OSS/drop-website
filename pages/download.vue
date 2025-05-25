<template>
  <div class="z-50 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1
          class="text-balance text-4xl font-bold tracking-tight text-white sm:text-7xl font-display"
        >
          Download
        </h1>
        <p
          class="mt-8 text-pretty text-lg font-medium text-zinc-400 sm:text-xl/8"
        >
          Choose your platform to download the Drop client, or set up your own
          server.
        </p>
      </div>

      <!-- Client Downloads -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Windows -->
        <div
          class="rounded-lg bg-white/5 p-6 ring-1 ring-white/10 flex flex-col gap-y-4 h-full"
        >
          <div>
            <div class="flex items-center gap-x-4">
              <LogoWindows class="h-8 w-8" />
              <h3 class="text-lg font-semibold text-white">Windows</h3>
            </div>
            <p class="mt-4 text-sm text-zinc-400">
              Download the Windows installer. May require administrator
              privileges on your system.
            </p>
          </div>
          <div class="mt-auto">
            <!-- UPDATE on update -->
            <NuxtLink
              :href="links.windows"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for Windows
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>

        <!-- macOS -->
        <div
          class="rounded-lg bg-white/5 p-6 ring-1 ring-white/10 flex flex-col gap-y-4 h-full"
        >
          <div>
            <div class="flex items-center gap-x-4">
              <LogoApple class="h-8 w-8 fill-white" />
              <h3 class="text-lg font-semibold text-white">macOS</h3>
            </div>
            <p class="mt-4 text-sm text-zinc-400">
              Download the macOS application. Supports both Intel and Apple
              Silicon.
            </p>
          </div>
          <div class="mt-auto">
            <NuxtLink
              v-if="links.macos.length !== 0"
              :href="links.macos"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for macOS
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
            <div
              v-else
              class="inline-flex items-center gap-x-2 rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Coming Soon
              <ClockIcon class="h-4 w-4" />
            </div>
          </div>
        </div>

        <!-- Linux -->
        <div
          class="rounded-lg bg-white/5 p-6 ring-1 ring-white/10 flex flex-col gap-y-4 h-full"
        >
          <div>
            <div class="flex items-center gap-x-4">
              <LogoLinux class="h-8 w-8 text-white" />
              <h3 class="text-lg font-semibold text-white">Linux</h3>
            </div>
            <p class="mt-4 text-sm text-zinc-400">
              Download the Linux <b>AppImage</b>, or get RPM and DEB packages
              from our

              <NuxtLink
                href="https://github.com/Drop-OSS/drop-app/releases"
                class="text-blue-400 hover:text-blue-300"
                >releases page</NuxtLink
              >
            </p>
          </div>
          <div class="mt-auto pt-2">
            <NuxtLink
              :href="links.linux"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for Linux
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Server Setup -->
      <div class="mt-16 text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Setup your own server
        </h2>
        <p class="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
          Want to host your own Drop server? Follow our comprehensive
          documentation to get started.
        </p>
        <div class="mt-8">
          <NuxtLink
            href="https://docs.droposs.org/docs/guides/quickstart"
            class="text-sm/6 font-semibold text-zinc-100"
            >Quickstart <span aria-hidden="true">&rarr;</span></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LogoApple, LogoLinux, LogoWindows } from "#components";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";

const links = {
  linux:
    "https://github.com/Drop-OSS/drop-app/releases/download/v0.2.0-beta/Drop.Desktop.Client_0.2.0-beta_amd64.AppImage",
  windows:
    "https://github.com/Drop-OSS/drop-app/releases/download/v0.2.0-beta/Drop.Desktop.Client_0.2.0-beta_x64-setup.exe",
  macos: "",
};
</script>
