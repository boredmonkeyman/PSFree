export const pthread_offsets = new Map(
  Object.entries({
    pthread_create: 0x1c540,
    pthread_join: 0x9560,
    pthread_barrier_init: 0x24200,
    pthread_barrier_wait: 0x1efb0,
    pthread_barrier_destroy: 0x19450,
    pthread_exit: 0x28ca0,
  }),
);

export const off_kstr = 0x769a88;
export const off_cpuid_to_pcpu = 0x21a66c0;

export const off_sysent_661 = 0x1100ee0;
export const jmp_rsi = 0x15a6d;

export const patch_elf_loc = "./kpatch/950.bin"; // Relative to `../../lapse.mjs`
