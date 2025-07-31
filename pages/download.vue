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

      <div class="mt-4 max-w-[10rem] mx-auto">
        <Listbox as="div" v-model="selectedVersion">
          <div class="relative">
            <ListboxButton
              class="grid w-full cursor-default grid-cols-1 rounded-md bg-zinc-900 py-1.5 pr-2 pl-3 text-left text-zinc-100 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            >
              <span class="col-start-1 row-start-1 truncate pr-6">{{
                selectedVersion
              }}</span>
              <ChevronUpDownIcon
                class="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                aria-hidden="true"
              />
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-900 py-1 text-base shadow-lg ring-1 ring-white/5 focus:outline-hidden sm:text-sm"
              >
                <ListboxOption
                  as="template"
                  v-for="version in versions"
                  :key="version"
                  :value="version"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active
                        ? 'bg-blue-600 text-white outline-hidden'
                        : 'text-zinc-100',
                      'relative cursor-default py-2 pr-9 pl-3 select-none',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ version }}</span
                    >

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-blue-600',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="size-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>

      <!-- Client Downloads -->
      <div
        v-if="selectedVersion == 'v0.3.0'"
        class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
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
              :href="v030.windows"
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
          <div class="mt-auto space-y-2">
            <NuxtLink
              :href="v030.macos.aarch64"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for macOS (M1 or later)
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
            <NuxtLink
              :href="v030.macos.x64"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for macOS (Intel)
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
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
              >.
            </p>
          </div>
          <div class="mt-auto pt-2 space-y-2">
            <NuxtLink
              :href="v030.linux.x64"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for Linux (amd64)
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
             <NuxtLink
              :href="v030.linux.aarch64"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for Linux (aarch64)
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        v-else-if="selectedVersion == 'v0.2.0'"
        class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
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
              :href="v020.windows"
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
            <div
              class="inline-flex items-center gap-x-2 rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Not supported
              <XMarkIcon class="h-4 w-4" />
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
              :href="v020.linux"
              class="inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Download for Linux
              <ArrowDownTrayIcon class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Server Setup -->
      <div class="mt-32 text-center">
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
import { ArrowDownTrayIcon, ClockIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { ChevronUpDownIcon } from "@heroicons/vue/16/solid";
import { CheckIcon } from "@heroicons/vue/20/solid";

const versions = ["v0.3.0", "v0.2.0"];
const selectedVersion = ref(versions[0]);

const v020 = {
  linux:
    "https://github.com/Drop-OSS/drop-app/releases/download/v0.2.0-beta/Drop.Desktop.Client_0.2.0-beta_amd64.AppImage",
  windows:
    "https://github.com/Drop-OSS/drop-app/releases/download/v0.2.0-beta/Drop.Desktop.Client_0.2.0-beta_x64-setup.exe",
  macos: "",
};

const v030 = {
  windows:
    "https://github.com/Drop-OSS/drop-app/releases/download/v0.3.0/Drop.Desktop.Client_0.3.0_x64-setup.exe",
  macos: {
    x64: "https://github.com/Drop-OSS/drop-app/releases/download/v0.3.0/Drop.Desktop.Client_0.3.0_x64.dmg",
    aarch64:
      "https://github.com/Drop-OSS/drop-app/releases/download/v0.3.0/Drop.Desktop.Client_0.3.0_aarch64.dmg",
  },
  linux: {
    x64: "https://github.com/Drop-OSS/drop-app/releases/download/v0.3.0/Drop.Desktop.Client_0.3.0_amd64.AppImage",
    aarch64:
      "https://github.com/Drop-OSS/drop-app/releases/download/v0.3.0/Drop.Desktop.Client_0.3.0_aarch64.AppImage",
  },
};
</script>
