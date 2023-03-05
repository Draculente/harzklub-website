<script lang="ts">
  import type { Image } from "@lib/imageGallery";
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { swipe } from "svelte-gestures";
  import { fly } from "svelte/transition";

  export let images: Image[];
  export let showInfo = false;
  export let showTitle = true;

  if (images.length === 0) {
    throw new Error("ImageGallery must have at least one image");
  }

  let selectedImage: Image = images[0];
  let selectedImageIndex = 0;
  let modalIsOpen = false;
  let loading = false;
  let info = false;
  let fullscreen = false;
  let iconsHidden = false;
  let timeout: NodeJS.Timeout | null = null;

  $: iconsAreHidden = fullscreen && iconsHidden;

  function nextImage(direction: "next" | "previous") {
    const value = direction === "next" ? 1 : -1;
    return () => {
      const newIndex = (selectedImageIndex + value) % images.length;
      selectedImageIndex = newIndex >= 0 ? newIndex : images.length - 1;
      selectedImage = images[selectedImageIndex];
      loading = true;
    };
  }
  function toggleModal() {
    modalIsOpen = !modalIsOpen;
    document.body.classList.toggle("overflow-hidden");
    if (!modalIsOpen && fullscreen) {
      fullscreen = false;
      document.exitFullscreen();
    }
  }
  function toggleFullscreen() {
    fullscreen = !fullscreen;
    if (fullscreen) {
      document.documentElement.requestFullscreen();
      hideIcons();
    } else {
      document.exitFullscreen();
    }
  }
  function hideIcons() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (fullscreen) iconsHidden = true;
    }, 3000);
  }
  function showIcons() {
    iconsHidden = false;
    console.log(iconsAreHidden);

    hideIcons();
  }
  const touch = matchMedia("(hover: none), (pointer: coarse)").matches;
</script>

<svelte:body
  on:keyup={(e) => {
    if (!modalIsOpen) return;

    if (e.key === "Escape") {
      toggleModal();
    }
    if (e.key === "ArrowRight") {
      nextImage("next")();
    }
    if (e.key === "ArrowLeft") {
      nextImage("previous")();
    }
  }}
/>

<div class="flex flex-row gap-6 flex-wrap py-5">
  {#each images as image, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      class="rounded-md cursor-pointer h-[200px] max-w-full"
      on:click={() => {
        toggleModal();
        loading = true;
        selectedImage = image;
        selectedImageIndex = i;
      }}
      id={image.id}
      src={image.src + "?height=200&q=50"}
      srcset={image.src +
        "?height=200&q=50, " +
        image.src +
        "?height=200&q=70 1.5x, " +
        image.src +
        "?height=200&q=80 2x"}
      alt={image.description}
    />
  {/each}
</div>

{#if modalIsOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->

  <div
    class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-base-200"
    on:click={() => {
      if (iconsAreHidden) {
        showIcons();
      } else {
        toggleModal();
      }
    }}
    use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: "none" }}
    on:swipe={(e) => {
      if (!touch) return;
      switch (e.detail.direction) {
        case "left":
          nextImage("next")();
          break;
        case "right":
          nextImage("previous")();
          break;
        case "top":
          info = true;
          break;
        case "bottom":
          info = false;
          break;

        default:
          break;
      }
    }}
  >
    <div class="relative">
      <img
        on:click|stopPropagation={() => {}}
        on:load={() => (loading = false)}
        class={"max-h-screen max-w-screen" + (loading ? " hidden" : "")}
        src={selectedImage.src}
        alt={selectedImage.description}
      />
      {#if loading}
        <div
          class="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div class="spinner">
            <LottiePlayer
              src="/animation/Loading_Green.json"
              controls={false}
              controlsLayout={false}
              height={100}
              width={100}
              autoplay
              loop
              background="transparent"
            />
          </div>
        </div>
      {/if}
    </div>

    {#if selectedImage.title && showTitle && !iconsAreHidden}
      <div class="fixed top-4 w-full flex flex-row justify-center">
        <div class="badge badge-primary">{selectedImage.title}</div>
      </div>
    {/if}

    {#if info && showInfo}
      <div
        class="absolute bottom-0 left-0 w-full flex flex-row justify-center shadow-md"
        on:click|stopPropagation={() => {}}
      >
        <div
          class="w-screen max-w-lg flex flex-col gap-5 p-4 rounded-t-md bg-base-100"
          transition:fly={{ x: 0, y: 100, duration: 300 }}
        >
          <div class="flex flex-row items-center gap-3">
            <i class="ri-text text-primary text-xl" />
            {selectedImage.title ?? "Kein Titel angegeben"}
          </div>
          <div class="flex flex-row items-center gap-3">
            <i class="ri-file-text-line text-primary text-xl" />
            {selectedImage.description ?? "Keine Beschreibung angegeben"}
          </div>
          <div class="flex flex-row items-center gap-3">
            <i class="ri-map-pin-line text-primary text-xl" />
            {selectedImage.location ?? "Kein Ort angegeben"}
          </div>
        </div>
      </div>
    {/if}

    {#if !iconsAreHidden}
      <div class="h-screen flex flex-col justify-center absolute top-0 left-0">
        <button
          class="p-4 rounded-full "
          on:click|stopPropagation={nextImage("previous")}
          ><i class="ri-arrow-left-s-line text-3xl" />
        </button>
      </div>

      <div class="h-screen flex flex-col justify-center absolute top-0 right-0">
        <button
          class="p-4 rounded-full "
          on:click|stopPropagation={nextImage("next")}
          ><i class="ri-arrow-right-s-line text-3xl" />
        </button>
      </div>

      <button
        class="absolute bottom-0 right-0 p-4 rounded-full md:hidden"
        on:click|stopPropagation={() => {
          info = !info;
        }}
        ><i class="ri-information-line text-3xl" />
      </button>

      <button class="absolute top-0 right-0 p-4 rounded-full"
        ><i class="ri-close-line text-3xl" />
      </button>

      <button
        class="absolute top-0 left-0 p-4 rounded-full"
        on:click|stopPropagation={() => {
          toggleFullscreen();
        }}
      >
        {#if fullscreen}
          <i class={"text-2xl ri-fullscreen-exit-line"} />
        {:else}
          <i class={"text-2xl ri-fullscreen-line"} />
        {/if}
      </button>
    {/if}
  </div>
{/if}
