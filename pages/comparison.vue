<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
      <h1
        class="text-balance text-5xl font-semibold tracking-tight text-zinc-100 sm:text-6xl lg:text-pretty"
      >
        What's the
        <span class="font-mono px-2 py-1 rounded-xl text-zinc-300 bg-zinc-900"
          >git diff</span
        >?
      </h1>
      <p
        class="mt-6 max-w-2xl text-pretty text-lg font-medium text-zinc-400 max-lg:mx-auto sm:text-xl/8"
      >
        What's the difference between Drop and the other options available to
        me? This guide, put together by the Drop team, explains the difference
        in use-case and features.
      </p>
      <div class="mt-8 rounded-md bg-blue-600/20 backdrop-blur p-4">
        <div class="inline-flex ">
          <div class="shrink-0">
            <InformationCircleIcon
              class="size-5 text-blue-400"
              aria-hidden="true"
            />
          </div>
          <div class="ml-3 flex-1 md:flex md:flex-col md:justify-between">
            <p class="text-sm text-blue-200">
              This comparison was made by the Drop team, and may inaccurately
              represent some options. If you are a developer or maintainer for
              one of these projects, feel free to reach out to us to get your
              project removed or updated.
            </p>
            <p class="mt-3 text-sm inline-flex items-center">
              <NuxtLink
                href="https://github.com/Drop-OSS/drop-website"
                target="_blank"
                class="whitespace-nowrap font-medium text-blue-400 hover:text-blue-500"
              >
                GitHub
                <span aria-hidden="true"> &rarr;</span>
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative py-16 sm:py-24">
      <div
        class="absolute inset-x-0 bottom-0 top-48 bg-zinc-950/20 backdrop-blur-xl"
      />
      <div class="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <!-- change cols if add more projects -->
        <div class="w-fit grid grid-cols-1 gap-10 lg:grid-cols-3 mx-auto">
          <div
            v-for="project in projects"
            :key="project.name"
            class="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
          >
            <div
              class="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5"
            >
              <div
                class="rounded-3xl bg-zinc-950 p-10 pb-9 shadow-2xl ring-1 ring-black/5"
              >
                <h2 class="text-2xl font-semibold text-blue-400">
                  {{ project.name }}
                </h2>
                <p class="mt-2 text-pretty text-sm/6 text-zinc-400">
                  {{ project.description }}
                </p>
                <div class="mt-8">
                  <NuxtLink
                    :href="project.href"
                    :aria-label="`Check out ${project.name}`"
                    class="inline-block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >Check it out &rarr;</NuxtLink
                  >
                </div>
                <div class="mt-8">
                  <h3 class="text-sm/6 font-medium text-zinc-100">
                    Feature highlights
                  </h3>
                  <ul class="flex flex-col mt-3 gap-y-3">
                    <li
                      v-for="highlight in project.highlights"
                      :key="highlight.description"
                      class="group inline-flex flex-col gap-1 items-start text-sm/6 text-zinc-400"
                    >
                      <div class="inline-flex items-center gap-3">
                        <span class="inline-flex h-6 items-center">
                          <PlusIcon
                            class="size-4 fill-blue-600"
                            aria-hidden="true"
                          />
                        </span>
                        {{ highlight.description }}
                      </div>
                      <ComingSoon v-if="(highlight as any)['comingsoon']" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
      <table class="w-full text-left max-sm:hidden">
        <caption class="sr-only">
          Project comparison
        </caption>
        <colgroup>
          <!-- add or remove columns when updating project -->
          <col class="w-2/5" />
          <col class="w-1/5" />
          <col class="w-1/5" />
          <col class="w-1/5" />
        </colgroup>
        <thead>
          <tr>
            <td class="p-0" />
            <th
              v-for="project in projects"
              :key="project.name"
              scope="col"
              class="p-1 sticky top-4 text-center"
            >
              <div class="text-xl font-semibold text-zinc-100">
                {{ project.name }}
              </div>
            </th>
          </tr>
        </thead>
        <tbody v-for="section in sections" :key="section.name" class="group">
          <tr>
            <th
              scope="colgroup"
              colspan="4"
              class="px-0 pb-0 pt-10 group-first-of-type:pt-5"
            >
              <div
                class="-mx-4 rounded-lg px-4 py-3 text-sm/6 font-semibold text-zinc-100"
              >
                {{ section.name }}
              </div>
            </th>
          </tr>
          <tr
            v-for="feature in section.features"
            :key="feature.name"
            class="border-b border-zinc-600 last:border-none"
          >
            <th
              scope="row"
              class="px-0 py-4 text-sm/6 font-normal text-zinc-300"
            >
              {{ feature.name }}
            </th>
            <td
              v-for="tier in projects"
              :key="tier.name"
              class="p-4 text-center"
            >
              <template v-if="typeof feature.projects[tier.name] === 'string'">
                <span class="sr-only">{{ tier.name }} includes:</span>
                <span class="text-sm/6 text-zinc-400">{{
                  feature.projects[tier.name]
                }}</span>
              </template>
              <template v-else>
                <CheckIcon
                  v-if="feature.projects[tier.name] === true"
                  class="inline-block size-6 fill-green-600"
                  aria-hidden="true"
                />
                <MinusIcon
                  v-else
                  class="inline-block size-6 fill-gray-400"
                  aria-hidden="true"
                />
                <span class="sr-only">{{
                  feature.projects[tier.name] === true
                    ? `Included in ${tier.name}`
                    : `Not included in ${tier.name}`
                }}</span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
      <TabGroup class="sm:hidden" as="div">
        <TabList class="grid grid-cols-3 gap-x-1">
          <Tab
            as="template"
            v-for="tier in projects"
            :key="tier.name"
            v-slot="{ selected }"
          >
            <button
              :class="[
                selected ? 'border-blue-600' : 'border-zinc-600',
                'border-b-2 text-zinc-100 pb-1',
              ]"
            >
              {{ tier.name }}
            </button>
          </Tab>
        </TabList>
        <TabPanels as="template">
          <TabPanel v-for="tier in projects" :key="tier.name">
            <template v-for="section in sections" :key="section.name">
              <div
                class="-mx-6 mt-10 rounded-lg px-6 py-3 text-sm/6 font-semibold text-zinc-100 group-first-of-type:mt-5"
              >
                {{ section.name }}
              </div>
              <dl>
                <div
                  v-for="feature in section.features"
                  :key="feature.name"
                  class="grid grid-cols-2 border-b border-zinc-700 py-4 last:border-none"
                >
                  <dt class="text-sm/6 font-normal text-gray-400">
                    {{ feature.name }}
                  </dt>
                  <dd class="text-center">
                    <span
                      v-if="typeof feature.projects[tier.name] === 'string'"
                      class="text-sm/6 text-zinc-400"
                      >{{ feature.projects[tier.name] }}</span
                    >
                    <template v-else>
                      <CheckIcon
                        v-if="feature.projects[tier.name] === true"
                        class="inline-block size-6 fill-green-600"
                        aria-hidden="true"
                      />
                      <MinusIcon
                        v-else
                        class="inline-block size-6 fill-gray-400"
                        aria-hidden="true"
                      />
                      <span class="sr-only">{{
                        feature.projects[tier.name] === true ? "Yes" : "No"
                      }}</span>
                    </template>
                  </dd>
                </div>
              </dl>
            </template>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/vue/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import { InformationCircleIcon } from "@heroicons/vue/24/outline";

const projects = [
  {
    name: "Drop",
    description: "An open Steam.",
    href: "/",
    highlights: [
      { description: "First-class Linux support" },
      { description: "Lightweight game upgrades" },
      { description: "Multiple metadata sources" },
      { description: "Cloud-saves & playtime tracking", comingsoon: true },
      { description: "Steamworks replacement library", comingsoon: true },
    ],
  },
  {
    name: "GameVault",
    description: "Create your own gaming platform.",
    href: "https://gamevau.lt/",
    highlights: [
      { description: "First-class Windows support" },
      { description: "Native Windows app" },
      { description: "Share with family & friends" },
      { description: "Playtime tracking" },
      { description: "Optional paid features" },
      { description: "Various platform integrations" },
    ],
  },

  /*
  {
    name: "LANCommander",
    description: "An open-source digital game platform.",
    href: "https://github.com/LANCommander/LANCommander",
    highlights: [
      { description: "License key management" },
      { description: "Dedicated server management" },
      { description: "PowerShell scripting" },
      { description: "Cloud-saves" },
      { description: "P2P downloads & VPN networking", comingsoon: true },
    ],
  },
  */
] as const;
type Names = (typeof projects)[number]["name"];
const sections: Array<{
  name: string;
  features: Array<{
    name: string;
    projects: { [key in Names]?: boolean | string };
  }>;
}> = [
  {
    name: "Library Management",
    features: [
      {
        name: "Metadata fetching",
        projects: { Drop: true, GameVault: true, LANCommander: false },
      },
      {
        name: "Game versioning",
        projects: { Drop: true },
      },
      {
        name: "Redistributables",
        projects: { LANCommander: true },
      },
      {
        name: "License key management",
        projects: { LANCommander: true },
      },
      {
        name: "Automatic import",
        projects: { GameVault: true },
      },
      {
        name: "Collections",
        projects: { Drop: true, LANCommander: true },
      },
    ],
  },
  {
    name: "Deployment",
    features: [
      {
        name: "Docker",
        projects: { Drop: true, GameVault: true, LANCommander: true },
      },
      {
        name: "CapRover",
        projects: { GameVault: true },
      },
      {
        name: "TrueNAS",
        projects: { GameVault: true },
      },
      {
        name: "UNRAID",
        projects: { GameVault: true },
      },
      {
        name: "Synology",
        projects: { GameVault: true },
      },
      {
        name: "Native",
        projects: {
          GameVault: true,
          Drop: "Possible, unsupported",
          LANCommander: true,
        },
      },
      {
        name: "ARM support",
        projects: {
          GameVault: true,
          Drop: true,
          LANCommander: true,
        },
      },
    ],
  },
  {
    name: "Operating Systems",
    features: [
      {
        name: "Windows",
        projects: { Drop: true, GameVault: true, LANCommander: true },
      },
      {
        name: "macOS",
        projects: { Drop: true, LANCommander: true },
      },
      {
        name: "Linux",
        projects: {
          Drop: true,
          LANCommander: true,
          GameVault: "Unsupported, using Wine",
        },
      },
    ],
  },
  {
    name: "Integrations",
    features: [
      {
        name: "Playnite",
        projects: { GameVault: "Paid feature ($)" },
      },
      {
        name: "Discord",
        projects: {
          GameVault: "Paid feature ($)",
          LANCommander: "Coming soon",
        },
      },
      {
        name: "Steam",
        projects: { GameVault: "Paid feature ($)" },
      },
    ],
  },
  {
    name: "Other",
    features: [
      {
        name: "Cloud saves",
        projects: {
          Drop: "Coming soon",
          LANCommander: true,
          GameVault: "Paid feature ($)",
        },
      },
      {
        name: "Dedicated server management",
        projects: { LANCommander: true },
      },
      {
        name: "Steamworks library",
        projects: { Drop: "Coming soon" },
      },
      {
        name: "P2P downloads",
        projects: { Drop: "Coming soon", LANCommander: "Coming soon" },
      },
      {
        name: "Remote LAN/automatic networking",
        projects: { Drop: "Coming soon", LANCommander: "Coming soon" },
      },
    ],
  },
];

useHead({
  title: "What's the `git diff`?",
});
</script>
