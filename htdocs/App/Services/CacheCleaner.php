<?php

declare(strict_types=1);

namespace App\Services;

use Nette\Utils\FileSystem;

readonly class CacheCleaner
{
    public function __construct(
        private string $tempDir,
        private ?string $passwordHash,
    ) {
    }

    public function isEnabled(): bool
    {
        return !empty($this->passwordHash);
    }

    public function verifyPassword(string $password): bool
    {
        return $this->isEnabled() && password_verify($password, $this->passwordHash);
    }

    public function clear(): void
    {
        $cacheDir = $this->tempDir.'/cache';
        if (!is_dir($cacheDir)) {
            return;
        }

        foreach (scandir($cacheDir) as $item) {
            if ('.' === $item || '..' === $item) {
                continue;
            }
            FileSystem::delete($cacheDir.'/'.$item);
        }
    }
}
