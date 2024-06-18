<template>
  <div>
    <header class="fixed top-0 w-full bg-white shadow-2xl">
      <div class="mx-auto max-w-[1440px] px-4">
        <div class="flex items-center justify-center py-5">
          <div class="flex justify-self-center">
            <p class="text-xl font-bold tracking-[2px] font-roboto text-center">
              Portfolio
            </p>
          </div>
        </div>
      </div>
    </header>
    <div>
      <slot />
    </div>
  </div>
</template>
