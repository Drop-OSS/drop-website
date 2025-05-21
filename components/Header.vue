<template>
  <header class="isolate z-10 absolute top-0 inset-x-0">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Drop</span>
          <Logo class="h-8 w-auto" />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>

      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <!--
        <Popover>
          <PopoverButton
            class="flex items-center gap-x-1 text-sm/6 font-semibold text-zinc-100"
          >
            Features
            <ChevronDownIcon
              class="size-5 flex-none text-zinc-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <PopoverPanel
              class="absolute inset-x-0 top-0 -z-10 bg-zinc-900 pt-14 shadow-lg ring-1 ring-zinc-900/5"
            >
              <div
                class="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8"
              >
                <div
                  v-for="item in features"
                  :key="item.name"
                  class="transition group relative rounded-lg p-6 text-sm/6 hover:bg-zinc-800"
                >
                  <div
                    class="transition flex size-11 items-center justify-center rounded-lg bg-zinc-950 group-hover:bg-zinc-900"
                  >
                    <component
                      :is="item.icon"
                      class="transition size-6 text-blue-600 group-hover:text-blue-500"
                      aria-hidden="true"
                    />
                  </div>
                  <NuxtLink
                    :href="item.href"
                    class="transition mt-6 block font-semibold text-zinc-100"
                  >
                    {{ item.name }}
                    <span class="absolute inset-0" />
                  </NuxtLink>
                  <p class="mt-1 text-zinc-400">{{ item.description }}</p>
                </div>
              </div>
              <div class="bg-zinc-950 h-3" />
            </PopoverPanel>
          </transition>
        </Popover>
        -->

        <NuxtLink
          v-for="(route, i) in routes"
          :key="i"
          :href="route.href"
          class="text-sm/6 font-semibold text-zinc-100"
          >{{ route.name }}</NuxtLink
        >
      </PopoverGroup>

      <div class="hidden lg:flex" />
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          href="https://wiki.droposs.org/guides/quickstart.html"
          class="text-sm/6 font-semibold text-zinc-100"
          >Quickstart <span aria-hidden="true">&rarr;</span></NuxtLink
        >
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10"
      >
        <div class="flex items-center justify-between">
          <NuxtLink href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <Logo class="h-8 w-auto" alt="Drop logo" />
          </NuxtLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-zinc-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-zinc-500/10">
            <div class="space-y-2 py-6">
              <!--<Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
                >
                  Product
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'size-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...products, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-zinc-300 hover:bg-zinc-800"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>-->
              <NuxtLink
                v-for="(route, i) in routes"
                :key="i"
                :href="route.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
              >
                {{ route.name }}
              </NuxtLink>
            </div>
            <div class="py-6">
              <NuxtLink
                :href="quickstartLink"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-zinc-100 hover:bg-zinc-800"
                >Quickstart <span aria-hidden="true">&rarr;</span></NuxtLink
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ServerStackIcon,
  ShareIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/vue/20/solid";
import SteamIcon from "./SteamIcon.vue";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Comparison",
    href: "/comparison",
  },
  // {
  //   name: "Documentation",
  //   href: "https://wiki.droposs.org/",
  // },
  {
    name: "Download",
    href: "/download",
  },
  {
    name: "Forum",
    href: "https://forum.droposs.org/"
  }
];

const quickstartLink = "https://wiki.droposs.org/guides/quickstart.html";

const features = [
  {
    name: "Library Management",
    description:
      "Learn how Drop can help you manage your library, and enhance it with metadata.",
    href: "/features/library",
    icon: ServerStackIcon,
  },
  {
    name: "Sharing",
    description:
      "Learn how Drop allows you to share your game library with friends & family.",
    href: "/features/sharing",
    icon: ShareIcon,
  },
  {
    name: "Steamworks",
    description:
      "Learn how Drop's Steamworks library can emulate Steam's features on your Drop server.",
    href: "#",
    icon: SteamIcon,
  },
  {
    name: "Integrations",
    description:
      "Learn how to integrate your other tools and software with Drop.",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

const router = useRouter();
router.afterEach(() => {
  mobileMenuOpen.value = false;
});

const mobileMenuOpen = ref(false);
</script>
