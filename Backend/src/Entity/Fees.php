<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FeesRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     collectionOperations={"put","post"
 * },
 *      normalizationContext={
 *       "groups"={"read"}
 *     }
 * )
 * @ORM\Entity(repositoryClass=FeesRepository::class)

 */
class Fees
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read"})

     */
    private $local_number;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"read"})
     */
    private $ammount;

    /**
     * @Groups({"read"})
     * @ORM\Column(type="string", length=255)
     */
    private $reason;

    /**
     * @Groups({"read"})
     * @ORM\Column(type="boolean")
     */
    private $pending;

    /**
     * @Groups({"read"})
     * @ORM\Column(type="boolean")
     */
    private $payed;

    /**
     * @Groups({"read"})
     * @ORM\Column(type="boolean")
     */
    private $verified;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLocalNumber(): ?int
    {
        return $this->local_number;
    }

    public function setLocalNumber(int $local_number): self
    {
        $this->local_number = $local_number;

        return $this;
    }

    public function getAmmount(): ?int
    {
        return $this->ammount;
    }

    public function setAmmount(int $ammount): self
    {
        $this->ammount = $ammount;

        return $this;
    }

    public function getReason(): ?string
    {
        return $this->reason;
    }

    public function setReason(string $reason): self
    {
        $this->reason = $reason;

        return $this;
    }

    public function getPending(): ?bool
    {
        return $this->pending;
    }

    public function setPending(bool $pending): self
    {
        $this->pending = $pending;

        return $this;
    }

    public function getPayed(): ?bool
    {
        return $this->payed;
    }

    public function setPayed(bool $payed): self
    {
        $this->payed = $payed;

        return $this;
    }

    public function getVerified(): ?bool
    {
        return $this->verified;
    }

    public function setVerified(?bool $verified): self
    {
        $this->verified = $verified;

        return $this;
    }


}
