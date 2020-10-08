<?php


namespace App\Controller;



use App\Entity\Users;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class AccountController extends AbstractController
{
    /**
     *@Route("/api/account/{login}", name="dane_logowanie")
     */
    public function findByLogin($login)
    {
        return $this->json(
            $this->getDoctrine()->getRepository(Users::class)->findBy(['Login'=>$login])
        );
    }
}
