<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201003203023 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fees ADD COLUMN pending BOOLEAN DEFAULT NULL');
        $this->addSql('ALTER TABLE fees ADD COLUMN payed BOOLEAN DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__fees AS SELECT id, local_number, ammount, reason FROM fees');
        $this->addSql('DROP TABLE fees');
        $this->addSql('CREATE TABLE fees (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, local_number INTEGER NOT NULL, ammount INTEGER NOT NULL, reason VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO fees (id, local_number, ammount, reason) SELECT id, local_number, ammount, reason FROM __temp__fees');
        $this->addSql('DROP TABLE __temp__fees');
    }
}
