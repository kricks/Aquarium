package mvc.model.livestock;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import mvc.model.aquarium.AquariumImpl;

@Entity
@Table(name = "LIVESTOCK")
public class LivestockImpl implements Livestock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer liveStockId;

	@Column(name = "NAME", nullable = false)
	private String name;

	@Column(name = "SPECIES", nullable = false)
	private String species;

	@Column(name = "GENDER", nullable = true)
	private String gender;

	@Column(name = "NOTES", nullable = true)
	private String notes;

	@ManyToOne
	@JoinColumn(name = "AQUARIUM_ID")
	private AquariumImpl aquarium;

	public Integer getLiveStockId() {
		return liveStockId;
	}

	public void setLiveStockId(Integer liveStockId) {
		this.liveStockId = liveStockId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public AquariumImpl getAquarium() {
		return aquarium;
	}

	public void setAquarium(AquariumImpl aquarium) {
		this.aquarium = aquarium;
	}

}
