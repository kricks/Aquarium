package mvc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AQUARIUM")
public class Aquarium {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "TYPE", nullable = true)
	private String type;
	
	@Column(name = "GALLON", nullable = true)
	private Integer gallon;
	
	@Column(name = "NOTES", nullable = true)
	private String notes;

	public Aquarium() {

	}

	public Aquarium(Long id, String name, String type, Integer gallon, String notes) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.gallon = gallon;
		this.notes = notes;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getGallon() {
		return gallon;
	}

	public void setGallon(Integer gallon) {
		this.gallon = gallon;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
//
//	public String toString() {
//		return "Id = " + id + ", name = " + name + ", type = " + type + ", gallons = " + gallon + ", notes = " + notes;
//	}

}
