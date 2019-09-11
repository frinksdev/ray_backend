CREATE TABLE travel_chat (
    id int primary key auto_increment,
    sent_at timestamp default current_timestamp,
    content varchar(100),
    travel_id int NOT NULL,
    FOREIGN KEY (travel_id) REFERENCES travel(id),
    sent_by ENUM('driver','rider') NOT NULL,
    state ENUM('sent','delivered','seen') DEFAULT 'sent'
)