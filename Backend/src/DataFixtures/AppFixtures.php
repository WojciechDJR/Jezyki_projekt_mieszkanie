<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures
{


    public function load(ObjectManager $manager)
    {
        $product = new Product();
         $manager->persist($product);

        $manager->flush();
    }
}
