
export const pthread_offsets = new Map(
  Object.entries({
    pthread_create: 0x256b0,
    pthread_join: 0x27d00,
    pthread_barrier_init: 0xa170,
    pthread_barrier_wait: 0x1ee80,
    pthread_barrier_destroy: 0xe2e0,
    pthread_exit: 0x19fd0,
  }),
);

export const off_kstr = 0x7f92cb;
export const off_cpuid_to_pcpu = 0x212cd10;

export const off_sysent_661 = 0x112d250;
export const jmp_rsi = 0x6b192;

export const patch_elf_loc = "./kpatch/700.bin"; // Relative to `../../lapse.mjs`
