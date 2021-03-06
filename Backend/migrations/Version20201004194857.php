<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201004194857 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__fees AS SELECT id, local_number, ammount, reason, pending, payed FROM fees');
        $this->addSql('DROP TABLE fees');
        $this->addSql('CREATE TABLE fees (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, local_number INTEGER NOT NULL, ammount INTEGER NOT NULL, reason VARCHAR(255) NOT NULL COLLATE BINARY, pending BOOLEAN NOT NULL, payed BOOLEAN NOT NULL, verified BOOLEAN DEFAULT NULL)');
        $this->addSql('INSERT INTO fees (id, local_number, ammount, reason, pending, payed) SELECT id, local_number, ammount, reason, pending, payed FROM __temp__fees');
        $this->addSql('DROP TABLE __temp__fees');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__fees AS SELECT id, local_number, ammount, reason, pending, payed FROM fees');
        $this->addSql('DROP TABLE fees');
        $this->addSql('CREATE TABLE fees (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, local_number INTEGER NOT NULL, ammount INTEGER NOT NULL, reason VARCHAR(255) NOT NULL, pending BOOLEAN DEFAULT NULL, payed BOOLEAN DEFAULT NULL)');
        $this->addSql('INSERT INTO fees (id, local_number, ammount, reason, pending, payed) SELECT id, local_number, ammount, reason, pending, payed FROM __temp__fees');
        $this->addSql('DROP TABLE __temp__fees');
    }
}
