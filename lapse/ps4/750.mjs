

export const pthread_offsets = new Map(
  Object.entries({
    pthread_create: 0x25800,
    pthread_join: 0x27e60,
    pthread_barrier_init: 0xa090,
    pthread_barrier_wait: 0x1ef50,
    pthread_barrier_destroy: 0xe290,
    pthread_exit: 0x1a030,
  }),
);

export const off_kstr = 0x79a92e;
export const off_cpuid_to_pcpu = 0x2261070;

export const off_sysent_661 = 0x1129f30;
export const jmp_rsi = 0x1f842;

export const patch_elf_loc = "./kpatch/750.bin"; // Relative to `../../lapse.mjs`
