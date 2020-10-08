<?php


namespace App\Controller;


use App\Entity\Fees;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;


class FeeController extends AbstractController
{
    /**
     * @Route("/api/feeslocal/{local}", name="oplaty_mieszkanie")
     */
    public function findByLocal($local)
    {
     return $this->json(
         $this->getDoctrine()->getRepository(Fees::class)->findBy(['local_number'=>$local])
     );
    }
}