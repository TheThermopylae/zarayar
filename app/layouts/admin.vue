<template>
  <ClientOnly>
    <div>
      <div class="max-w-[640px] m-auto pb-24">
        <slot />
      </div>
      <NavLinks />
    </div>
  </ClientOnly>
</template>
