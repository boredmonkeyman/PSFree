
#pragma once

#include <stddef.h>

#include "types.h"

inline u64 rdmsr(u32 msr) {
    u32 low, high;

    asm("rdmsr" : "=a" (low), "=d" (high) : "c" (msr));
    return (low | ((u64)high << 32));
}

inline void enable_cr0_wp(void) {
    asm(
        "mov rax, cr0\n"
        "or rax, 0x10000\n"
        "mov cr0, rax\n"
    ::: "rax");
}

inline void disable_cr0_wp(void) {
    asm(
        "mov rax, cr0\n"
        "and rax, ~0x10000\n"
        "mov cr0, rax\n"
    ::: "rax");
}

inline void write8(void *addr, size_t offset, u8 value) {
    *(u8 *)(addr + offset) = value;
}

inline void write16(void *addr, size_t offset, u16 value) {
    *(u16 *)(addr + offset) = value;
}

inline void write32(void *addr, size_t offset, u32 value) {
    *(u32 *)(addr + offset) = value;
}

inline void write64(void *addr, size_t offset, u64 value) {
    *(u64 *)(addr + offset) = value;
}
