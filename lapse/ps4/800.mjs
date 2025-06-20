export const pthread_offsets = new Map(
  Object.entries({
    pthread_create: 0x25610,
    pthread_join: 0x27c60,
    pthread_barrier_init: 0xa0e0,
    pthread_barrier_wait: 0x1ee00,
    pthread_barrier_destroy: 0xe180,
    pthread_exit: 0x19eb0,
  }),
);

export const off_kstr = 0x7edcff;
export const off_cpuid_to_pcpu = 0x228e6b0;

export const off_sysent_661 = 0x11040c0;
export const jmp_rsi = 0xe629c;

export const patch_elf_loc = "./kpatch/800.bin"; // Relative to `../../lapse.mjs`
