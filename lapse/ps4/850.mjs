export const pthread_offsets = new Map(
  Object.entries({
    pthread_create: 0xebb0,
    pthread_join: 0x29d50,
    pthread_barrier_init: 0x283c0,
    pthread_barrier_wait: 0xb8c0,
    pthread_barrier_destroy: 0x9c10,
    pthread_exit: 0x25310,
  }),
);

export const off_kstr = 0x7da91c;
export const off_cpuid_to_pcpu = 0x1cfc240;

export const off_sysent_661 = 0x11041b0;
export const jmp_rsi = 0xc810d;

export const patch_elf_loc = "./kpatch/850.bin"; // Relative to `../../lapse.mjs`
