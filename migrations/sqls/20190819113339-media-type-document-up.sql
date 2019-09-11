alter table media modify type enum('car', 'service', 'driver image', 'driver header', 'operator image', 'rider image', 'promotion', 'driver document', 'document') null;
update media set type='document' where type='driver document';
alter table media modify type enum('car', 'service', 'driver image', 'driver header', 'operator image', 'rider image', 'promotion', 'document') null;